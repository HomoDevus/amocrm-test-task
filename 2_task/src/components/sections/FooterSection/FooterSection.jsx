import logo from '../../../static/images/logo.svg'
import styles from './FooterSection.module.css'

export default function FooterSection() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <img className={styles.logo} src={logo} alt='Infinizai logo' />
        <p className={styles.description}>
          Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
          quam ac sed turpis volutpat. Cursus sed massa non.
        </p>
      </div>
      <div className={styles.footerNavColumn}>
        <h6>Menu Items</h6>
        <nav>
          <a href='#about'>About</a>
          <a href='#blog'>Blog</a>
          <a href='#shop'>Shop</a>
          <a href='#contact-us'>Contact Us</a>
        </nav>
      </div>
      <div className={styles.footerNavColumn}>
        <h6>Other Pages</h6>
        <nav>
          <a href='#stylguide'>Styleguide</a>
          <a href='#changelog'>Changelog</a>
          <a href='#licenses'>Licenses</a>
          <a href='#team'>Team</a>
        </nav>
      </div>
    </div>
  )
}
