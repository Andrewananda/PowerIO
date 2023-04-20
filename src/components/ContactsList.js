import React, {Component} from 'react';
import Contacts from 'react-native-contacts';
import Contact from './Contact';
import {FlatList, Modal, View, Text, StyleSheet, Pressable} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { addSelectedContact, showContacts } from '../redux/actions';
class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      modalVisible: false,
    };

  }

  componentDidMount() {
    console.log('ContactsMounted.....');
    this.setState({contacts: []}, () => {
      Contacts.getAll().then(contacts => {
        this.setState({contacts: contacts});
      });
    });
  }


  renderItem = ({item, index}) => {
    let _this = this;
    return (
      <Pressable
        onPress={() => {
          _this.props.addSelectedContact(item?.phoneNumbers[0]?.number);
          this.props.showContacts(false);
        }}>
        <Contact contact={item} />
      </Pressable>
    );
  };

  keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };

  showContactList() {
    this.setState({modalVisible: true});
  }

  hideContactList() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.displayContacts}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.titleStyle}>Select Contact</Text>
              <FlatList
                data={this.state.contacts}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    height: '70%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10,
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      showContacts,
      addSelectedContact,
    },
    dispatch,
  );
};

const mapStateToProps = state => {
  return {
    displayContacts: state.appState.displayContacts,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
