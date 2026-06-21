import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Categories, MealDetails, Meals } from "./src/screens";
import { CATEGORIES, MEALS } from "./src/data";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView style={styles.container}>
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
                name="categories"
                component={Categories}
                options={{ title: "All Categories" }}
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
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
