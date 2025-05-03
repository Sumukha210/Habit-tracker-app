import { useTheme } from '@/src/theme/ThemeProvider';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '@/src/components/shared/ScreenWrapper';

export default function Index() {
  const { isDarkMode, accentColor } = useTheme();
  const router = useRouter();

  const getButtonColor = () => {
    switch (accentColor) {
      case 'blue':
        return 'bg-blue';
      case 'skyblue':
        return 'bg-light-blue';
      case 'yellow':
        return 'bg-yellow';
      default:
        return 'bg-light-blue';
    }
  };

  const navigateToSettings = () => {
    router.navigate('./settings');
  };

  return (
    <ScreenWrapper>
      <View className="flex-1 justify-center items-center">
        <Text className={isDarkMode ? 'text-text-primary-dark mb-4' : 'text-text-primary mb-4'}>Welcome to Habit Tracker</Text>

        <View>
          <TouchableOpacity onPress={navigateToSettings} className={`${getButtonColor()} px-6 py-3 rounded-lg`}>
            <Text className="text-white font-semibold">Go to Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.navigate('./tasks')} className={`${getButtonColor()} px-6 py-3 rounded-lg mt-4`}>
            <Text className="text-white font-semibold">Go to Tasks</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.navigate('./journal')} className={`${getButtonColor()} px-6 py-3 rounded-lg mt-4`}>
            <Text className="text-white font-semibold">Go to Journal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
