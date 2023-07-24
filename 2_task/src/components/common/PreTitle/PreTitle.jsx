import fireIcon from '../../../static/images/fire.svg'
import styles from './PreTitle.module.css'

export default function PreTitle({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img src={fireIcon} alt='Fire icon' />
      </div>
      <p className={styles.text}>{children}</p>
    </div>
  )
}
