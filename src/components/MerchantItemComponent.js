import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Checkbox} from 'react-native-paper';
const MerchantItemComponent = ({data}) => {
  console.log('IsSelected', data.selected ? 'DataSelected' : 'Not');
  return (
    <Card style={{width: 100, height: 120, margin: 15}}>
      <View>
        <View style={{height: 30, width: 30}}>
          <Checkbox status={data.selected ? 'checked' : 'unchecked'} />
        </View>
        <Image
          source={require('../assets/gift.png')}
          style={{width: 50, height: 50, alignSelf: 'center'}}
          resizeMode={'contain'}
        />
        <Text
          numberOfLines={2}
          style={{textAlign: 'center', fontSize: 10, margin: 10}}>
          {data.lookup_values_1}
        </Text>
      </View>
    </Card>
  );
};

export default MerchantItemComponent;
