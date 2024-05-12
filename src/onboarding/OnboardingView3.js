import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import GlobalStyles from '../GlobalStyles';


const OnboardingView3 = ({ navigation }) => {
    
    const [name, setName] = useState('');

    const handleNext = () => {
        navigation.navigate('OnboardingView4');
    };
  
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.description}>Please enter your name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity style={GlobalStyles.onboardingButton} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    };


export default OnboardingView3;
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    },
    input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    width: '100%',
    },
    buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    },
});
