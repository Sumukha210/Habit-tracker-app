import LayoutWrapper from '@/src/components/shared/LayoutWrapper';
import React from 'react';
import { View, Text } from 'react-native';

const Index = () => {
  return (
    <LayoutWrapper title="Habits" onAddIconPress={() => console.log('Habits icon pressed')}>
      <View>
        <Text className="text-red-400">Index</Text>
      </View>
    </LayoutWrapper>
  );
};

export default Index;
