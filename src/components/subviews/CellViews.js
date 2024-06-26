import { ScrollView, View, Image, Text } from "react-native";
import styles from "./SubViewStyles";
import { TouchableOpacity } from "react-native"; // Import TouchableOpacity for pressability

const CellViewChild = ({ category, onPress, length, index }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.categoryView, { marginRight: index === length - 1 ? 40 : 10 }]} key={category.id}>
      <View style={styles.categoryContentContainer}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        <Text style={styles.categoryDescription}>{category.description}</Text>
      </View>
      <View style={styles.categoryBottomView}>
        <Image source={require("../../../assets/world.webp")} style={styles.categoryBottomImage} />
      </View>
    </View>
  </TouchableOpacity>
);

const CellViews = ({ viewData, setData }) => {
  return (
    <View style={styles.categoryContainer}>
      <ScrollView horizontal={true}>
        {viewData.map((category) => (
          <CellViewChild
            key={category.id}
            category={category}
            length={viewData.length}
            index={category.id}
            onPress={() => setData(category)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CellViews;
