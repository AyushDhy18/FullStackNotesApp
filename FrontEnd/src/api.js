import axios from 'axios';

const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL + "/api/notes",
});

export const getNotes = ()=> api.get('/');

export const addNote = (noteData)=> api.post('/',noteData);

export const deleteNote = (id)=> api.delete(`/${id}`);

export const updateNote = (id,noteData)=> api.put(`/${id}`,noteData);

export default api;