import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, NavigationContainer } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation(); // Importar useNavigation

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar la lógica de inicio de sesión aquí (por ejemplo, llamada a la API)
    console.log('Intento de inicio de sesión con correo electrónico:', email, 'contraseña:', password);
    // Navegar a la pantalla de inicio después de un inicio de sesión exitoso
    navigation.navigate('Home'); // Cambiar a 'Home'
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register'); // Navegar a la pantalla de registro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button title="Iniciar sesión" onPress={handleLogin} />
        <Button title="Registrarse" onPress={handleNavigateToRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
});

export default LoginScreen;
