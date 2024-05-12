import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GlobalStyles from '../GlobalStyles';

const OnboardingView1 = ({ navigation }) => {
  const handleNext = () => {
    // Navigate to the next onboarding view
    navigation.navigate('OnboardingView2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Language App!</Text>
      <Text style={styles.description}>Learn a new language with ease.</Text>
      <TouchableOpacity style={GlobalStyles.onboardingButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingView1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 32,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});