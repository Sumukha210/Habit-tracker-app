import { palette } from '@/src/theme/palette';
import { ITabs, tabs } from '@/src/utils/tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: palette.background.secondary,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingBottom: insets.bottom,
            height: 65 + insets.bottom,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            display: 'flex',
            paddingTop: 20,
          },
          tabBarShowLabel: false, // Hide default label
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
        boxShadow: focused ? `0px 0px 10px ${palette.accent.shadow}` : 'none',
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
