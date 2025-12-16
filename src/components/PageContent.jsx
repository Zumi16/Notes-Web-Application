import React from 'react';
import NotesModal from './NotesModal';
import ShowNotes from './ShowNotes'

function showNotes(notes) {
  return (
    <ShowNotes 
    key={notes.id}
    title={notes.title}
    textContent={notes.textContent}
    />
  )
}

const PageContent = ({notes, showModal, closeModal, onSaveNote}) => {
    return (
        <main className="flex flex-col items-center bg-white min-h-screen p-6">

            {showModal && (
                <NotesModal onClose={closeModal} onSave={onSaveNote}/>
            )}

        <div className="w-full max-w-6xl grid grid-cols-5 gap-10 mt-6">
            {notes.map(note => (
                <ShowNotes 
                key={note.id}
                title={note.title}
                textContent={note.textContent}
                />
            ))}
        </div>
        </main>
    )
}

export default PageContent;