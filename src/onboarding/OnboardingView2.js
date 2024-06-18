import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useUserSettings } from '../UserSettings';
import GlobalStyles from '../GlobalStyles';

const categories = [
  'Food',
  'Travel',
  'Shopping',
  'Sports',
  'Music',
  // Add more categories as needed
];

const OnboardingView2 = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { dispatch } = useUserSettings();

  useEffect(() => {
    // Update the user settings context whenever selectedCategories changes
    dispatch({ type: 'SET_INTERESTS', payload: selectedCategories });
  }, [selectedCategories, dispatch]);

  const handleCategorySelect = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleNext = () => {
    // Navigate to the next onboarding view
    navigation.navigate('What\'s your name?', { selectedCategories });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Interests</Text>
      <Text style={styles.description}>Select categories you are interested in.</Text>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            GlobalStyles.onboardingButton2,
            selectedCategories.includes(category) && GlobalStyles.selectedButton,
          ]}
          onPress={() => handleCategorySelect(category)}
        >
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={[styles.button, GlobalStyles.onboardingButton]} onPress={handleNext}>
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
    marginBottom: 32,
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
  categoryButtonText: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    marginTop: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OnboardingView2;
