import styles from './Header.module.css'

export const Header = ({notesCount}) => {
    return (
        <div className={styles.header}>
            <h1 >Заметки</h1>
            <div className={styles.p}>
                Всего заметок: <span>{notesCount}</span>
            </div>
        </div>
    )
}