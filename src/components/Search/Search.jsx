import styles from './Search.module.css'

export const Search = ({ value, onChange }) => {
    return (
    <>
        <input 
            type="text" 
            className={styles.input}
            placeholder='Поис заметок'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </>
    )
}