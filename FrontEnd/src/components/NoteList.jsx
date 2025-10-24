import React from 'react';
import NoteItem from './NoteItem';


const NoteList = ({notes,onRemove}) => {

  if (notes.length === 0) {
    return (
      <div className="text-center py-16 bg-yellow-50 border-l-2 border-yellow-200" style={{
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)',
        backgroundSize: '100% 32px'
      }}>
        <div className="text-5xl mb-3">📝</div>
        <p className="text-lg text-gray-600" style={{ fontFamily: 'Courier New, monospace' }}>No notes yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note, index) => (
        <NoteItem key={note._id} note={note} onRemove={onRemove} colorIndex={index} />
      ))}
    </div>
  );
};

export default NoteList;