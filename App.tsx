import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Categories, Favorites, MealDetails, Meals } from "./src/screens";
import { CATEGORIES, MEALS } from "./src/data";
import { List, Star } from "lucide-react-native";
import FavoriteContextProvider from "./src/store/context/FavoritesContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      sceneStyle: { backgroundColor: "#291e4c" },
      headerStyle: { backgroundColor: "#291e4c" },
      headerTintColor: "#fff",
      headerTitleAlign: "center",
      drawerContentStyle: {
        backgroundColor: "#e4ddf7",
        padding: 0,
        margin: 0,
      },
      drawerActiveTintColor: "#2a1071",
      drawerActiveBackgroundColor: "#9a81df",
      drawerItemStyle: {
        borderRadius: 4,
        margin: 0,
        padding: 0,
      },
    }}
  >
    <Drawer.Screen
      name="categories"
      component={Categories}
      options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => <List color={color} size={size} />,
      }}
    />
    <Drawer.Screen
      name="favorites"
      component={Favorites}
      options={{
        drawerIcon: ({ color, size }) => <Star color={color} size={size} />,
      }}
    />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: "#291e4c" },
              headerStyle: { backgroundColor: "#291e4c" },
              headerBackTitle: "Back",
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="categories-2"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="meals"
              component={Meals}
              options={({ navigation, route }: any) => {
                const id = route.params.category;
                return { title: CATEGORIES.find((c) => c.id === id)?.title };
              }}
            />
            <Stack.Screen
              name="mealDetails"
              component={MealDetails}
              options={({ navigation, route }: any) => {
                const id = route.params.mealId;
                return { title: MEALS.find((c) => c.id === id)?.title };
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
