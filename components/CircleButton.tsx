import { View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
};

const CircleButton = ({ onPress }: Props) => {
  return (
    <View className="w-[84px] h-[84px] mx-[60px] border-4 border-[#ffd33d] rounded-[42px] p-[3px]">
      <Pressable
        onPress={onPress}
        // flex-1 fills the container, rounded-[42px] makes the pressable area a circle
        className="flex-1 justify-center items-center rounded-[42px] bg-white active:bg-gray-200"
      >
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
};
export default CircleButton;
