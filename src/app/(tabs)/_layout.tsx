import { useThemeStore } from "@/src/store/theme";
import { accentColors } from "@/src/theme/palette";
import { tabs } from "@/src/utils/tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const accentColor = useThemeStore((state) => state.accentColor);
  const tabBarActiveTintColor = accentColors[accentColor].primary;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor,
        headerShown: false,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.route}
          name={tab.route}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={tab.icon} size={size} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
            },
          }}
        />
      ))}
    </Tabs>
  );
}
