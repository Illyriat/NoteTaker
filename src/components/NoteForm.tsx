import React, { useState } from 'react';

interface NoteFormProps {
  addNote: (content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ addNote }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addNote(content);
      setContent('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Enter your note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;