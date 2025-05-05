import OutlineBtn from '@/src/components/elements/OutlineBtn';
import ScreenWrapper from '@/src/components/shared/ScreenWrapper';
import { useTheme } from '@/src/theme/ThemeProvider';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const SaveTask: React.FC = () => {
  const params = useLocalSearchParams<{ mode: 'create' | 'edit' }>();
  const { isDarkMode } = useTheme();
  const [inputValue, setInputvalue] = useState('');
  const router = useRouter();

  const handleCancel = () => {
    Keyboard.dismiss();
    router.back();
  };

  return (
    <ScreenWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
          <View className="relative flex-1 h-full">
            {params?.mode === 'create' && <Text className={`text-xl font-semibold py-2 ${isDarkMode ? 'text-text-primary-dark' : ''}`}>Create Task</Text>}

            <View className="mt-6 flex-1">
              <TextInput
                className={`w-full h-16 px-4 text-lg rounded-md ${isDarkMode ? 'bg-card-bg-dark placeholder:text-gray-300' : 'bg-slate-100 border border-slate-300'}`}
                placeholder="Title"
                value={inputValue}
                onChange={(e) => setInputvalue(e.nativeEvent.text)}
              />
            </View>

            <View className="absolute bottom-0 left-0 w-full flex-row justify-between bg-slate-100 h-20 items-center">
              <Text className="text-xl font-semibold text-red-500 py-2" onPress={handleCancel}>
                Cancel
              </Text>
              <OutlineBtn title="Save" className="px-12 py-3 self-center" onPress={handleCancel} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
};

export default SaveTask;
