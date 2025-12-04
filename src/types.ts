export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export type SortField = 'createdAt' | 'completed' | 'manual';
export type SortOrder = 'asc' | 'desc';
