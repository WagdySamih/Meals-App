import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { Meal } from "../models";

type Props = {
  meal: Meal;
};
const MealItem: React.FC<Props> = ({ meal }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed ? styles.pressed : {}]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: meal.imageUrl }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{meal.affordability}</Text>
          <Text style={styles.detailsItem}>{meal.duration} minutes</Text>
          <Text style={styles.detailsItem}>{meal.complexity}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  button: {
    borderRadius: 8,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },

  imageContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    padding: 16,
    fontSize: 16,
    fontWeight: 500,
  },
  details: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  detailsItem: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    backgroundColor: "#b2bbbf",
    borderRadius: 8,
  },
});
