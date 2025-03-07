import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
  const { cart, updateQuantity } = useContext(CartContext);

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>
              {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
            </Text>
            <Button title="+" onPress={() => updateQuantity(item.id, 'increase')} />
            <Button title="-" onPress={() => updateQuantity(item.id, 'decrease')} />
          </View>
        )}
      />
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

export default CartScreen;
