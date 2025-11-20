import { useState } from 'react';

interface TodoInputProps {
  onAdd: (title: string) => void;
}

function TodoInput({ onAdd }: TodoInputProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      setError('タイトルを入力してください');
      return;
    }

    onAdd(trimmedTitle);
    setTitle('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          placeholder="新しいToDo"
        />
        <button type="submit">追加</button>
      </div>
      {error && <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>}
    </form>
  );
}

export default TodoInput;
