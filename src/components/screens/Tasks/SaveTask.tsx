import ScreenWrapper from '@/src/components/shared/ScreenWrapper';
import { useTheme } from '@/src/theme/ThemeProvider';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const SaveTask: React.FC = () => {
  const params = useLocalSearchParams<{ mode: 'create' | 'edit' }>();
  const { isDarkMode } = useTheme();
  const [inputValue, setInputvalue] = useState('');

  return (
    <ScreenWrapper>
      <View className="relative flex-1 ">
        {params?.mode === 'create' && <Text className={`text-xl font-semibold rounded-md self-start  py-2 ${isDarkMode ? ` text-text-primary-dark` : ''}`}>Create Task</Text>}

        <View className="mt-6 flex-1">
          <TextInput
            className={`w-full h-16 px-4 text-lg  rounded-md ${isDarkMode ? `bg-card-bg-dark  placeholder:text-gray-300` : `bg-slate-100 border border-slate-300`}
          `}
            placeholder="Title"
            value={inputValue}
            onChange={(e) => setInputvalue(e.nativeEvent.text)}
          />
        </View>

        <View className="absolute bottom-0 w-full flex">
          <Text className={`text-xl font-semibold rounded-md self-start  py-2 ${isDarkMode ? ` text-text-primary-dark` : ''}`}>Cancel</Text>
          <Text className={`text-xl font-semibold rounded-md self-start  py-2 ${isDarkMode ? ` text-text-primary-dark` : ''}`}>Save</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SaveTask;
