import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CartContext } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Razer Naga Left Handed Edition',
    price: 190,
    image: 'https://assets2.razerzone.com/images/pnx.assets/c174e90e94ab3f247fa562eaecc282b4/500x500-razer-naga-left-handed.webp', // Valid image URL
  },
  {
    id: 2,
    name: 'Razer Huntsman V3 Pro Tenkeyless',
    price: 480,
    image: 'https://assets2.razerzone.com/images/keyboard-guide/keyboard_og.jpg', // Valid image URL
  },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart, cart } = useContext(CartContext);

  console.log('Products:', products); // Debug: Check if products are loaded
  console.log('Cart:', cart); // Debug: Check the cart state

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
          {item.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        style={[styles.cartButton, cart.length === 0 && styles.disabledButton]}
        onPress={() => navigation.navigate('Cart')}
        disabled={cart.length === 0}
      >
        <Text style={styles.cartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    marginRight: 16,
  },
  productName: {
    fontSize: 16,
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartButton: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;