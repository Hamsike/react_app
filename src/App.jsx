import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { NoteList } from './components/NoteList/NoteList'
import { NoteForm } from './components/NoteForm/NoteForm'

const InitianalNotes = [
  { 
    id: 1,
    title: 'Заметка для примера', 
    content: 'Описание заметки' 
  }
]

function App() {

  const [notes, setNotes] = useState(InitianalNotes)
  

  const addNote = (note) => {
    setNotes([...notes, note])
  }

  return (
    <div className='main'>
      <Header notesCount={notes.length}/>
      <NoteForm addNote={addNote}/>
      <NoteList data={notes} setNotes={setNotes}/>
    </div>
  )
}

export default App
