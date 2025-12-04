import { useState, useEffect, useCallback, useMemo } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import './App.css'
import type { Todo, SortField, SortOrder } from './types'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoSort from './TodoSort'
import { todoStorage } from './storage'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => todoStorage.getTodos());
  const [nextId, setNextId] = useState(() => todoStorage.getNextId());
  const [sortField, setSortField] = useState<SortField>('manual');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    todoStorage.saveTodos(todos);
  }, [todos]);

  useEffect(() => {
    todoStorage.saveNextId(nextId);
  }, [nextId]);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: nextId,
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const handleToggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) => 
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleReorder = useCallback((activeId: number, overId: number) => {
    setTodos((prevTodos) => {
      const oldIndex = prevTodos.findIndex((t) => t.id === activeId);
      const newIndex = prevTodos.findIndex((t) => t.id === overId);
      return arrayMove(prevTodos, oldIndex, newIndex);
    });
  }, []);

  const sortedTodos = useMemo(() => {
    if (sortField === 'manual') {
      return todos;
    }

    const sorted = [...todos].sort((a, b) => {
      if (sortField === 'createdAt') {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
      if (sortField === 'completed') {
        const compA = a.completed ? 1 : 0;
        const compB = b.completed ? 1 : 0;
        return sortOrder === 'asc' ? compA - compB : compB - compA;
      }
      return 0;
    });
    return sorted;
  }, [todos, sortField, sortOrder]);

  const isDragEnabled = sortField === 'manual';

  return (
    <div>
      <h1>ToDo アプリ</h1>
      <TodoInput onAdd={handleAddTodo} />
      <div style={{ marginTop: '2rem' }}>
        <TodoSort
          sortField={sortField}
          sortOrder={sortOrder}
          onSortFieldChange={setSortField}
          onSortOrderChange={setSortOrder}
        />
        <TodoList 
          todos={sortedTodos} 
          onToggle={handleToggleTodo} 
          onReorder={handleReorder} 
          isDragEnabled={isDragEnabled}
        />
      </div>
    </div>
  )
}

export default App
