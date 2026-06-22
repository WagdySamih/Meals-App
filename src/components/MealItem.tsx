import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useLayoutEffect } from "react";
import { Bell } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import MealTags from "./MealTags";
import IconButton from "./IconButton";
import { Meal } from "../models";

type Props = {
  meal: Meal;
};

const MealItem: React.FC<Props> = ({ meal }) => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconButton icon={<Bell color={"#fff"} />} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed ? styles.pressed : {}]}
        android_ripple={{ color: "#ccc" }}
        onPress={() => navigation.navigate("mealDetails", { mealId: meal.id })}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: meal.imageUrl }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>{meal.title}</Text>
        <MealTags
          affordability={meal.affordability}
          duration={meal.duration}
          complexity={meal.complexity}
        />
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
