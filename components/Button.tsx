import { FontAwesome } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type ButtonProps = {
  label: string;
  theme?: "primary";
};

const Button = ({ label, theme }: ButtonProps) => {
  const onPress = () => alert(`${label} is pressed`);

  if (theme === "primary") {
    return (
      <View className="w-80 h-16 mx-5 my-3 border-4 border-[#ffd33d] rounded-2xl overflow-hidden">
        <Pressable
          className="flex-1 flex-row bg-white items-center justify-center space-x-3"
          onPress={onPress}
        >
          <FontAwesome name="picture-o" size={20} color="#25292e" />
          <Text className="text-black text-lg font-bold uppercase tracking-wider">
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  // Secondary/Default Theme
  return (
    <View className="w-80 h-16 mx-5 my-3">
      <Pressable
        onPress={onPress}
        className="flex-1 items-center justify-center"
      >
        <Text className="text-black dark:text-white text-lg font-semibold">
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
