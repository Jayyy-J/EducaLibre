import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar las pantallas
import RegisterScreen from './RegisterScreen';
import ContentScreen from './ContentScreen';

// --- Pantalla de Inicio Provisional ---
const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bienvenido a EducaLibre</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Ir a Registro"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="Ver Contenido de Ejemplo"
        onPress={() => navigation.navigate('Content')}
      />
    </View>
  </View>
);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registro de Usuario' }}
        />
        <Stack.Screen
          name="Content"
          component={ContentScreen}
          options={{ title: 'Lección: El Alfabeto' }}
        />
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
