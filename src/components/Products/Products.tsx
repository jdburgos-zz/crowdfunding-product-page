/** React core **/
import { useState } from 'react';

/** Components **/
import Product from '../Product/Product';
import Wrapper from '../helpers/Wrapper/Wrapper';
import Modal from '../ui/Modal/Modal';

/** Interfaces **/
import { IProduct } from '../../interfaces/product.interface';

/** Styles **/
import styles from './Products.module.scss';

const PRODUCTS: IProduct[] = [
  {
    title: 'Bamboo Stand',
    price: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    quantity: 101,
  },
  {
    title: 'Black Edition Stand',
    price: 75,
    description:
      'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    quantity: 64,
  },
  {
    title: 'Mahogany Special Edition',
    price: 200,
    description:
      'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added  to our Backer member list. Shipping is included.',
    quantity: 0,
  },
];

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [productSelected, setProductSelected] = useState<IProduct | undefined>({
    title: '',
    price: 0,
    description: '',
    quantity: 0,
  });

  const onClickProductHandler = (item?: IProduct) => {
    setProductSelected(item);
    setShowModal(prevState => !prevState);
  };

  const products = PRODUCTS.map((product, index) => (
    <Product key={index} product={product} onClick={onClickProductHandler.bind(null, product)} />
  ));

  const modal = (
    <Modal onClose={onClickProductHandler}>
      <div className={styles.product__modal}>
        <h2 className={styles['product__modal-title']}>{productSelected!.title}</h2>
        <p className={styles['product__modal-description']}>{productSelected!.description}</p>
        <div className={styles.product__quantity}>
          <span className={styles['product__quantity-number']}>{productSelected!.quantity}</span>{' '}
          left
        </div>
      </div>
    </Modal>
  );

  return (
    <Wrapper>
      {showModal && modal}
      <div className={styles.products}>{products}</div>
    </Wrapper>
  );
};

export default Products;
