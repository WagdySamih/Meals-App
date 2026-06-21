import { StyleSheet, Text } from "react-native";
type Props = {
  text: string;
};
const SubTitle: React.FC<Props> = ({ text }) => (
  <Text style={styles.title}>Ingredients</Text>
);

export default SubTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#816dd1",
    borderBottomWidth: 2,
    borderBottomColor: "#816dd1",
    width: "80%",
    textAlign: "center",
    margin: "auto",
    paddingBottom: 8,
  },
});
