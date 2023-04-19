import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentDidMount() {
    let _this = this;
    this.timeout = setTimeout(function () {
      _this.handleNavigation();
    }, 1500);
  }

  handleNavigation() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'home'}],
      }),
    );
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Image
          source={require('../../../assets/logo.png')}
          style={{width: 250, height: 250, alignSelf: 'center'}}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}

export default SplashScreen;
