import logo from '../../../static/images/logo.svg'
import styles from './FooterSection.module.css'

export default function FooterSection() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <img className={styles.logo} src={logo} />
        <p className={styles.description}>
          Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
          quam ac sed turpis volutpat. Cursus sed massa non.
        </p>
      </div>
      <div className={styles.footerNavColumn}>
        <h6>Menu Items</h6>
        <nav>
            <a>About</a>
            <a>Blog</a>
            <a>Shop</a>
            <a>Contact Us</a>
        </nav>
      </div>
      <div className={styles.footerNavColumn}>
        <h6>Other Pages</h6>
        <nav>
            <a>Styleguide</a>
            <a>Changelog</a>
            <a>Licenses</a>
            <a>Team</a>
        </nav>
      </div>
    </div>
  )
}
