import styles from './Header.module.css'
import { memo } from 'react'

export const Header = memo(({notesCount}) => {
    return (
        <div className={styles.header}>
            <h1 >Заметки</h1>
            <div className={styles.p}>
                Всего заметок: <span>{notesCount}</span>
            </div>
        </div>
    )
})