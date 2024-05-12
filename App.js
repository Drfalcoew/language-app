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

const stack = createStackNavigator();

const OnboardingStack = () => {

  const headerShown = false;

  return (
    <stack.Navigator>
      <stack.Screen name="OnboardingView1" component={OnboardingView1} options={{ headerShown: headerShown }} />
      <stack.Screen name="OnboardingView2" component={OnboardingView2} options={{ headerShown: headerShown }} />
      <stack.Screen name="OnboardingView3" component={OnboardingView3} options={{ headerShown: headerShown }} />
      <stack.Screen name="OnboardingView4" component={OnboardingView4} options={{ headerShown: headerShown }} />
      <stack.Screen name="OnboardingView5" component={OnboardingView5} options={{ headerShown: headerShown }} />
      <stack.Screen name="OnboardingView6" component={OnboardingView6} options={{ headerShown: headerShown }} />
      <stack.Screen name="MainContainer" component={MainContainer} options={{ headerShown: false }} />
    </stack.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}