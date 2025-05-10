import { palette } from '@/src/theme/palette';
import { ITabs, tabs } from '@/src/utils/tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

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
            paddingTop: 13,

            height: 60 + insets.bottom,
            overflow: 'hidden',
            borderTopWidth: 0,
            elevation: 0,
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
  tabBarIcon: ({ focused }: { color: string; focused: boolean }) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10,
      }}
    >
      <View className={twMerge('h-14 w-14 items-center justify-center rounded-full border', focused ? 'border-border-accent' : 'border-border-light')}>
        <FontAwesome name={tab.icon} size={20} color={focused ? palette.text.primary : palette.accent.shadow} />
      </View>
    </View>
  ),
  tabBarItemStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default TabLayout;
