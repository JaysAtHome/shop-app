import React, { useContext } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { cart, setCart } = useContext(CartContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Checkout successful', '', [
      { text: 'OK', onPress: () => { setCart([]); navigation.navigate('Home'); } }
    ]);
  };

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.name} - ${item.price} x {item.quantity}</Text>
        )}
      />
      <Text>Total: ${totalPrice}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

export default CheckoutScreen;
