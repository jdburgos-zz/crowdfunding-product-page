/** Components **/
import Card from '../ui/Card/Card';
import Button from '../ui/Button/Button';

/** Styles **/
import styles from './Product.module.scss';

const Product = props => {
  const { title, price, description ,quantity } = props.product;
  const disable = quantity <= 0;
  const disableClass = disable ? styles[`product--disable`] : '';
  const btnText = disable ? 'Out of Stock' : 'Select Reward';

  return (
    <div className={`${styles.product} ${disableClass}`}>
      <Card borderColor='light' type={2}>
        <div className={styles['product__header']}>
          <h3 className={styles['product__title']}>{title}</h3>
          <div className={styles['product__price']}>Pledge ${price} or more</div>
        </div>
        <div className={styles['product__description']}>{description}</div>
        <div className={styles['product__footer']}>
          <div className={styles['product__quantity']}><span className={styles['product__quantity-number']}>{quantity}</span> left</div>
          <Button onClick={props.onClick.bind(null, props.product)} disable={disable}>{btnText}</Button>
        </div>
      </Card>
    </div>
  );
};

export default Product;
