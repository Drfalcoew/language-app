import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GlobalStyles from '../GlobalStyles';

const OnboardingView6 = ({ navigation }) => {
    const handleNext = () => {
        navigation.navigate('MainContainer');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Get Started!</Text>
        <Text style={styles.description}>Start your language learning journey now.</Text>
        <TouchableOpacity style={GlobalStyles.onboardingButton} onPress={handleNext}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

export default OnboardingView6;

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

