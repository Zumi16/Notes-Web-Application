import { useState } from 'react'
import '../styles/App.css'
import Header from './Header'
import PageContent from './PageContent'
import Footer from './Footer'
import notes from './notes'


function App() {
  const [showModal, setShowModal] = useState(false);
  const [notesState, setNotesState] = useState(notes)

  const addNote = (newNote) => {
    const noteWithId = { id: Date.now(), ...newNote }
    setNotesState([...notesState, noteWithId])
    setShowModal(false)
  }


  return (
    <>
      <Header onAddNote={() => setShowModal(true)}/>
      <PageContent notes={notesState} showModal={showModal} closeModal={() => 
        setShowModal(false)
      }
      onSaveNote={addNote}
      />
    </>
  )
}

export default App
