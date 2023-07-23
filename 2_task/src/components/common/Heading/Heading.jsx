import styles from './Heading.module.css'
import PreTitle from '../PreTitle/PreTitle'

export default function Heading({ description, children }) {
  return (
    <>
      <PreTitle>FUTURE OF ESPORTS</PreTitle>
      <h1 className={styles.contentHeading}>{children}</h1>
      <h6 className={styles.contentDescription}>{description}</h6>
    </>
  )
}
