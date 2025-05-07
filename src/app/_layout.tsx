import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import './globals.css';

export default function AppLayout() {
  return (
    <View
      style={{
        flex: 1,
      }}
      className="bg-background-primary"
    >
      <StatusBar translucent={true} backgroundColor="transparent" />
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
