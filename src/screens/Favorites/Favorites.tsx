// import { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
// import { FavoritesContext } from "../../store/context/FavoritesContext";
import MealItem from "../../components/MealItem";
import { MEALS } from "../../data";
import { useSelector } from "react-redux";

const Favorites = () => {
  // const { ids } = useContext(FavoritesContext);
  const ids = useSelector((state: any) => state?.favoritesMeals.ids);
  const favMeals = MEALS.filter((m) => ids.includes(m.id));

  if (!favMeals.length) {
    return (
      <Text style={styles.noMeals}>You don't have any favorite meals yet!</Text>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favMeals}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  noMeals: {
    textAlign: "center",
    color: "white",
    padding: 16,
    margin: "auto",
  },
});
