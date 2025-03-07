import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.checkoutItem}>
            <Text style={styles.checkoutText}>{item.name} - ${item.price} x {item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Total: ${totalPrice}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  checkoutItem: { backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 10, elevation: 2 },
  checkoutText: { fontSize: 16, fontWeight: 'bold' },
  totalText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  checkoutButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 5, marginTop: 20 },
  checkoutButtonText: { color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});

export default CheckoutScreen;
