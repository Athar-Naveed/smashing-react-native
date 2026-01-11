import "@/global.css";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
  const colorScheme = useColorScheme(); // 'light' or 'dark'
  const isDark = colorScheme === "dark";

  return (
    <>
      {/* The top of the phone showing battery and all the other things */}
      <StatusBar backgroundColor="gray" translucent={false} />
      <Tabs
        screenOptions={{
          // Active color: Bright Yellow for dark mode, Blue for light mode (or keep yellow)
          tabBarActiveTintColor: isDark ? "#ffd33d" : "#007AFF",

          // Inactive color: Soft gray
          tabBarInactiveTintColor: isDark ? "#9ba1a6" : "#8e8e93",

          headerShown: false,

          tabBarStyle: {
            // background switches based on system theme
            backgroundColor: isDark ? "#25292e" : "#ffffff",
            borderTopWidth: 1,
            elevation: 1, // Removes shadow on Android
            shadowOpacity: 0, // Removes shadow on iOS
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
