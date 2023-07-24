import styles from './ImageButton.module.css'

export default function ImageButton({ src, isSelected = false }) {
  return (
    <button className={`${styles.button} ${isSelected ? styles.selected : ''}`}>
      <img src={src} alt="Button cover" />
    </button>
  )
}
