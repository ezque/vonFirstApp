import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleInput = (value) => {
    setExpression((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clear = () => {
    setExpression('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={expression} editable={false} />
      
      <View style={styles.rows}>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('1')}><Text style={styles.text}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('2')}><Text style={styles.text}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('3')}><Text style={styles.text}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleInput('+')}><Text style={styles.text}>+</Text></TouchableOpacity>
      </View>

      <View style={styles.rows}>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('4')}><Text style={styles.text}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('5')}><Text style={styles.text}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('6')}><Text style={styles.text}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleInput('-')}><Text style={styles.text}>-</Text></TouchableOpacity>
      </View>

      <View style={styles.rows}>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('7')}><Text style={styles.text}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('8')}><Text style={styles.text}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('9')}><Text style={styles.text}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleInput('*')}><Text style={styles.text}>*</Text></TouchableOpacity>
      </View>

      <View style={styles.rows}>
        <TouchableOpacity style={styles.buttonNumber} onPress={() => handleInput('0')}><Text style={styles.text}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={clear}><Text style={styles.text}>C</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={calculate}><Text style={styles.text}>=</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperator} onPress={() => handleInput('/')}><Text style={styles.text}>/</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 300,
    height: 400,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'right',
    fontSize: 24,
    marginBottom: 20,
    padding: 10,
    color: 'black',
    borderRadius: 8,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  buttonNumber: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  buttonOperator:{
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'blue',
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default Calculator;
