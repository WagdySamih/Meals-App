import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CATEGORIES } from "../../data";

const Categories: React.FC = () => {
  return (
    <FlatList
      style={styles.container}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.category}>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [
              { backgroundColor: item.color },
              styles.inner,
              pressed ? styles.pressed : {},
            ]}
          >
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        </View>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    flex: 1,
    height: 150,

    borderRadius: 8,
    elevation: 1,
    margin: 12,

    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  pressed: {
    opacity: 0.75,
  },
  button: {},
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    overflow: "hidden",
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
