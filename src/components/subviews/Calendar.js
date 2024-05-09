import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";
import { format, addDays, getDate, isSameDay, subDays } from 'date-fns';
import { Divider } from 'react-native-elements';

const CalendarComponent = ({ date }) => {
    const [week, setWeek] = useState([]);

    const getWeekDays = useCallback((date) => {
        const start = subDays(date, 2);
        const final = [];

        for (let i = 0; i < 7; i++) {
            final.push({
                formatted: format(addDays(start, i), 'EEE'),
                date: addDays(start, i),
                day: getDate(addDays(start, i)).toString().padStart(2, '0')
            });
        }
        
        return final;
    }, [date]);

    useEffect(() => {
        setWeek(getWeekDays(date));
    }, [date, getWeekDays]);

    return (
        <View style={styles.calendarContainer}>
            <View style={styles.calendarInnerContainer}>
            {week.map((day, index) => (
                <View style={[styles.calendarDayContainer, isSameDay(day.date, date) ? styles.selectedCalendarDay : null]} key={index}>
                    <Text style={[styles.calendarText, isSameDay(day.date, date) ? { color: '#FFF' } : null]}>{day.formatted}</Text>
                    <Text style={[styles.calendarTextDay, isSameDay(day.date, date) ? { color: '#FFF' } : null]}>{day.day}</Text>
                </View>
            ))}
            </View>
            <Divider style={{ width: '100%', backgroundColor: '#3f3f3f' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        flex: 1.0,
        width: '100%',
        paddingBottom: 15,
        minHeight: 60,
        alignItems: 'center',
        flexDirection: 'column',
    },
    calendarInnerContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
    calendarDayContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 2.5,
        width: '12%',
        minWidth: '10%',
    },
    selectedCalendarDay: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#636363',
    },
    calendarText: {
        fontSize: 12,
        color: '#878787',
        fontWeight: 'normal',
        padding: 5,
    },
    calendarTextDay: {
        fontSize: 15,
        color: '#878787',
        fontWeight: 'normal',
        padding: 5,
    },
});

export default CalendarComponent;
