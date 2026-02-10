import styles from './Modal.module.css'
import ReactDOM from 'react-dom'


export const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null
    return ReactDOM.createPortal(
    <div className={styles.modal}>
        <div className={styles.content}>
            <button className={styles.button} onClick={onClose}></button>
            {children}
        </div>
        <div className={styles.overlay} onClick={onClose}></div>
    </div>,
    document.body
    )
}