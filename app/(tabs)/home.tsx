import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { View } from "react-native";
const PlaceholderImage = require("../../assets/images/sam1.webp");
export default function Home() {
  return (
    <>
      <View className="flex-1 pt-20 bg-white dark:bg-black items-center justify-center">
        <View className="grid items-center">
          <ImageViewer imgSource={PlaceholderImage} />
        </View>
        <View className="flex-1 items-center ">
          <Button label={"Choose a photo"} theme={"primary"} />
          <Button label={"Use this photo"} />
        </View>
      </View>
    </>
  );
}
