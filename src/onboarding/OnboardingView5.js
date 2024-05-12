import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import GlobalStyles from '../GlobalStyles';

const OnboardingView5 = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleNext = () => {
    navigation.navigate('OnboardingView6');
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stay Updated!</Text>
      <Text style={styles.description}>Enable notifications to receive new phrases straight to your lock screen.</Text>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Enable Notifications</Text>
      </View>
      <TouchableOpacity style={GlobalStyles.onboardingButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Turn On Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={GlobalStyles.onboardingButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingView5;

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
    button: {
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});



