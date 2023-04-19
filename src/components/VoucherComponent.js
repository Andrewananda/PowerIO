import React from 'react';
import {Card} from 'react-native-paper';
import {View, Image, Text} from 'react-native';

const VoucherComponent = ({data}) => (
  <Card
    style={{
      height: 120,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 8,
      marginHorizontal: 8,
    }}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{margin: 10, flexDirection: 'row'}}>
        <Image
          source={require('../assets/gift.png')}
          style={{width: 30, height: 30}}
          resizeMode={'contain'}
        />
        <View>
          <Text style={{fontSize: 18, marginStart: 10}}>{data.username}</Text>
          <Text style={{fontSize: 10, marginStart: 10, color: '#c0c0c0'}}>
            {data.createdAt}
          </Text>
        </View>
      </View>
      <View style={{alignContent: 'flex-end', margin: 10}}>
        <Text
          style={{
            fontSize: 18,
            marginStart: 10,
            alignSelf: 'flex-end',
            fontWeight: 'bold',
          }}>
          Kes {data.amount}
        </Text>
      </View>
    </View>
    <View>
      <Text style={{fontSize: 12, margin: 10}}>
        {data.description}
      </Text>
    </View>
    <View style={{flexDirection: 'row', margin: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 14}}>Merchants: </Text>
      <Text style={{fontSize: 12, marginTop: 2}}>{data.merchants}</Text>
    </View>
  </Card>
);
export default VoucherComponent;
