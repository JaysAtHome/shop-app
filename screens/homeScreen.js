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

  const renderProductItem = ({ item }) => {
    console.log('Rendering product:', item); // Debug: Log each product being rendered
    return (
      <View style={styles.productContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)} // Debug: Log image loading errors
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        </View>
        <Button title="Add to Cart" onPress={() => addToCart(item)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent} // Add padding to the FlatList content
        ListEmptyComponent={<Text>No products available.</Text>} // Show a message if the list is empty
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
    backgroundColor: '#4d4d4d',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  cartButton: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#008000',
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;