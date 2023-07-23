import fireIcon from '../../../static/images/fire.svg'
import styles from './PreTitle.module.css'

export default function PreTitle({ children }) {
  return (
    <div className={styles.container}>
      <img src={fireIcon} />
      <p className={styles.text}>{children}</p>
    </div>
  )
}
