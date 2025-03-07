import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
  const { updatedCart } = route.params;
  const totalPrice = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Checkout Successful', 'Thank you for your purchase!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.checkoutTitle}>Checkout</Text>
      {updatedCart.map((item) => (
        <View key={item.id} style={styles.checkoutItem}>
          <Text style={styles.checkoutItemName}>{item.name}</Text>
          <Text style={styles.checkoutItemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      ))}
      <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  checkoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  checkoutItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkoutItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutItemPrice: {
    fontSize: 14,
    color: '#666',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});