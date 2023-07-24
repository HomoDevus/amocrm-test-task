import characterCover3 from '../../../static/images/characterCover3.png'
import characterCover1 from '../../../static/images/characterCover1.png'
import characterCover2 from '../../../static/images/characterCover2.png'
import characterImage from '../../../static/images/characterImage.png'
import Heading from '../../common/Heading/Heading'
import ImageButton from '../../common/ImageButton/ImageButton'
import styles from './CharacterSection.module.css'

export default function CharacterSection() {
  return (
    <div className={styles.container}>
      <div className={styles.characterImageContainer}>
        <img className={styles.image} src={characterImage} />
      </div>
      <div className={styles.content}>
        <Heading description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.'>
          Customize your Own Character
        </Heading>
        <div className={styles.characterSelection}>
          <ImageButton src={characterCover1} isSelected />
          <ImageButton src={characterCover2} />
          <ImageButton src={characterCover3} />
        </div>
      </div>
    </div>
  )
}
