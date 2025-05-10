import LayoutWrapper from '@/src/components/shared/LayoutWrapper';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { palette } from '@/src/theme/palette';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const taskList = [
  'Task 1',
  'Task 2',
  'Task 3',
  'Task 4',
  'Task 5',
  'Task 6',
  'Task 7',
  'Task 8',
  'Task 9',
  'Task 10',
  'Task 11',
  'Task 12',
  'Task 13',
  'Task 14',
  'Task 15',
  'Task 16',
  'Task 17',
  'Task 18',
  'Task 19',
  'Task 20',
];

const Tasks = () => {
  const router = useRouter();

  const hanldleAddTask = () => {
    router.push({ pathname: '/taskDetails', params: { mode: 'add' } });
  };

  return (
    <LayoutWrapper title="Tasks" onAddIconPress={hanldleAddTask}>
      <FlatList
        className="h-full"
        data={taskList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="bg-background-secondary relative rounded-lg overflow-hidden border border-border-light">
            <LinearGradient colors={[palette.accent.primary, palette.accent.secondary]} className="bg-accent-primary absolute right-0 h-full w-[6px] opacity-70" />

            <View className="p-5 w-full flex-row items-center gap-4">
              <View className="h-12 w-12 items-center justify-center rounded-full border border-border-light">
                <AntDesign name="check" size={24} color={palette.border.accent} />
              </View>
              <Text className="text-text-primary text-xl font-semibold">{item}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center gap-2">
            <Text className="text-text-primary text-xl font-semibold">No tasks available</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />
    </LayoutWrapper>
  );
};

export default Tasks;
