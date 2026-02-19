import { useState } from 'react'
import styles from './NoteForm.module.css'
import { memo } from 'react'
import { useStore } from '../../store'

export const NoteForm = memo(() => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState('')
    const [errorC, setErrorC] = useState('')
    const addNote = useStore(store => store.addNote)

    const submit = (event) => {
        event.preventDefault()
        if (!title.trim()) {
            setError('Укажи заголовок')
            return
        }
        if (!content.trim()) {
            setErrorC('Заполни содержимое')
            return
        }
        
        const node = {
            title,
            content,
            id: Math.random().toString()
        }

        addNote(node)
        setTitle('')
        setContent('')
    }

    return (
        <form className={styles.main}>
            <input 
                type="text"
                placeholder='Заголовок заметки'
                className={styles.input}
                value={title}
                onChange={e => {
                    setTitle(e.target.value)
                    setError('')
                    }} />
            {Boolean(error.length) && <span className={styles.error}>{error}</span>}
            <textarea 
                placeholder='Содержание заметки'
                className={styles.textarea}
                value={content}
                onChange={e => {
                    setContent(e.target.value)
                    setErrorC('')
                    }}></textarea>
            {Boolean(errorC.length) && <span className={styles.error}>{errorC}</span>}
            <button className={styles.button} onClick={submit}>Добавить заметку</button>
        </form>
    )
})