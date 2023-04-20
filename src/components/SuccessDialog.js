import React, {Component} from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {CommonActions} from '@react-navigation/native';
class SuccessDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      visible: false,
      executeV: false,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.setState({visible: false});
  }

  showSuccessDialog(message) {
    let _this = this;
    this.setState({
      visible: true,
      message: message,
    });
  }

  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.visible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.titleStyle}>Success!</Text>
              <Text style={{textAlign: 'center'}}>{this.state.message}</Text>
              <Button
                mode="contained"
                style={{margin: 5}}
                onPress={() => {
                  this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{name: 'home'}],
                    }),
                  );
                }}>
                DISMISS
              </Button>
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

export default SuccessDialog;
