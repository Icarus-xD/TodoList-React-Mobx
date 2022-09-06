export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export type sortValue = 'all' | 'completed' | 'uncompleted';