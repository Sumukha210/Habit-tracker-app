import { palette } from '@/src/theme/palette';
import { ITabs, tabs } from '@/src/utils/tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'orange',
          },
          tabBarStyle: {
            backgroundColor: palette.background.secondary,
            paddingBottom: insets.bottom + 10,
            paddingTop: 10,
            height: 50 + insets.bottom,
            overflow: 'hidden',
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarBackground: () => <View style={{ flex: 1, backgroundColor: palette.background.secondary }} />,
          tabBarShowLabel: false,
        }}
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
  tabBarIcon: ({ focused, size }: { color: string; size: number; focused: boolean }) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        boxShadow: focused ? palette.boxShadow : 'none',
      }}
    >
      <FontAwesome name={tab.icon} size={size} color={focused ? palette.accent.primary : palette.accent.shadow} />
    </View>
  ),
  tabBarItemStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default TabLayout;
