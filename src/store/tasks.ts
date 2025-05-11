import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ITask } from '@/src/types/task';
import { STORAGE_KEY } from '@/src/store/constants';

interface TaskState {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: string) => void;
}

const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task: ITask) => set((state) => ({ tasks: [...state.tasks, task] })),
      removeTask: (id: string) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    }),
    {
      name: STORAGE_KEY.TASKS,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
export default useTaskStore;
