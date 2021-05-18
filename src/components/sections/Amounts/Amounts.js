/** Components **/
import Card from '../../ui/Card/Card';

/** Styles **/
import styles from './Amounts.module.scss';

const Amounts = () => (
  <div className={styles.amounts}>
    <Card>
      <div className={styles['amounts__container']}>
        <div className={styles['amounts__item']}>
          <h2 className={styles['amounts__item-title']}>$89,914</h2>
          <span className={styles['amounts__item-text']}>of $100,000 backed</span>
        </div>
        <div className={styles['amounts__item']}>
          <h2 className={styles['amounts__item-title']}>5,007</h2>
          <span className={styles['amounts__item-text']}>total backers</span>
        </div>
        <div className={styles['amounts__item']}>
          <h2 className={styles['amounts__item-title']}>56</h2>
          <span className={styles['amounts__item-text']}>days left</span>
        </div>
      </div>
      <div className={styles['amounts__percentage']}></div>
    </Card>
  </div>
);

export default Amounts;
