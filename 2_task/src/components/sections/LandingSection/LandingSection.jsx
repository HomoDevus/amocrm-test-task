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
        <div className={styles.socialMediaContainer}>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Twitch</a>
        </div>
        <div className={styles.conent}>
          <Heading
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, necdonec in morbi pulvinar. Enim non pulvinar neque.'
            }
          >
            Unleash the Next{' '}
            <span className={styles.curvedUnderline}>Generation</span> of Gaming
          </Heading>
          <div className={styles.conentButtons}>
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
