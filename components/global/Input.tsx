import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  

interface InputProps {
    type?: "text" | "password" | "email";
    placeholder?: string;
    disabled?: boolean;
    icon?: string;
    styleclass?: "error" | "none";
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder = "Enter text", disabled = false, icon, styleclass }) => {
    const [text, setText] = useState('');

    return (
        <View style={[styles.inputContainer, styleclass === 'error' && styles.error]}>
            {icon && (
                <View style={styles.iconContainer}>
                    <MaterialIcons name={icon} size={20} color="#fff" style={styles.icon} />
                </View>
            )}
            <TextInput
                placeholder={placeholder}
                value={text}
                onChangeText={setText}
                style={styles.input}
                secureTextEntry={type === 'password'}
                editable={!disabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#3a3a3a',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#585858',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    input: {
        flex: 1,
        backgroundColor: '#2c2c2c',
        color: '#d1d1d1',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 4,
        fontSize: 16,
    },
    iconContainer: {
        position: 'absolute',
        left: 12,
    },
    icon: {
        zIndex: 1,
    },
    error: {
        borderColor: '#f44336', 
    },
});

export default Input;
