import React, { useEffect, useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteItem from './components/NoteItem';
import NoteList from './components/NoteList';
import {getNotes,addNote,deleteNote,updateNote} from './api';


const App = () => {
  
  const [notes,setNotes]= useState([]);

  useEffect(()=>{
    getNotes().then((res)=>{setNotes(res.data)})
  },[]);

  const handleAdd = async(note)=>{
    try{
            const res = await addNote(note);
           setNotes([res.data,...notes]);
    }catch(err){
      console.error("Error adding note:", err);
    }

  }

  const handleRemove = async(id)=>{
    console.log("Deleting ID:", id);
    await deleteNote(id);
    setNotes(notes.filter(note => note._id !== id));
  }

  return (
    <div className="min-h-screen bg-stone-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Courier New, monospace' }}>
            Notepad
          </h1>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Courier New, monospace' }}>Keep your thoughts organized</p>
        </div>
        
        <NoteForm onAdd={handleAdd} />
        <NoteList notes={notes} onRemove={handleRemove} />
      </div>
    </div>
  );
};

export default App;