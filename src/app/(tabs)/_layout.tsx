import { useThemeStore } from '@/src/store/theme';
import palette, { accentColors } from '@/src/theme/palette';
import { useTheme } from '@/src/theme/ThemeProvider';
import { tabs } from '@/src/utils/tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const { isDarkMode } = useTheme();
  const insets = useSafeAreaInsets();
  const accentColor = useThemeStore((state) => state.accentColor);
  const tabBarActiveTintColor = accentColors[accentColor].primary;

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor,
          headerShown: false,
          tabBarStyle: {
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom,
            paddingTop: 10,
            backgroundColor: isDarkMode ? palette.tabBarBackgroundDark : palette.tabBarBackground,
            borderTopColor: isDarkMode ? '#3A3A3A' : '#E1E1E1',
          },
          tabBarInactiveTintColor: isDarkMode ? palette.tabBarInactiveDark : palette.tabBarInactive,
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.route}
            name={tab.route}
            options={{
              title: tab.title,
              tabBarIcon: ({ color, size }) => <FontAwesome name={tab.icon} size={size} color={color} />,
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '500',
              },
            }}
          />
        ))}
      </Tabs>
    </View>
  );
}
