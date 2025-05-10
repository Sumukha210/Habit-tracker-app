import LayoutWrapper from '@/src/components/shared/LayoutWrapper';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Habits: React.FC = () => {
  return (
    <LayoutWrapper title="Habits" onAddIconPress={() => console.log('Add Habit')}>
      <View className="flex-row gap-4 mt-2">
        <TouchableOpacity className="bg-accent-primary border-accent-primary border opacity-80 px-7 py-[9px] rounded-full" onPress={() => console.log('Habit 1 pressed')}>
          <Text className="text-sm font-semibold">Today</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-accent-primary border  px-7 py-[9px] rounded-full" onPress={() => console.log('Habit 1 pressed')}>
          <Text className="text-sm text-text-primary">Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-accent-primary border  px-7 py-[9px] rounded-full" onPress={() => console.log('Habit 1 pressed')}>
          <Text className="text-sm text-text-primary">Overall</Text>
        </TouchableOpacity>
      </View>
    </LayoutWrapper>
  );
};

export default Habits;
