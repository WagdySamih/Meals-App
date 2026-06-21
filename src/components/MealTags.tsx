import { View, Text, StyleSheet } from "react-native";

type Props = {
  affordability: string;
  complexity: string;
  duration: number;
};

const MealDetails: React.FC<Props> = (props) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsItem}>
        {props.affordability.toLocaleUpperCase()}
      </Text>
      <Text style={styles.detailsItem}>{props.duration} minutes</Text>
      <Text style={styles.detailsItem}>
        {props.complexity.toLocaleUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  detailsItem: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 8,
    backgroundColor: "#816dd1",
    borderRadius: 8,
  },
});
