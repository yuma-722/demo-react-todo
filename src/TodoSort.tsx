import type { SortField, SortOrder } from './types';

interface TodoSortProps {
  sortField: SortField;
  sortOrder: SortOrder;
  onSortFieldChange: (field: SortField) => void;
  onSortOrderChange: (order: SortOrder) => void;
}

function TodoSort({ sortField, sortOrder, onSortFieldChange, onSortOrderChange }: TodoSortProps) {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
      <span>並べ替え:</span>
      <select
        value={sortField}
        onChange={(e) => onSortFieldChange(e.target.value as SortField)}
        style={{ padding: '0.25rem' }}
      >
        <option value="manual">手動（ドラッグ&ドロップ）</option>
        <option value="createdAt">作成日時</option>
        <option value="completed">完了状態</option>
      </select>
      {sortField !== 'manual' && (
        <select
          value={sortOrder}
          onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
          style={{ padding: '0.25rem' }}
        >
          <option value="asc">昇順</option>
          <option value="desc">降順</option>
        </select>
      )}
    </div>
  );
}

export default TodoSort;
