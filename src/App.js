import React, {useReducer} from 'react';
import NoteForm from './Components/NoteForm'
import NoteList from './Components/NoteList'
import NoteContext from './context/noteContext'
import noteReducer from './reducers/noteReducer'
import './App.css';

function App() {
  const [notes, notesDispatch] = useReducer(noteReducer, [])

  return (
    <div className="App wrapper">
      <NoteContext.Provider value={{ notes, notesDispatch }}>
        <NoteForm />
        <NoteList />
      </NoteContext.Provider>
    </div>
  );
}

export default App;
