import { useState } from 'react'
import './App.css'
import type { Todo } from './types'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: nextId,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h1>ToDo アプリ</h1>
      <TodoInput onAdd={handleAddTodo} />
      <div style={{ marginTop: '2rem' }}>
        <TodoList todos={todos} onToggle={handleToggleTodo} />
      </div>
    </div>
  )
}

export default App
