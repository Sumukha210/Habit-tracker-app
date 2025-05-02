import { useTheme } from "@/src/theme/ThemeProvider";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isDarkMode, accentColor } = useTheme();
  const router = useRouter();

  const getButtonColor = () => {
    switch (accentColor) {
      case "blue":
        return "bg-blue";
      case "lightBlue":
        return "bg-light-blue";
      case "yellow":
        return "bg-yellow";
      default:
        return "bg-light-blue";
    }
  };

  const navigateToSettings = () => {
    router.navigate("./settings");
  };

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      className={isDarkMode ? "bg-background-dark" : "bg-background"}
    >
      <Text
        className={
          isDarkMode ? "text-text-primary-dark mb-4" : "text-text-primary mb-4"
        }
      >
        Welcome to Habit Tracker
      </Text>

      <TouchableOpacity
        onPress={navigateToSettings}
        className={`${getButtonColor()} px-6 py-3 rounded-lg`}
      >
        <Text className="text-white font-semibold">Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
