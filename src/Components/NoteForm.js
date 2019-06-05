import React, { useContext, useState} from 'react';
import NoteContext from '../context/noteContext'
import uuid from 'uuid/v4'

const NoteForm = () => {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteBody, setNoteBody] = useState('')
    const [noteColor, setNoteColor] = useState('')

    const { notesDispatch } = useContext(NoteContext)

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if (noteTitle === '' || noteBody === '' || noteColor === '') {
            alert('Please complete all fields')
            return
        }


        notesDispatch({type: 'ADD_NOTE', id: uuid(), title: noteTitle, body: noteBody, color: noteColor})

        setNoteTitle('')
        setNoteBody('')
    }

    return (
        <div>
            <h2>Add Note</h2>
            <form action="" className='noteForm' onSubmit={handleFormSubmit}>
                <div className="noteTitleContainer">
                    <label htmlFor="noteTitle">
                        Note Title:
                    </label>
                    <input 
                    type="text" 
                    name="noteTitle" 
                    id="noteTitle"
                    placeholder="Note Title"
                    value={noteTitle}
                    onChange={(e) => {setNoteTitle(e.target.value)}}
                    />
                
                </div>
                <div className="noteColorContainer">
                    <label htmlFor="colorSelect">Select Note Color:</label>
                    <select name="colorSelect" id="colorSelect" onChange={(e) => setNoteColor(e.target.value)} value={noteColor}>
                        <option value="">Select Color</option>
                        <option value="lightcoral">Red</option>
                        <option value="lightblue">Blue</option>
                        <option value="lightgreen">Green</option>
                        <option value="violet">Purple</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                    <label htmlFor="noteBody" className='textAreaLabel'>
                        Enter Note:
                    </label>
                
                <textarea 
                name="noteBody" 
                id="noteBody" 
                cols="30" 
                rows="10" 
                value={noteBody}
                onChange={(e) => {setNoteBody(e.target.value)}}
                >   
                </textarea>
                <button className="submit">Add note</button>
            </form>
        </div>
    );
};

export default NoteForm;