import { StyleSheet, Text, View } from "react-native";

type Props = {
  items: string[];
};

const List: React.FC<Props> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((i) => (
        <Text key={i} style={styles.item}>
          {i}
        </Text>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 4,
    marginVertical: 16,
  },
  item: {
    backgroundColor: "#816dd1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    textAlign: "center",
    width: "80%",
  },
});
