import { Dayjs } from 'dayjs';

export interface ITask {
  id: string;
  name: string;
  note: string;
  dateTime: Dayjs;
  isDone: boolean;
  priority: number;
}
