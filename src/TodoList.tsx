import type { Todo } from './types';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

function TodoList({ todos, onToggle }: TodoListProps) {
  if (todos.length === 0) {
    return <p>ToDoがありません</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: '0.5rem', textAlign: 'left' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
