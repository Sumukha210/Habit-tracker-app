import { ITabs, tabs } from '@/src/utils/tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
      // screenOptions={{
      //   tabBarActiveTintColor,
      //   headerShown: false,

      //   tabBarStyle: {
      //     height: 60 + insets.bottom,
      //     paddingBottom: insets.bottom,
      //     paddingTop: 10,
      //     backgroundColor: isDarkMode ? palette.tabBarBackgroundDark : accentColors[accentColor].bgTab,
      //     borderTopColor: isDarkMode ? '#3A3A3A' : '#E1E1E1',
      //   },
      //   tabBarLabelStyle: {
      //     fontSize: 12,
      //   },
      //   tabBarInactiveTintColor: isDarkMode ? palette.tabBarInactiveDark : palette.tabBarInactive,
      // }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen key={tab.route} name={tab.route} options={tabScreenOptions(tab)} />
        ))}
      </Tabs>
    </View>
  );
};

const tabScreenOptions = (tab: ITabs) => ({
  title: tab.title,
  tabBarIcon: ({ size }: { color: string; size: number; focused: boolean }) => <FontAwesome name={tab.icon} size={size} />,
  tabBarLabel: ({ focused, color }: { focused: boolean; color: string }) => (
    <Text
      style={{
        color,
        fontSize: 12,
        fontWeight: focused ? 'bold' : '400',
      }}
    >
      {tab.title}
    </Text>
  ),
});

export default TabLayout;
