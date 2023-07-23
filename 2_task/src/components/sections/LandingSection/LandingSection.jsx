import logo from '../../../static/images/logo.svg'
import Button from '../../common/Button/Button'
import PreTitle from '../../common/PreTitle/PreTitle'
import Cart from './Cart/Cart'
import styles from './LandingSection.module.css'
import landingImage from '../../../static/images/landingImage.png'

export default function LandingSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt='Infinizai logo' />
        <nav>
          <Button type='text'>Home</Button>
          <Button type='text'>About</Button>
          <Button type='text'>Team</Button>
          <Button type='text'>Shop</Button>
          <Button type='text'>Pages</Button>
        </nav>
        <div className={styles.cartContainer}>
          <Cart amount={0} />
          <Button type='outlined'>Contact Us</Button>
        </div>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.conent}>
          <PreTitle>FUTURE OF ESPORTS</PreTitle>
          <h1 className={styles.contentHeading}>
            Unleash the Next <span className={styles.curvedUnderline}>Generation</span> of Gaming
          </h1>
          <h6 className={styles.contentDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
            donec in morbi pulvinar. Enim non pulvinar neque.
          </h6>
          <div className={styles.conentButtons}>
            <Button type='primary'>Explore More</Button>
            <Button type='text'>View our team</Button>
          </div>
        </div>
        <img src={landingImage} alt='Fortnite soldier caracter' />
      </div>
    </div>
  )
}
