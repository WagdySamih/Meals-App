import { Pressable } from "react-native";
type Props = {
  icon: React.ReactNode;
  onPress?: () => void;
};
const IconButton: React.FC<Props> = ({ icon, onPress }) => {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: "#ccc" }}>
      {icon}
    </Pressable>
  );
};

export default IconButton;
