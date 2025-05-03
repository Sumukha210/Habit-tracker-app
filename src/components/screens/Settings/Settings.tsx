import { useTheme } from "@/src/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const { isDarkMode } = useTheme();
  const router = useRouter();

  const navigateToThemeSettings = () => {
    router.navigate("./settings/appearance");
  };

  return (
    <View
      className={`flex-1 ${
        isDarkMode ? "bg-background-dark" : "bg-background"
      }`}
    >
      <Stack.Screen options={{ title: "Settings" }} />

      <ScrollView className="flex-1 p-4">
        <TouchableOpacity
          onPress={navigateToThemeSettings}
          className={`p-4 mb-2 rounded-lg flex-row justify-between items-center ${
            isDarkMode ? "bg-card-bg-dark" : "bg-card-bg"
          }`}
        >
          <View className="flex-row items-center">
            <Ionicons
              name="color-palette-outline"
              size={24}
              color={isDarkMode ? "#E1E1E1" : "#202124"}
              className="mr-3"
            />
            <Text
              className={`${
                isDarkMode ? "text-text-primary-dark" : "text-text-primary"
              }`}
            >
              Appearance
            </Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={isDarkMode ? "#A1A1A1" : "#5F6368"}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;
