import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import CartScreen from './screens/cartScreen';
import CheckoutScreen from './screens/checkoutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Shop Now' }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Your Cart' }} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}