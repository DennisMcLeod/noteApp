import React, {useContext} from 'react';
import NoteContext from '../context/noteContext'
import Note from './Note'

const NoteList = () => {
    const { notes } = useContext(NoteContext)

    const displayNotes = note => {
        return (
            <>
                <Note key={note.id} note={note} />
            </>
        )
    }

    return (
        <div className='noteContainer'>
            {notes.map(displayNotes)}
        </div>
    );
};

export default NoteList;