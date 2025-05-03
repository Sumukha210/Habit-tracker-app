import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import "./globals.css";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            paddingTop: insets.top,
          },
        }}
      />
    </ThemeProvider>
  );
}
