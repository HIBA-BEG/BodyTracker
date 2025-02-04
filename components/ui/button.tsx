import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    onPress: () => void;
    children: React.ReactNode;
    className?: string; // Optional className prop for styling
}

const Button: React.FC<ButtonProps> = ({ onPress, children, className }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, className && styles[className]]}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Button;