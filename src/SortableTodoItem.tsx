import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Todo } from './types';

interface SortableTodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  formatDate: (date: Date) => string;
  isDragEnabled: boolean;
}

function SortableTodoItem({ todo, onToggle, formatDate, isDragEnabled }: SortableTodoItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id, disabled: !isDragEnabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    marginBottom: '0.5rem',
    textAlign: 'left' as const,
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    backgroundColor: isDragging ? '#f0f0f0' : '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
  };

  const handleCheckboxChange = () => {
    onToggle(todo.id);
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes}>
      {isDragEnabled && (
        <span
          {...listeners}
          role="button"
          tabIndex={0}
          style={{
            cursor: 'grab',
            marginRight: '0.5rem',
            padding: '0.25rem',
            color: '#666',
            userSelect: 'none',
          }}
          aria-label="ドラッグして並べ替え"
          aria-roledescription="ドラッグ可能"
        >
          ≡
        </span>
      )}
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
        <span style={{ fontSize: '0.75rem', color: '#888', marginLeft: 'auto' }}>
          {formatDate(todo.createdAt)}
        </span>
      </label>
    </li>
  );
}

export default SortableTodoItem;
