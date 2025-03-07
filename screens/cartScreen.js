import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartScreen({ route, navigation }) {
  const { cart } = route.params;
  const [updatedCart, setUpdatedCart] = useState(cart);

  const increaseQuantity = (productId) => {
    setUpdatedCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setUpdatedCart((prevCart) => {
      const newCart = prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      // If the cart is empty after decreasing, navigate back to HomeScreen
      if (newCart.length === 0) {
        navigation.navigate('Home');
      }

      return newCart;
    });
  };

  const totalPrice = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Your Cart</Text>
      {updatedCart.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text style={styles.cartItemName}>{item.name}</Text>
          <Text style={styles.cartItemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      {updatedCart.length > 0 && (
        <>
          <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout', { updatedCart })}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 16,
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