import {createStackNavigator} from '@react-navigation/stack';
import Home from './index';
import AddVoucher from '../voucher/add/index';
import ListMerchant from '../voucher/merchant';

const Stack = createStackNavigator();

function HomeContainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Vouchers',
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        options={{
          title: 'Add Voucher',
        }}
        name="addVoucher"
        component={AddVoucher}
      />
      <Stack.Screen
        options={{
          title: 'Add Merchant',
        }}
        name="addMerchant"
        component={ListMerchant}
      />
    </Stack.Navigator>
  );
}

export default HomeContainer;
