import newsCover1 from '../../../static/images/articleCover1.png'
import newsCover2 from '../../../static/images/articleCover2.png'
import newsCover3 from '../../../static/images/articleCover3.png'
import newsCover4 from '../../../static/images/articleCover4.png'
import newsCover5 from '../../../static/images/articleCover5.png'
import Button from '../../common/Button/Button'
import Heading from '../../common/Heading/Heading'
import NewsCard from './NewsCard/NewsCard'
import styles from './NewsSection.module.css'

export default function NewsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.bottomMargin}>
        <Heading>Latest News & Articles</Heading>
      </div>
      <div className={`${styles.headingButton} ${styles.bottomMargin}`}>
        <Button type='primary'>Read More</Button>
      </div>
      <NewsCard
        title='Esports Group teams up with the Indianapolis Colts'
        date='April 2, 2021'
        coverSrc={newsCover1}
        isMain
      />
      <NewsCard
        title='NAVI reveals s1mple fifth anniversary'
        date='April 2, 2021'
        coverSrc={newsCover2}
      />
      <NewsCard
        title='A1esports Shares new picture'
        date='April 2, 2021'
        coverSrc={newsCover3}
      />
      <NewsCard
        title='T1 unveil partnership with Razer'
        date='April 2, 2021'
        coverSrc={newsCover4}
      />
      <NewsCard
        title='RX secures content partnership with'
        date='April 2, 2021'
        coverSrc={newsCover5}
      />
    </div>
  )
}
