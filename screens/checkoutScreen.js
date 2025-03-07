import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    Alert.alert(
      'Checkout Successful',
      'Thank you for your purchase!',
      [
        {
          text: 'OK',
          onPress: () => {
            clearCart(); // Clear the cart after successful checkout
            navigation.navigate('Home'); // Navigate back to the Home screen
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemText}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </Text>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice().toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  cartItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
  },
  totalContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;