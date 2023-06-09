import React, {Component} from 'react';

import {
  ActivityIndicator,
  FlatList, Modal,
  NativeModules,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MerchantItemComponent from '../../../components/MerchantItemComponent';
import {Button} from 'react-native-paper';
import SuccessDialog from '../../../components/SuccessDialog';
const {NetworkModule} = NativeModules;

class ListMerchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        create_business_date: '',
        create_date: '',
        create_txn_id: '',
        created_by: '',
        df_flag: '',
        inst_no: '',
        lookup_code: '',
        lookup_id: '',
        lookup_values_1: '',
        lookup_values_2: '',
        lookup_values_3: '',
        lookup_values_4: '',
        lookup_values_5: '',
        rec_no: '',
        status: '',
        update_business_date: '',
        update_by: '',
        update_date: '',
        update_txn_id: '',
      },
      selected: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMerchantList();
  }

  async fetchMerchantList() {
    await NetworkModule.fetchMerchant(
      'https://run.mocky.io/v3/2598c0cf-5647-4ecc-ba4b-15cbc14a2124',
    )
      .then(res => {
        let data = JSON.parse(res);
        console.log('MerchantResponse', data.result.message);
        this.setState({data: data.result.message, isLoading: false});
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  onPressHandler(id) {
    let renderData = [...this.state.data];
    for (let data of renderData) {
      if (data.rec_no === id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    // console.log('DataToRender', renderData);
    this.setState({data: renderData});
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Modal
          visible={this.state.isLoading}
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ActivityIndicator style={{alignSelf: 'center'}} size={40} />
            <Text style={{fontSize: 15, alignSelf: 'center'}}>Loading.....</Text>
          </View>
        </Modal>
      );
    } else {
      return (
        <View>
          <SuccessDialog
            navigation={this.props.navigation}
            ref={ref => (this.success = ref)}
          />
          <FlatList
            data={this.state.data}
            numColumns={3}
            style={{height: '90%'}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => this.onPressHandler(item.rec_no)}>
                <MerchantItemComponent data={item} />
              </TouchableOpacity>
            )}
          />
          <View style={{height: 100}}>
            <Button
              mode="contained"
              style={{margin: 10}}
              onPress={() =>
                this.success.showSuccessDialog('Merchant added successfully')
              }>
              Add Merchant
            </Button>
          </View>
        </View>
      );
    }
  }
}

export default ListMerchant;
