import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data";
import MealItem from "../../components/MealItem";
import { useRoute } from "@react-navigation/native";

const Meals: React.FC = () => {
  const route: any = useRoute();

  const categoryId = route.params.category;
  const meals = MEALS.filter((m) => m.categoryIds.includes(categoryId));
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
