import * as ImagePicker from "expo-image-picker";

import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import { useState } from "react";
import { View } from "react-native";
const PlaceholderImage = require("../../assets/images/sam1.webp");
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert("You didn't select any image.");
    }
  };
  const onReset = () => setShowAppOptions(false);
  const onAddSticker = () => setIsModalVisible(true);
  const onSaveImageAsync = () => {};
  const onModalClose = () => setIsModalVisible(false);
  return (
    <>
      <View className="flex-1 pt-20 bg-white dark:bg-black items-center justify-center">
        <View className="grid items-center ">
          <ImageViewer imgSource={selectedImage || PlaceholderImage} />
          {pickedEmoji && (
            <EmojiSticker imageSize={50} stickerSource={pickedEmoji} />
          )}
        </View>
        {showAppOptions ? (
          <View>
            <View className="flex flex-row my-5 ">
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton
                icon="save-alt"
                label="Save"
                onPress={onSaveImageAsync}
              />
            </View>
          </View>
        ) : (
          <View className="flex-1 items-center ">
            <Button
              label={"Choose a photo"}
              theme={"primary"}
              onPress={pickImageAsync}
            />
            <Button
              label={"Use this photo"}
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onCloseModal={onModalClose} onSelect={setPickedEmoji} />
        </EmojiPicker>
      </View>
    </>
  );
}
