import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import VoucherComponent from '../../components/VoucherComponent';
import { FAB } from 'react-native-paper';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          username: 'Andrew Ananda',
          createdAt: '2hours ago',
          amount: '20,000',
          description: 'Voucher will expire in 30 days, from today',
          merchants: 'KFC,NAIVAS,JAMAA',
        },
        {
          username: 'John Doe',
          createdAt: '10hours ago',
          amount: '5,000',
          description: 'Voucher will expire in 30 days, from today',
          merchants: 'KFC,JAMAA',
        },
        {
          username: 'John Doe',
          createdAt: '3days ago',
          amount: '50,000',
          description: 'Voucher will expire in 30 days, from today',
          merchants: 'KFC,NAIVAS',
        },
        {
          username: 'John Doe',
          createdAt: 'A week ago',
          amount: '100,000',
          description: 'Voucher will expire in 30 days, from today',
          merchants: 'NAIVAS,JAMAA',
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <VoucherComponent data={item} />}
        />
        <FAB
          size={'medium'}
          icon="plus"
          style={styles.fab}
          onPress={() => this.props.navigation.navigate('addVoucher')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
});

export default Home;
