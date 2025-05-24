
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import DashboardScreen from './screens/DashboardScreen'; 
import InventoryScreen from './screens/InventoryScreen'; 
import OrderScreen from './screens/OrderScreen'; 

const Stack = createStackNavigator(); 

export default function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Dashboard"> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} /> 
        <Stack.Screen name="Inventory" component={InventoryScreen} /> 
        <Stack.Screen name="Orders" component={OrderScreen} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}
