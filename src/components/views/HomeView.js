import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './ViewStyles';
import CellViews from '../subviews/CellViews';
import { SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectedView from '../subviews/SelectedView';
import CalendarComponent from '../subviews/Calendar';

const viewDataArray = [
    {
        id: 0,
        title: "General",
        description: "General phrases about everyday life",
        image: '',
    },
    {
        id: 1,
        title: "Travel",
        description: "Phrases for traveling",
        image: '',
    },
    {
        id: 2,
        title: "Dining Out",
        description: "Phrases for dining out",
        image: '',
    },
    {
        id: 3,
        title: "Shopping",
        description: "Phrases for shopping",
        image: '',
    },
];

const HomeView = ({navigation}) => {

    let todaysDate = new Date();

    // Default is posts
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedView, setSelectedView] = useState(viewDataArray[0]);
    const [viewData, setViewData] = useState(viewDataArray);

    const listComponents = [
        { title: '', data: [0], component: (<CalendarComponent date={todaysDate} /> ) },
        { title: 'MY DAILY PHRASE', data: [2], component: (<SelectedView view={selectedView} />) },
        { title: 'LANGUAGE CATEGORIES', data: [1], component: (<CellViews viewData={viewData} setData={setSelectedView} />) },
    ];

    
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <SectionList
            contentContainerStyle={styles.mainScrollView}
            stickySectionHeadersEnabled={false}
            sections={listComponents}
            renderItem={({ item, section }) => {
              return section.component;
            }}
            renderSectionHeader={({ section: { title } }) => {
              return (
                <View style={styles.sectionHeaderContainer}>
                  <Text style={styles.sectionHeaderText}>
                    {title}
                  </Text>
                </View>
              );
            }}
          />
        </SafeAreaView>
      );
    };

export default HomeView;