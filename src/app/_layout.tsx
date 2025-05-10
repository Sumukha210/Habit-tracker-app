import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import './globals.css';

export default function AppLayout() {
  return (
    <SafeAreaView className="bg-background-primary flex-1">
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </SafeAreaView>
  );
}
