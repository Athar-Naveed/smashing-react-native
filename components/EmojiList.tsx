import { useState } from "react";
import { FlatList, Platform, Pressable, Text } from "react-native";

type Props = {
  // Changed from ImageSourcePropType to string
  onSelect: (emoji: string) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  // A simple array of emoji strings
  const [emojis] = useState<string[]>([
    "🥳",
    "💥",
    "🤩",
    "🍕",
    "❤️",
    "🌈",
    "🔥",
    "🦄",
    "👽",
    "✨",
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emojis}
      contentContainerStyle={{
        paddingHorizontal: 20,
        alignItems: "center",
      }}
      renderItem={({ item }) => (
        <Pressable
          className="active:opacity-70 active:scale-90 mr-8"
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          {/* We use a Text component instead of Image */}
          <Text className="text-[60px]">{item}</Text>
        </Pressable>
      )}
    />
  );
}
