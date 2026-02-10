import { Note } from '../Note/Note'
import styles from './NoteList.module.css'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'

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
                <div className={styles.editForm}>
                    <h2>Редактировать заметку</h2>
                        <label htmlFor="teme">Тема</label>
                        <input
                            id='teme'
                            type="text"
                            value={editForm.title}
                            onChange={(e) => {
                                setEditForm({ ...editForm, title: e.target.value })
                                setError('')
                            }}
                            className={styles.input}
                        />
                        {Boolean(error.length) && <span className={styles.error}>{error}</span>}
                        <label htmlFor="text">Содержание</label>
                        <textarea
                            id='text'
                            value={editForm.content}
                            onChange={(e) => {
                                setEditForm({ ...editForm, content: e.target.value })
                                setErrorC('')
                            }}
                            className={styles.textarea}
                            rows={5}
                        />
                        {Boolean(errorC.length) && <span className={styles.error}>{errorC}</span>}
                    <button className={styles.button} onClick={handleSave}>Сохранить</button>
                </div>
            </Modal>
        </>
    )
}