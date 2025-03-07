import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Redirect to HomeScreen if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigation.navigate('Home');
    }
  }, [cart]); // Runs whenever the cart updates

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartText}>
              {item.name} - ${item.price} x {item.quantity}
            </Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton} onPress={() => increaseQuantity(item.id)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quantityButton} onPress={() => decreaseQuantity(item.id)}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  cartItem: { backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 10, elevation: 2 },
  cartText: { fontSize: 16, fontWeight: 'bold' },
  quantityContainer: { flexDirection: 'row', marginTop: 10 },
  quantityButton: { backgroundColor: '#007bff', padding: 10, borderRadius: 5, marginHorizontal: 5 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default CartScreen;
