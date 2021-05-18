/** React core **/

import { useState } from 'react';
/** Components **/
import Product from '../Product/Product';
import Wrapper from '../helpers/Wrapper/Wrapper';
import Modal from '../ui/Modal/Modal';

/** Styles **/
import styles from './Products.module.scss';

const PRODUCTS = [
  {
    title: "Bamboo Stand",
    price: 25,
    description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    quantity: 101,
  },
  {
    title: "Black Edition Stand",
    price: 75,
    description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    quantity: 64,
  },
  {
    title: "Mahogany Special Edition",
    price: 200,
    description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added  to our Backer member list. Shipping is included.",
    quantity: 0,
  }
];

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const onClickProductHandler = (item) => {
    setShowModal(prevState => !prevState);
  }
  const products = PRODUCTS.map((item, index) => <Product key={index} item={item} onClick={onClickProductHandler} />);

  return (
    <Wrapper>
      { showModal && <Modal onClose={onClickProductHandler} /> }
      <div className={styles.products}>{products}</div>
    </Wrapper>
  )
};

export default Products;
