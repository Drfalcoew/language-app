import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { Animated, Easing } from 'react-native';
import { useUserSettings } from '../UserSettings';
import { ArrowUp } from "react-native-feather"; // delete this and uninstall

const NotificationModal = ({ handleNotificationsToggle, handleNext }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.notificationContainer}>
        <Text style={styles.modalTitle}>"Language App" Would Like to Send You Notifications</Text>
        <Text style={styles.modalDescription}>Notifications may include alerts, sounds, and icon badges.</Text>
      </View>
      <Divider style={{ width: 250 }} />
      <View style={styles.allowButtons}>
        <TouchableOpacity style={styles.allowButton} onPress={handleNext}>
          <Text style={styles.buttonText}>Don't Allow</Text>
        </TouchableOpacity>
        <View style={styles.centerDivider} />
        <TouchableOpacity style={styles.allowButton} onPress={handleNotificationsToggle}>
          <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>Allow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const BouncingArrow = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10,
          duration: 350,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [bounceAnim]);

  return (
    <Animated.View style={[styles.arrowContainer, { transform: [{ translateY: bounceAnim }] }]}>
      <ArrowUp style={styles.arrow} />
    </Animated.View>
  );
};

const OnboardingView5 = ({ navigation }) => {
  const { state, dispatch } = useUserSettings();

  const handleNext = () => {
    navigation.navigate('Get Started');
  };

  const handleNotificationsToggle = (isNotificationsEnabled) => {
    dispatch({ type: 'SET_NOTIFICATIONS', payload: isNotificationsEnabled }); // we should be reading from device settings here
    handleNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Enable Notifications</Text>
      <Text style={styles.description}>Learn way more effectively with notifications!</Text>
      <NotificationModal handleNotificationsToggle={() => handleNotificationsToggle(true)} handleNext={handleNext} />
      <BouncingArrow />
    </View>
  );
};

export default OnboardingView5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: '80%',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: 'blue',
        fontSize: 16,
    },


    modalContainer: {
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    notificationContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 16,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 16,
        textAlign: 'center',
    },
    modalDescription: {
        fontSize: 16,
        textAlign: 'center',
    },
    centerDivider: {
        width: 1,
        height: '100%',
        backgroundColor: '#ccc',

    },
    allowButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    allowButton: {
        padding: 12,
        minWidth: '125px',
        maxWidth: '125px',
        alignItems: 'center',
    },

    arrowContainer: {
      width: '185px',
      paddingTop: 10,
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'row',

  },
    arrow: {
      width: 50,
      height: 50,
      color: 'red',      
    },
});



