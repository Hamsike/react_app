import styles from './Note.module.css'

export const Note = (props) => {
    const { title, content, onDelete, onUpdate } = props
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <div className={styles.buttons}>
                    <button 
                        className={`${styles.button} ${styles.editButton}`}
                        onClick={onUpdate}></button>
                    <button 
                        className={`${styles.button} ${styles.deleteButton}`} 
                        onClick={onDelete}></button>
                </div>
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}