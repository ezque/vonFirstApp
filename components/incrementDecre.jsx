import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const IncrementDecrement = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count === 0 ? 0 : count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>Number: {count}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={increment} style={[styles.button, styles.increment]}>
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={reset} style={[styles.button, styles.reset]}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={decrement} style={[styles.button, styles.decrement]}>
                    <Text style={styles.buttonText}>Decrement</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        width: 300,
    },
    numberText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    increment: {
        backgroundColor: 'green',
    },
    reset: {
        backgroundColor: 'gray',
    },
    decrement: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default IncrementDecrement;
