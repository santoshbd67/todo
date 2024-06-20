import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const response = await axios.get('/api/notes');
        setNotes(response.data);
    };

    const addNote = async () => {
        const newNote = { title, content };
        await axios.post('/api/notes', newNote);
        fetchNotes();
        setTitle('');
        setContent('');
    };

    const deleteNote = async (id) => {
        await axios.delete(`/api/notes/${id}`);
        fetchNotes();
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className="note-input">
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea 
                    placeholder="Content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                />
                <button onClick={addNote}>Add Note</button>
            </div>
            <ul className="note-list">
                {notes.map(note => (
                    <li key={note.id}>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                        <button onClick={() => deleteNote(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

