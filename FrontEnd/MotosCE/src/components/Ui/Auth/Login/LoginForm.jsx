import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aquí puedes implementar la lógica de inicio de sesión
        console.log('Email:', email);
        console.log('Contraseña:', password);
    };

    return (
        <View>
            <Text>Correo Electrónico:</Text>
            <TextInput
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
            />
            <Text>Contraseña:</Text>
            <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
    );
};

export default LoginForm;
