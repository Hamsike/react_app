import styles from './Note.module.css'

export const Note = (props) => {
    const {title, content, onDelete} = props
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <button className={styles.button} onClick={onDelete}></button>
            </div>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}