import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const InventoryScreen = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.115:5000/inventory')
      .then(res => res.json())
      .then(data => setInventory(data))
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Inventory List</Text>

      <FlatList
        data={inventory}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQty}>Quantity: {item.quantity}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No items found.</Text>}
      />

      {/* Placeholder for a form */}
      {/* You can later insert TextInput fields and a button here to add inventory */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    alignSelf: 'center',
  },
  itemCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  itemQty: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
    fontSize: 16,
  },
});

export default InventoryScreen;
