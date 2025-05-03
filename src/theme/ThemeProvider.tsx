import { accentColors } from "@/src/theme/palette";
import { AccentColor, ThemeMode, useThemeStore } from "@store/theme";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

interface ThemeContextType {
  isDarkMode: boolean;
  accentColor: AccentColor;
  currentTheme: ThemeMode;
  changeTheme: (mode: ThemeMode) => void;
  changeAccentColor: (color: AccentColor) => void;
  accentPalette: typeof accentColors.blue;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme();
  const { themeMode, accentColor, setThemeMode, setAccentColor } =
    useThemeStore();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Determine if we should use dark mode based on the theme setting
    if (themeMode === "system") {
      setIsDarkMode(systemColorScheme === "dark");
    } else {
      setIsDarkMode(themeMode === "dark");
    }
  }, [themeMode, systemColorScheme]);

  const changeTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  const changeAccentColor = (color: AccentColor) => {
    setAccentColor(color);
  };

  // Get the current accent palette
  const accentPalette = accentColors[accentColor];

  const value = {
    isDarkMode,
    accentColor,
    currentTheme: themeMode,
    changeTheme,
    changeAccentColor,
    accentPalette,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
