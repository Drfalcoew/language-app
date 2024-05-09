import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";

const Header = () => {
    let todaysDate = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [greeting, setGreeting] = useState("Welcome");
    const [date, setDate] = useState("");

    const getGreeting = () => {
        let dayName = days[todaysDate.getDay()];
        let day = todaysDate.getDate().toString().padStart(2, '0');
        let month = months[todaysDate.getMonth()];

        setDate(`${dayName}, ${day} ${month}`);

        let hours = todaysDate.getHours();
        if (hours < 12) {
            setGreeting("good morning");
        } else if (hours < 18) {
            setGreeting("good afternoon");
        } else {
            setGreeting("good evening");
        }
    };

    useEffect(() => {
        getGreeting();
    }, []);

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{greeting}</Text>
            <Text style={styles.subHeaderText}>{date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1.0,
        width: '100%',
        minHeight: 80,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 3,
    },
    headerText: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        padding: 5,
    },
    subHeaderText: {
        fontSize: 15,
        color: '#878787',
        fontWeight: 'normal',
    },
});

export default Header;
