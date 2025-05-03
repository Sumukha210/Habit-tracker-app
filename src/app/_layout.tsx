import { ThemeProvider, useTheme } from '@/src/theme/ThemeProvider';
import { palette } from '@/src/theme/palette';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './globals.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function AppLayout() {
  const { isDarkMode } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? palette.backgroundDark : palette.background,
      }}
    >
      <StatusBar style={isDarkMode ? 'light' : 'dark'} translucent={true} backgroundColor="transparent" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </View>
  );
}
