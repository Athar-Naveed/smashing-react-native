import { Text, View } from "react-native";

type Props = {
  imageSize: number;
  stickerSource: string;
};

const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
  return (
    // -mt-[350px] moves the sticker up by 350px relative to its container
    <View className="-mt-[100px] z-100">
      <Text
        style={{
          fontSize: imageSize, // Controls the size of the emoji
          textAlign: "center",
        }}
      >
        {stickerSource}
      </Text>
    </View>
  );
};
export default EmojiSticker;
