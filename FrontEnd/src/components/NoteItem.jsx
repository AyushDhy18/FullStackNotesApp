import React from 'react';
import { Plus, X } from 'lucide-react';

const NoteItem = ({note,onRemove,colorIndex }) => {

const colors = [
    { bg: 'bg-yellow-100', border: 'border-yellow-400' },
    { bg: 'bg-blue-100', border: 'border-blue-400' },
    { bg: 'bg-pink-100', border: 'border-pink-400' },
    { bg: 'bg-green-100', border: 'border-green-400' },
    { bg: 'bg-purple-100', border: 'border-purple-400' },
  ];
  
  const color = colors[colorIndex % colors.length];

  return (
    <div className={`${color.bg} border-l-2 ${color.border} p-5 relative shadow-sm hover:shadow-md transition-shadow`} style={{
      backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)',
      backgroundSize: '100% 32px'
    }}>
      <div className="absolute top-0 left-0 w-full h-2 bg-amber-100/50"></div>
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-semibold break-words flex-1 text-gray-800" style={{ fontFamily: 'Courier New, monospace' }}>
          {note.title || "Untitled"}
        </h2>
        <button
          onClick={() => onRemove(note._id)}
          className="text-gray-500 hover:text-gray-800 transition-colors ml-2 flex-shrink-0"
        >
          <X size={18} />
        </button>
      </div>
      <p className="text-gray-700 whitespace-pre-wrap break-words" style={{ 
        fontFamily: 'Courier New, monospace',
        lineHeight: '32px'
      }}>
        {note.content || "No content"}
      </p>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-2 border-gray-300 rounded-full"></div>
    </div>
  );

};

export default NoteItem;