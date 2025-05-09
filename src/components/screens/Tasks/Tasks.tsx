import LayoutWrapper from '@/src/components/shared/LayoutWrapper';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

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
      <View className="flex-1">
        <FlatList
          className="h-full"
          data={taskList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="bg-background-secondary py-6 px-4 rounded-lg mb-2 w-full">
              <Text className="text-text-primary text-xl font-semibold">{item}</Text>
            </View>
          )}
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View className="flex-1 items-center justify-center gap-2">
              <Text className="text-text-primary text-xl font-semibold">No tasks available</Text>
            </View>
          )}
          // ListHeaderComponent={() => (
          //   <View className="flex-1 items-center justify-center gap-2 ">
          //     <Text className="text-text-primary text-xl font-semibold">Tasks</Text>
          //   </View>
          // )}
          // ListFooterComponent={() => (
          //   <View className="flex-1 items-center justify-center gap-2 mb-4">
          //     <Text className="text-text-primary text-xl font-semibold">End of tasks</Text>
          //   </View>
          // )}
          ItemSeparatorComponent={() => <View className="h-2" />}
        />
      </View>
    </LayoutWrapper>
  );
};

export default Tasks;
