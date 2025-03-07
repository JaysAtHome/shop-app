import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { CartContext } from '../context/CartContext';

const products = [
  { id: '1', name: 'Product A', price: 100 },
  { id: '2', name: 'Product B', price: 150 },
  { id: '3', name: 'Product C', price: 200 },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

export default HomeScreen;
