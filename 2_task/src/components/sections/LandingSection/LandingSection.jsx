import landingImage from '../../../static/images/landingImage.png'
import logo from '../../../static/images/logo.svg'
import Button from '../../common/Button/Button'
import Cart from './Cart/Cart'
import styles from './LandingSection.module.css'
import Heading from '../../common/Heading/Heading'

export default function LandingSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt='Infinizai logo' />
        <nav className={styles.menu}>
          <a className={styles.menuLink} href='#home'>
            Home
          </a>
          <a className={styles.menuLink} href='#about'>
            About
          </a>
          <a className={styles.menuLink} href='#team'>
            Team
          </a>
          <a className={styles.menuLink} href='#shop'>
            Shop
          </a>
          <a className={styles.menuLink} href='#page'>
            Page
          </a>
        </nav>
        <div className={styles.cartContainer}>
          <Cart amount={0} />
          <Button type='outlined'>Contact Us</Button>
        </div>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.socialMediaContainer}>
          <a href='#facebook'>Facebook</a>
          <a href='#instagram'>Instagram</a>
          <a href='#twitch'>Twitch</a>
        </div>
        <div className={styles.content}>
          <Heading
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, necdonec in morbi pulvinar. Enim non pulvinar neque.'
            }
          >
            Unleash the Next{' '}
            <span className={styles.curvedUnderline}>Generation</span> of Gaming
          </Heading>
          <div className={styles.contentButtons}>
            <Button type='primary'>Explore More</Button>
            <Button type='text'>View our team</Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={landingImage} alt='Fortnite soldier caracter' />
        </div>
      </div>
    </div>
  )
}
