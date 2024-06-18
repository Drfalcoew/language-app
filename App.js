import React from 'react';
import MainContainer from './src/navigation/MainContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingView1 from './src/onboarding/OnboardingView1';
import OnboardingView2 from './src/onboarding/OnboardingView2';
import OnboardingView3 from './src/onboarding/OnboardingView3';
import OnboardingView4 from './src/onboarding/OnboardingView4';
import OnboardingView5 from './src/onboarding/OnboardingView5';
import OnboardingView6 from './src/onboarding/OnboardingView6';
import UserSettingsProvider from './src/UserSettings';

const stack = createStackNavigator();

const OnboardingStack = () => {

  const headerShown = true;

  return (
    <stack.Navigator>
      <stack.Screen name="Welcome" component={OnboardingView1} options={{ headerShown: headerShown }} />
      <stack.Screen name="Interests" component={OnboardingView2} options={{ headerShown: headerShown }} />
      <stack.Screen name="What's your name?" component={OnboardingView3} options={{ headerShown: headerShown }} />
      <stack.Screen name="App Style" component={OnboardingView4} options={{ headerShown: headerShown }} />
      <stack.Screen name="Notifications" component={OnboardingView5} options={{ headerShown: headerShown }} />
      <stack.Screen name="Get Started" component={OnboardingView6} options={{ headerShown: headerShown }} />
      <stack.Screen name="MainContainer" component={MainContainer} options={{ headerShown: false }} />
    </stack.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <UserSettingsProvider>
        <OnboardingStack />
      </UserSettingsProvider>
    </NavigationContainer>
  );
}