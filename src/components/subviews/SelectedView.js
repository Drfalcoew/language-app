import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./SubViewStyles";
import GlowingImage from "./helpers/GlowingImage";
import data from '../../api/Data';
import { Divider } from 'react-native-elements';

const SelectedView = ({ view }) => {
    const [isTranslated, setIsTranslated] = useState(false);
    const [myPhrase, setMyPhrase] = useState("");

    useEffect(() => {
        const myPhrase = data[view.id];
        setMyPhrase(myPhrase[0].translation);

        setIsTranslated(false);
    }, [view]);

    const handleTranslate = () => {
        // Toggle translation state
        setIsTranslated(!isTranslated);
        
        // Get the phrase
        const myPhrase = data[view.id];
        // Set the phrase
        setMyPhrase(isTranslated ? myPhrase[0].translation : myPhrase[0].sentence);
    };

    return (
        <TouchableOpacity onPress={handleTranslate}>
            <View style={styles.SelectedViewContainer}>
                <View style={styles.SelectedViewTextContainer}>
                    <Text style={styles.SelectedViewText}>
                        {myPhrase}
                    </Text>
                </View>
                <View style={styles.SelectedViewHeader}>
                    <Text style={styles.SelectedViewHeaderText}>
                        {isTranslated ? "" : "Tap to Translate"}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SelectedView;
