import cart from '../../../../static/images/cart.svg'
import styles from './Cart.module.css'

export default function Cart({ amount }) {
  return (
    <div className={styles.container}>
      <img src={cart} alt='Shopping cart' />
      <div className={styles.counter}>{amount}</div>
    </div>
  )
}
