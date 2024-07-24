import React from 'react';
import { Note } from '../types';

interface NoteItemProps {
  note: Note;
  deleteNote: (id: number) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, deleteNote }) => {
  return (
    <div className="note-item">
      <span>{note.content}</span>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;