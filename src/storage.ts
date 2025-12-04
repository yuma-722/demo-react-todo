import type { Todo } from './types';

export interface TodoStorage {
  getTodos(): Todo[];
  saveTodos(todos: Todo[]): void;
  getNextId(): number;
  saveNextId(id: number): void;
}

const STORAGE_KEY_TODOS = 'todos';
const STORAGE_KEY_NEXT_ID = 'nextId';

class LocalStorageAdapter implements TodoStorage {
  getTodos(): Todo[] {
    const stored = localStorage.getItem(STORAGE_KEY_TODOS);
    if (!stored) return [];
    try {
      const parsed = JSON.parse(stored) as Array<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: string;
      }>;
      return parsed
        .map(todo => {
          const date = new Date(todo.createdAt);
          if (isNaN(date.getTime())) {
            return null;
          }
          return {
            ...todo,
            createdAt: date,
          };
        })
        .filter((todo): todo is Todo => todo !== null);
    } catch {
      return [];
    }
  }

  saveTodos(todos: Todo[]): void {
    localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(todos));
  }

  getNextId(): number {
    const stored = localStorage.getItem(STORAGE_KEY_NEXT_ID);
    if (!stored) return 1;
    const parsed = parseInt(stored, 10);
    return isNaN(parsed) ? 1 : parsed;
  }

  saveNextId(id: number): void {
    localStorage.setItem(STORAGE_KEY_NEXT_ID, String(id));
  }
}

export const todoStorage: TodoStorage = new LocalStorageAdapter();
