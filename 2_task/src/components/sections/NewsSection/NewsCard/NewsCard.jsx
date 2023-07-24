import styles from './NewsCard.module.css'

export default function NewsCard({ title, date, coverSrc, isMain = false }) {
  return (
    <a className={isMain && styles.mainItem}>
      <div className={styles.container}>
        <img src={coverSrc} alt="Article cover" />
        <div className={isMain ? styles.mainDate : styles.secondaryDate}>
          {date}
        </div>
        {isMain ? <h2>{title}</h2> : <h3>{title}</h3>}
      </div>
    </a>
  )
}
