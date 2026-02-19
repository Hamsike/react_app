import { Note } from '../Note/Note'
import styles from './NoteList.module.css'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import UpdateForm from '../UpdateForm/UpdateForm'

export const NoteList = ({ data, setNotes }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [editingNote, setEditingNote] = useState(null);
    const [editForm, setEditForm] = useState({ title: '', content: '' });
    const [error, setError] = useState('')
    const [errorC, setErrorC] = useState('')

    const handleEdit = (note) => {
        setEditingNote(note);
        setEditForm({ title: note.title, content: note.content });
        setIsOpen(true)
    }

    const handleSave = () => {
        if (!editForm.title) {
            setError('Укажи тему')
            return
        }

        if (!editForm.content) {
            setErrorC('Напиши контент')
            return
        }


        if (editingNote) {
            setNotes(data.map(note =>
                note.id === editingNote.id
                    ? { ...note, ...editForm }
                    : note
            ));
            setIsOpen(false);
            setEditingNote(null);
        }
    };

    return (
        <>
            <div className={styles.noteList}>
                {data.map(note => (
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.content}
                        onDelete={() => setNotes(data.filter(curNote => curNote.id !== note.id))
                        }
                        onUpdate={() => handleEdit(note)}
                    />
                ))}
            </div>

            <Modal isOpen={isOpen} onClose={() => {
                setIsOpen(false)
                setEditingNote(null)
            }}>
                <UpdateForm 
                    editForm={editForm} 
                    setEditForm={setEditForm}
                    handleSave={handleSave}
                    error={error}
                    errorC={errorC}
                    setError={setError}
                    setErrorC={setErrorC}
                    />
            </Modal>
        </>
    )
}