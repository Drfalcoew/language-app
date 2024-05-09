import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
// Styles for subviews
const styles = StyleSheet.create({
  // Generic Styles
  labelone: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  labeltwo: {
    fontSize: 16,
    color: '#FFF',
  },
  labelthree: {
    fontSize: 14,
    color: 'lightgray',
    paddingRight: 5,
  },
  labelfour: {
    fontSize: 12,
    color: 'lightgray',
  },
  glowingimage: {
    backgroundsize: 'cover',
    backgroundposition: 'center',
    backgroundrepeat: 'norepeat',
    zindex: -1,
    backgroundColor: 'transparent',
    borderradius: 'inherit',
    marginTop: 40,
    filter: 'blur(30px) saturate(2)',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    zIndex: 1,
    borderRadius: 0.6,
  },
  // CellViews
    categoryContainer: {
        flex: 0.3,
        minHeight: height * 0.25,
        width: width,
        marginBottom: 25,
        zIndex: 2,
    },
    categoryView: {
        flex: 1,
        alignItems: 'center',
        width: 150,
        borderRadius: 20,
        justifyContent: 'flex-end',
        overflow: 'hidden',
        marginRight: 10,
        backgroundColor: '#1F1F1F',
    },
      categoryBottomView: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        zIndex: 3
    },
      categoryBottomImage: {
        width: 40,
        height: 40,
    },
    categoryContentContainer: {
        flex: 0.55,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '85%',
        zIndex: 3
    },
    categoryTitle: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    categoryDescription: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'center',
    },

    // Switch
    container: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width - 40,
      backgroundColor: 'rgba(43,43,43,0.95)',
      height: 50,
      borderRadius: 20,
    },
    segment: {
      flex: 1,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      borderRadius: 20,
      width: width -100,
    },
    selectedSegment: {
      height: 43,
      marginLeft: 3,
      marginRight: 3,
      backgroundColor: '#3F8CFB',
      borderRadius: 20,
    },
    segmentLabel: {
      fontSize: 16,
      color: 'white',
      zIndex: 4,
    },

    // SelectedView
    SelectedViewContainer: {
      flex: 1,
      borderRadius: 20,
      width: "100%",
      backgroundColor: '#1F1F1F',
      minWidth: width - 40,
      minHeight: height * 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: 10,
      marginBottom: 15,
    },
    SelectedViewImage: {
        minWidth: '97%',
        minHeight: height * 0.25,
        borderRadius: 20,
    },
    SelectedViewText: {
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
    },
})

export default styles;