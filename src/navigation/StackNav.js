import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import BillPayment from '../screens/BillPayment';
import BillPaymentAirtime from '../screens/BillPaymentAirtime';
import TransactionPin from '../screens/TransactionPin';


const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="BillPayment" component={BillPayment} />
        <Stack.Screen name="BillPaymentAirtime" component={BillPaymentAirtime} />
        <Stack.Screen name="TransactionPin" component={TransactionPin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;

