import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    sectionHeaderContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    sectionHeaderText: {
        fontSize: 12,
        color: '#878787',
        fontWeight: 'normal',
    },
    mainScrollView: {
        width: width - 40,
        marginLeft: 20,
        marginBottom: 100,
        zIndex: 0,
        marginRight: 33,
        flexDirection: 'column',
    },  
    mainView: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 0,
        justifyContent: 'top',
        backgroundColor: 'rgba(27,26,29,1.0)',
        zIndex: 1
    },
})

export default styles;