import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      {/* This sets the title in the header bar */}
      <Stack.Screen options={{ title: "Oops! Not Found" }} />

      <View className="flex-1 items-center justify-center p-5 bg-white">
        <Text className="text-6xl font-bold text-black">404</Text>

        <Text className="text-xl font-semibold text-gray-800 mt-2">
          Page Not Found
        </Text>

        <Text className="text-base text-gray-500 text-center mt-4">
          The page you are looking for doesn&apos;t exist or has been moved.
        </Text>

        <Link href="/(tabs)/home" className="mt-8 py-4">
          <Text className="text-blue-600 text-lg font-bold underline">
            Go back to Home
          </Text>
        </Link>
      </View>
    </>
  );
}
