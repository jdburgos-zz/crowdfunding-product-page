/** React core **/
import React from 'react';

/** Components **/
import Card from '../ui/Card/Card';
import Button from '../ui/Button/Button';

/** Interfaces **/
import { IProduct } from '../../interfaces/product.interface';

/** Styles **/
import styles from './Product.module.scss';

type ProductProps = {
  product: IProduct;
  onClick: () => void;
};

const Product: React.FC<ProductProps> = ({ product, onClick }) => {
  const { title, price, description, quantity } = product;
  const disable = quantity <= 0;
  const disableClass = disable ? styles[`product--disable`] : '';
  const btnText = disable ? 'Out of Stock' : 'Select Reward';

  return (
    <div className={`${styles.product} ${disableClass}`}>
      <Card borderColor="light" type={2}>
        <div className={styles.product__header}>
          <h3 className={styles.product__title}>{title}</h3>
          <div className={styles.product__price}>Pledge ${price} or more</div>
        </div>
        <div className={styles.product__description}>{description}</div>
        <div className={styles.product__footer}>
          <div className={styles.product__quantity}>
            <span className={styles['product__quantity-number']}>{quantity}</span> left
          </div>
          <Button onClick={onClick.bind(null, product)} disable={disable}>
            {btnText}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Product;
