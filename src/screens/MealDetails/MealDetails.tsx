import { Image, StyleSheet, Text, ScrollView } from "react-native";
import { MEALS } from "../../data";
import MealTags from "../../components/MealTags";
import List from "../../components/List";
import SubTitle from "../../components/SubTitle";

const MealDetails = ({ route }: any) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);

  if (!meal) return null;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: meal?.imageUrl }}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealTags
        affordability={meal?.affordability}
        duration={meal?.duration}
        complexity={meal?.complexity}
      />

      <SubTitle text="Ingredients" />

      <List items={meal.ingredients} />

      <SubTitle text="Steps" />
      <List items={meal.steps} />
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
    gap: 16,
    // padding: 16,
    marginBottom: 0,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    color: "#816dd1",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
