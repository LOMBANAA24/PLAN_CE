// /Auth/RegisterForm.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // Aquí puedes implementar la lógica de registro
        console.log('Nombre:', name);
        console.log('Correo Electrónico:', email);
        console.log('Contraseña:', password);
        console.log('Confirmar Contraseña:', confirmPassword);
    };

    return (
        <View>
            <Text>Nombre:</Text>
            <TextInput
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <Text>Apellido:</Text>
            <TextInput
                placeholder="Apellido"
                value={name}
                onChangeText={setName}
            />
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
            <Text>Confirmar Contraseña:</Text>
            <TextInput
                placeholder="Confirmar Contraseña"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
};

export default RegisterForm;
