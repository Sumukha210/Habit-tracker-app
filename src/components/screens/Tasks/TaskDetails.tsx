import LayoutWrapper from '@/src/components/shared/LayoutWrapper';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

const TaskDetails: React.FC = () => {
  const params = useLocalSearchParams<{ mode: 'add' | 'edit' }>();
  const TITLE = params.mode === 'add' ? 'Add Task' : 'Edit Task';

  return (
    <LayoutWrapper title={TITLE} leftBtnType="back">
      <Text className="text-text-primary">TaskDetails</Text>
    </LayoutWrapper>
  );
};

export default TaskDetails;
