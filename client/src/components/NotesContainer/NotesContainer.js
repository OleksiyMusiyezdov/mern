import React from 'react';
import Note from '../Note/Note';

export const NotesContainer = (notes) => {

    return (
        <div className="NotesContainer">
            {/* {notes.map((note, key) => { */}
            {notes.notes.map((note, key) => {
                return (<li key={key}>
                    <Note
                        // title={note.title}
                        // content={note.content}
                        // picture={note.picture}
                        title={note.title}
                        content={note.content}
                        picture={note.picture}
                    />
                </li>)
            })}
        </div>
    )
}