import { FontAwesome } from '@expo/vector-icons';

export interface ITabs {
  route: string;
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
  size?: number;
  color?: string;
}

export const tabs: ITabs[] = [
  {
    route: 'index',
    title: 'Habits',
    icon: 'th-list',
  },
  {
    route: 'tasks',
    title: 'Tasks',
    icon: 'calendar-check-o',
  },
  {
    route: 'journal',
    title: 'Journal',
    icon: 'file-text-o',
  },
];
