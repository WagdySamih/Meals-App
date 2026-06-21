import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Categories } from "./src/screens";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Categories />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
