import { Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

const IconButton = ({ icon, label, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      // Centers the icon and text vertically, adds feedback on press
      className="justify-center items-center active:opacity-70"
    >
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text className="text-white mt-3 text-sm font-medium">{label}</Text>
    </Pressable>
  );
};

export default IconButton;
