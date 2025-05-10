import { palette } from '@/src/theme/palette';
import { ITabs, tabs } from '@/src/utils/tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

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
  tabBarIcon: ({ focused }: { color: string; focused: boolean }) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10,
      }}
    >
      <LinearGradient
        colors={focused ? [palette.accent.light, palette.accent.primary] : ['transparent', 'transparent', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 50,
          padding: 8,
          backgroundColor: focused ? '' : 'transparent',
        }}
        className="h-14 w-14 items-center justify-center bg-accent-primary"
      >
        <FontAwesome name={tab.icon} size={focused ? 20 : 26} color={focused ? palette.text.primary : palette.accent.shadow} />
      </LinearGradient>
    </View>
  ),
  tabBarItemStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default TabLayout;
