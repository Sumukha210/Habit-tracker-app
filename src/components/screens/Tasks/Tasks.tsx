import LayoutWrapper from '@/src/components/shared/LayoutWrapper';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
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
      <ScrollView>
        <View className="flex-1 items-center justify-center gap-2">
          {taskList.map((task, index) => (
            <View key={index} className="bg-background-secondary py-6 px-4 rounded-lg mb-2 w-full">
              <Text className="text-text-primary text-xl font-semibold">{task}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LayoutWrapper>
  );
};

export default Tasks;
