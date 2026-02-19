import { useCallback, useEffect, useState } from 'react'
import styles from './Main.module.css'

import { Header } from '../components/Header/Header'
import { NoteList } from '../components/NoteList/NoteList'
import { NoteForm } from '../components/NoteForm/NoteForm'
import { Search } from '../components/Search/Search'
import { NoteService } from '../services/note'
import { useStore } from '../store'

const Main = () => {
    const notes = useStore(store => store.notes)
    const setNotes = useStore(store => store.setNotes)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        NoteService.setNotes(notes)
    }, [notes])

    const searchedNotes = NoteService.updateNotes(notes, searchQuery)


    return (
        <div className={styles.main}>
            <Header notesCount={notes.length} />
            <NoteForm/>
            <Search value={searchQuery} onChange={setSearchQuery} />
            {notes.length > 0 && <NoteList data={searchedNotes} setNotes={setNotes} />}
        </div>
    )
}

export default Main