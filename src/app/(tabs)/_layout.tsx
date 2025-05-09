import { palette } from '@/src/theme/palette';
import { ITabs, tabs } from '@/src/utils/tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
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
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingBottom: insets.bottom,
            height: 70 + insets.bottom,
            overflow: 'hidden',
            display: 'flex',
            paddingTop: 22,
            borderTopWidth: 0, // Remove the default border
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
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
        width: focused ? 120 : 50,
        backgroundColor: focused ? palette.background.primary : 'transparent',
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        boxShadow: focused ? palette.boxShadow : 'none',
      }}
    >
      <FontAwesome name={tab.icon} size={size} color={focused ? palette.accent.primary : palette.text.secondary} />
      {focused && (
        <Text
          style={{
            color: palette.text.primary,
            marginLeft: 8,
            fontSize: 14,
            fontWeight: '600',
          }}
        >
          {tab.title}
        </Text>
      )}
    </View>
  ),
  tabBarItemStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default TabLayout;
