

// Views for the main container
import HomeView from "../components/views/HomeView"
import ProfileView from "../components/views/ProfileView"
import Header from "../components/subviews/Header"
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import globalStyles from "./Styles"
import { House } from "react-native-feather"; // delete this and uninstall

// ViewNames for the main container
const homeViewName = "Home"
const profileViewName = "Profile"

const Tab = createBottomTabNavigator();


const MainContainer = () => {
    return (
        <NavigationContainer theme={ {colors: {background: 'rgba(0,0,0,1.0)'}} } independent={true}>
            <Tab.Navigator
            
            initialRouteName={homeViewName}
            screenOptions={({ route }) => ({
                tabBarStyle: tabBarStyle.tabBar,
                tabBarIcon: ({ focused, color, size }) => {
                    let source;
                    let rn = route.name;
                    if (rn === homeViewName) {
                        source = "world.webp"
                    } else if (rn === profileViewName) {
                        source = "world.webp"
                    }

                    color = focused ? 'rgba(255,255,255,1.0)' : 'rgba(255,255,255,0.5)';
                    const circleStyle = focused ? globalStyles.selectedTabCircle : globalStyles.unselectedTabCircle;

                    return (
                        <View style={globalStyles.tabIconContainer}>
                            <View style={circleStyle}>
                                <Image source={source} style={{ width: 22.5, height: 22.5 }} />
                            </View>
                        </View>
                    );
                },
                header: ( { route} ) => (
                    <Header />
                ),
                tabBarShowLabel: false,
            })}
            >
                <Tab.Screen name={homeViewName} component={HomeView} />
                <Tab.Screen name={profileViewName} component={ProfileView} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer;


const tabBarStyle = StyleSheet.create({
    tabBar: {
      borderTopWidth: 1,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 20,
      elevation: 25,
      borderTopColor: 'rgba(0,0,0,0.2)',
      borderTopWidth: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  });