import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Page() {
  const navigation = useNavigation();

 

 

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to MedConnect!</Text>
        <Text style={styles.subtitle}>Continue using the app or create an account</Text>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 25,
    color: '#38434D',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#64a460',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 10, // Added margin bottom
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', // Center the text inside the button
  },
});