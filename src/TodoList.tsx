import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { Todo } from './types';
import SortableTodoItem from './SortableTodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onReorder: (activeId: number, overId: number) => void;
  isDragEnabled: boolean;
}

const formatDate = (date: Date): string => {
  const d = date instanceof Date ? date : new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

function TodoList({ todos, onToggle, onReorder, isDragEnabled }: TodoListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (todos.length === 0) {
    return <p>ToDoがありません</p>;
  }

  const handleDragEnd = (event: DragEndEvent) => {
    if (!isDragEnabled) return;
    const { active, over } = event;
    if (over && active.id !== over.id) {
      onReorder(Number(active.id), Number(over.id));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={todos.map(t => t.id)} strategy={verticalListSortingStrategy}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <SortableTodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              formatDate={formatDate}
              isDragEnabled={isDragEnabled}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

export default TodoList;
