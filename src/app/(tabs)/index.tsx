import ScreenWrapper from '@/src/components/shared/ScreenWrapper';
import React from 'react';
import { View, Text } from 'react-native';

const Index = () => {
  return (
    <View className="flex-1 bg-background-primary">
      <ScreenWrapper>
        <Text className="text-red-400">Index</Text>
      </ScreenWrapper>
    </View>
  );
};

export default Index;
