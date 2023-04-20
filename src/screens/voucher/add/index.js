import React, {Component} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import ContactsList from '../../../components/ContactsList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showContacts, addSelectedContact} from '../../../redux/actions';
import ErrorDialog from '../../../components/ErrorDialog';

class AddVoucher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtReceiverName: '',
      txtReceiverEmail: '',
      txtAmount: '',
      txtDescription: '',
      txtPhoneNumber: this.props.selectedContact,
    };
  }

  componentDidMount() {
    // this.props.addSelectedContact("");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedContact !== this.props.selectedContact) {
      this.setState({txtPhoneNumber: this.props.selectedContact});
    }
  }

  validateInputs() {
    if (this.state.txtReceiverName.trim() === '') {
      this.error_dialog.showErrorDialog('Receiver name is required', 'info');
    } else if (this.state.txtPhoneNumber.trim() === '') {
      this.error_dialog.showErrorDialog(
        'Receiver phone number is required',
        'info',
      );
    } else if (this.state.txtAmount.trim() === '') {
      this.error_dialog.showErrorDialog(
        'Amount is required',
        'info',
      );
    } else {
      this.props.navigation.navigate('addMerchant');
    }
  }

  render() {
    return (
      <View>
        <ContactsList />
        <ErrorDialog ref={ref => (this.error_dialog = ref)} />
        <TextInput
          label="Receiver Fullname (required)"
          value={this.state.txtReceiverName}
          onChangeText={text => this.setState({txtReceiverName: text})}
          mode={'outlined'}
          style={{marginVertical: 5, marginHorizontal: 10}}
        />
        <TextInput
          label="Receiver email (optional)"
          value={this.state.txtReceiverEmail}
          onChangeText={text => this.setState({txtReceiverEmail: text})}
          mode={'outlined'}
          style={{marginVertical: 5, marginHorizontal: 10}}
        />
        <TextInput
          label="Receiver Phone number (required)"
          value={this.state.txtPhoneNumber}
          onChangeText={text => this.setState({txtPhoneNumber: text})}
          mode={'outlined'}
          style={{marginVertical: 5, marginHorizontal: 10}}
          right={
            <TextInput.Icon
              icon="contacts"
              onPress={() => this.props.showContacts(true)}
            />
          }
        />
        <TextInput
          label="Voucher Amount (required)"
          value={this.state.txtAmount}
          onChangeText={text => this.setState({txtAmount: text})}
          mode={'outlined'}
          keyboardType={'numeric'}
          style={{marginVertical: 5, marginHorizontal: 10}}
        />
        <TextInput
          label="Voucher Description (optional)"
          value={this.state.txtDescription}
          onChangeText={text => this.setState({txtDescription: text})}
          mode={'outlined'}
          style={{marginVertical: 5, marginHorizontal: 10, height: 150}}
        />

        <Button
          mode="contained"
          style={{margin: 10}}
          onPress={() => this.validateInputs()}>
          Continue
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedContact: state.appState.selectedContact,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      showContacts,
      addSelectedContact,
    },
    dispatch,
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddVoucher);
