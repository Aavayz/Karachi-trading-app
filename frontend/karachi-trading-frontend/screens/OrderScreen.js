import React, { useState, useEffect } from 'react'; 
import { View, Text, FlatList } from 'react-native'; 

const OrderScreen = () => { 
  const [orders, setOrders] = useState([]); 

  useEffect(() => { 
    fetch('http://192.168.1.115:5000/orders') 
      .then(res => res.json()) 
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []); 

  return ( 
    <View> 
      <Text>Order List</Text> 
      <FlatList 
        data={orders} 
        keyExtractor={item => item.id.toString()} 
        renderItem={({ item }) => ( 
          <Text>{item.product_name} - {item.status}</Text> 
        )} 
      /> 
    </View> 
  ); 
}; 

export default OrderScreen;
