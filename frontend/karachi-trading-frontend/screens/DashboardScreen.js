import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Inventory"
          onPress={() => navigation.navigate('Inventory')}
          color="#1e90ff"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Orders"
          onPress={() => navigation.navigate('Orders')}
          color="#32cd32"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '60%',
  },
});

export default DashboardScreen;
