import React from 'react';
import Note from '../Note/Note';

export const Pagination = (notes) => {

    return (
        <div className="NotesContainer">
            {notes.notes.map((note, key) => {
                return (<li key={key}>
                    <Note
                        title={note.title}
                        content={note.content}
                        picture={note.picture}
                    />
                </li>)
            })}
        </div>
    )
}