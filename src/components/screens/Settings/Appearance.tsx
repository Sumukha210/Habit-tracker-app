import { useTheme } from '@/src/theme/ThemeProvider';
import { AccentColor, ThemeMode } from '@store/theme';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ScreenWrapper } from '@/src/components/shared/ScreenWrapper';

const Appearance = () => {
  const { isDarkMode, currentTheme, accentColor, changeTheme, changeAccentColor } = useTheme();

  const themeOptions: { label: string; value: ThemeMode }[] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'System', value: 'system' },
  ];

  const accentOptions: { label: string; value: AccentColor; color: string }[] = [
    { label: 'Blue', value: 'blue', color: 'bg-blue' },
    { label: 'Light Blue', value: 'skyblue', color: 'bg-light-blue' },
    { label: 'Yellow', value: 'yellow', color: 'bg-yellow' },
  ];

  return (
    <ScreenWrapper>
      <Stack.Screen options={{ title: 'Appearance' }} />

      <ScrollView className="flex-1 p-4">
        <Text className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-text-primary-dark' : 'text-text-primary'}`}>Theme Mode</Text>

        <View className="mb-8">
          {themeOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => changeTheme(option.value)}
              className={`p-4 mb-2 rounded-lg flex-row justify-between items-center ${isDarkMode ? 'bg-card-bg-dark' : 'bg-card-bg'}`}
            >
              <Text className={`${isDarkMode ? 'text-text-primary-dark' : 'text-text-primary'}`}>{option.label}</Text>
              {currentTheme === option.value && (
                <View className={`w-4 h-4 rounded-full ${accentColor === 'blue' ? 'bg-blue' : accentColor === 'skyblue' ? 'bg-light-blue' : 'bg-yellow'}`} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <Text className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-text-primary-dark' : 'text-text-primary'}`}>Accent Color</Text>

        <View className="mb-8">
          {accentOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => changeAccentColor(option.value)}
              className={`p-4 mb-2 rounded-lg flex-row justify-between items-center ${isDarkMode ? 'bg-card-bg-dark' : 'bg-card-bg'}`}
            >
              <Text className={`${isDarkMode ? 'text-text-primary-dark' : 'text-text-primary'}`}>{option.label}</Text>
              <View className="flex-row items-center">
                <View className={`w-6 h-6 rounded-full ${option.color}`} />
                {accentColor === option.value && (
                  <View className={`w-4 h-4 rounded-full ml-2 ${accentColor === 'blue' ? 'bg-blue' : accentColor === 'skyblue' ? 'bg-light-blue' : 'bg-yellow'}`} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Appearance;
