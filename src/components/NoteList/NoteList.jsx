import { Note } from '../Note/Note'
import styles from './NoteList.module.css'

export const NoteList = ({ data, setNotes }) => {
    return (
        <div className={styles.noteList}>
            {data.map(note => (
                <Note 
                    key={note.id}
                    title={note.title} 
                    content={note.content}
                    onDelete={() => setNotes(data.filter(curNote => curNote.id !== note.id))}
                />
            ))}
        </div>
    )
}