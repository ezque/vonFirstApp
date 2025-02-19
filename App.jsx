import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Calculator from './components/calculator';
import IncrementDecrement from './components/incrementDecre';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      
      <Calculator />
      <IncrementDecrement />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 80, 
    gap: 20,
  },
});
