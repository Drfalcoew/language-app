import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GlobalStyles from '../GlobalStyles';


const OnboardingView4 = ({ navigation }) => {
  const [selectedStyle, setSelectedStyle] = useState('');

  const setAppStyle = (style) => {
    // Set the selected app style
    setSelectedStyle(style);
  };

  const handleNext = () => {
    // Navigate to the next onboarding view
    navigation.navigate('OnboardingView5');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose App Style</Text>
      <Text style={styles.description}>Select your preferred app style.</Text>
      <TouchableOpacity
        style={[
          GlobalStyles.onboardingButton2,
          selectedStyle === 'Beige' && GlobalStyles.selectedButton,
        ]}
        onPress={() => setAppStyle('Beige')}
      >
        <Text style={[styles.optionButtonText, selectedStyle === 'Beige' && styles.selectedOptionButtonText]}>
          Beige
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          GlobalStyles.onboardingButton2,
          selectedStyle === 'Dark Mode' && GlobalStyles.selectedButton,
        ]}
        onPress={() => setAppStyle('Dark Mode')}
      >
        <Text style={[styles.optionButtonText, selectedStyle === 'Dark Mode' && styles.selectedOptionButtonText]}>
          Dark Mode
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          GlobalStyles.onboardingButton2,
          selectedStyle === 'Light Mode' && GlobalStyles.selectedButton,
        ]}
        onPress={() => setAppStyle('Light Mode')}
      >
        <Text style={[styles.optionButtonText, selectedStyle === 'Light Mode' && styles.selectedOptionButtonText]}>
          Light Mode
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          GlobalStyles.onboardingButton2,
          selectedStyle === 'Custom' && GlobalStyles.selectedButton,
        ]}
        onPress={() => setAppStyle('Custom')}
      >
        <Text style={[styles.optionButtonText, selectedStyle === 'Custom' && styles.selectedOptionButtonText]}>
          Custom
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={GlobalStyles.onboardingButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: 40,
  },
  optionButton: {
    backgroundColor: '#EDEDED',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOptionButton: {
    backgroundColor: '#007AFF', // Change to the color of the label
  },
  optionButtonText: {
    fontSize: 18,
    color: '#000000',
  },
  selectedOptionButtonText: {
    color: '#FFFFFF', // Change to the color of the label
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default OnboardingView4;
