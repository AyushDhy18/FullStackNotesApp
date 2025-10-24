import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const NoteForm = ({onAdd}) => {

  const [title,setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({title,content});
    setTitle("");
    setContent("");
  }

  return (
        <div className="bg-amber-50 border-l-2 border-red-300 p-6 mb-8 relative" style={{
      backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)',
      backgroundSize: '100% 32px'
    }}>
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-100"></div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700" style={{ fontFamily: 'Courier New, monospace' }}>New Note</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-2 py-1 bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Title..."
            style={{ fontFamily: 'Courier New, monospace' }}
          />
        </div>
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full px-2 py-1 bg-transparent focus:outline-none resize-none"
            placeholder="Write your note..."
            style={{ fontFamily: 'Courier New, monospace', lineHeight: '32px' }}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-gray-700 text-white font-semibold py-2 px-4 hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          <Plus size={16} />
          Add Note
        </button>
      </div>
    </div>
  );
};

export default NoteForm;