import styles from './UpdateForm.module.css'
import { useState } from 'react'

const UpdateForm = ({ editForm, setEditForm, handleSave, error, errorC, setError, setErrorC }) => {

    return (
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
    )
}

export default UpdateForm