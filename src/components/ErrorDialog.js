import React, {Component} from 'react';
import {Banner} from 'react-native-paper';
import {Text} from 'react-native';

class ErrorDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: 'Error',
      type: '',
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  showErrorDialog(message, type) {
    let _this = this;
    this.setState(
      {
        visible: true,
        message: message,
        type: type,
      },
      () => {
        this.timeout = setTimeout(function () {
          _this.setState({message: '', visible: false});
        }, 1500);
      },
    );
  }
  render() {
    return (
      <Banner
        style={{
          backgroundColor: this.state.type === 'error' ? 'red' : '#7e7ee1',
        }}
        visible={this.state.visible}>
        <Text style={{color: '#fff'}}>
          {this.state.type === 'error' ? 'Error: ' : 'Info: '}
        </Text>
        <Text style={{color: '#fff'}}>{this.state.message}</Text>
      </Banner>
    );
  }
}

export default ErrorDialog;
