import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
