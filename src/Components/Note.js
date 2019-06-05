import React, { useContext, useState } from 'react'
import NoteContext from '../context/noteContext'

const Note = ({ note }) => {
    const [editedBody, setEditedBody] = useState('')
    const [editedNoteColor, setEditedNoteColor] = useState('')
    const [isEditing, setIsEditing] = useState(false)

    const { notesDispatch } = useContext(NoteContext)

    const handleDeleteNote = () => {
        notesDispatch({type: 'DELETE_NOTE', id: note.id})
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault()
        notesDispatch({type: 'EDIT_NOTE', id: note.id, body: editedBody, color: editedNoteColor})

        setIsEditing(false)
    }

    return (
        <div className='note' style={{background : note.color}}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            {!isEditing ? 
                <button className="edit" onClick={() => {setIsEditing(true)}}>Edit</button> : 
                <button className='cancel' onClick={() => {setIsEditing(false)}}>Cancel</button>}
            <button className="delete" onClick={handleDeleteNote}
            >Delete</button>
            {isEditing && 
                <form action="" className="editForm" onSubmit={handleEditFormSubmit}>
                    <textarea 
                        name="editBody" 
                        id="editBody" 
                        cols="30" 
                        rows="10"
                        value={editedBody}
                        onChange={(e) => {setEditedBody(e.target.value)}}
                        
                        >
                    </textarea>
                    <label htmlFor="colorSelect">Select Note Color:</label>
                <select name="colorSelect" id="colorSelect" onChange={(e) => setEditedNoteColor(e.target.value)} value={editedNoteColor}>
                    <option value="">Select Color</option>
                    <option value="lightcoral">Red</option>
                    <option value="lightblue">Blue</option>
                    <option value="lightgreen">Green</option>
                    <option value="violet">Purple</option>
                    <option value="orange">Orange</option>
                </select>
                    <button className="submitEdit">Submit Edit</button>
                </form>
            }
        </div>
        

    )
}


export default Note