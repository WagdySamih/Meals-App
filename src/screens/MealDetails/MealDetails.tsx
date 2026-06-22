import { Image, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import { MEALS } from "../../data";
import MealTags from "../../components/MealTags";
import List from "../../components/List";
import SubTitle from "../../components/SubTitle";
import { useContext, useLayoutEffect } from "react";
import { Star } from "lucide-react-native";
import { FavoritesContext } from "../../store/context/FavoritesContext";
import IconButton from "../../components/IconButton";

const MealDetails = ({ route, navigation }: any) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);

  const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = ids.includes(mealId);

  const toggleAddToFavorites = (id: string) => {
    isFavorite ? removeFavorite(id) : addFavorite(id);
  };
  console.log({ ids });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() => toggleAddToFavorites(mealId)}
          icon={
            <Star color={"#fff"} fill={isFavorite ? "white" : "transparent"} />
          }
        />
      ),
    });
  }, [ids]);

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
    marginBottom: 0,
  },
  image: {
    width: "100%",
    height: 220,
  },
  title: {
    color: "#816dd1",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 12,
  },
});
