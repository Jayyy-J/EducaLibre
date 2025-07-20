import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pantallas (por crear)
// import HomeScreen from './screens/HomeScreen';
// import ContentScreen from './screens/ContentScreen';
// import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} /> */}
        {/* <Stack.Screen name="Content" component={ContentScreen} options={{ title: 'Contenido' }} /> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Mi Progreso' }} /> */}
        <Stack.Screen name="Home" component={() => <View><Text>Pantalla de Inicio (por construir)</Text></View>} options={{ title: 'Inicio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
