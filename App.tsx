import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './context/CartContext';
import HomeScreen from './screens/homeScreen';
import CartScreen from './screens/cartScreen';
import CheckoutScreen from './screens/checkoutScreen';

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007bff', // Custom header background color
            },
            headerTintColor: '#fff', // Custom header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Custom header title style
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Products' }} // Custom title for Home screen
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'Your Cart' }} // Custom title for Cart screen
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{ title: 'Checkout' }} // Custom title for Checkout screen
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;