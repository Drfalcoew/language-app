import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

  const handleCategorySelect = (category) => {
    // Toggle selection of the category
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleNext = () => {
    // Navigate to the next onboarding view
    navigation.navigate('OnboardingView3', { selectedCategories });
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
