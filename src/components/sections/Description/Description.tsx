/** React core **/
import { useState } from 'react';

/** Components **/
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';
import Modal from '../../ui/Modal/Modal';
import Wrapper from '../../helpers/Wrapper/Wrapper';
import Pledge from '../../Pledge/Pledge';

/** Styles **/
import styles from './Description.module.scss';

const PRODUCTS = [
  {
    title: 'Pledge with no reward',
    price: 0,
    description:
      'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
    quantity: 0,
  },
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
      'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
    quantity: 0,
  },
];

const Description = () => {
  const [showModal, setShowModal] = useState(false);

  const clickDescriptionHandler = () => {
    setShowModal(prevState => !prevState);
  };

  const pledges = PRODUCTS.map((pledge, index) => (
    <Pledge onContinue={clickDescriptionHandler} key={index} id={`${index}`} product={pledge} />
  ));

  const modal = (
    <Modal onClose={clickDescriptionHandler}>
      <div className={styles.description__modal}>
        <div className={styles['description__modal-header']}>
          <h2 className={styles['description__modal-title']}>Back this project</h2>
          <img
            onClick={clickDescriptionHandler}
            className={styles['description__modal-close']}
            src={`${process.env.PUBLIC_URL}/images/icon-close-modal.svg`}
            alt="close modal"
          />
        </div>
        <p className={styles['description__modal-description']}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </p>
        <div className={styles['description__modal-content']}>{pledges}</div>
      </div>
    </Modal>
  );

  return (
    <Wrapper>
      {showModal && modal}
      <div className={styles.description}>
        <Card>
          <img
            className={styles.description__logo}
            src={`${process.env.PUBLIC_URL}/images/logo-mastercraft.svg`}
            alt="logo mastercraft"
          />
          <h1 className={styles.description__title}>Mastercraft Bamboo Monitor Riser</h1>
          <p className={styles.description__content}>
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </p>
          <div className={styles.description__footer}>
            <Button onClick={clickDescriptionHandler}>Back this project</Button>
            <div className={styles.description__bookmark}>
              <img
                className={styles['description__bookmark-img']}
                src={`${process.env.PUBLIC_URL}/images/icon-bookmark.svg`}
                alt="bookmark"
              />
              <div className={styles['description__bookmark-text']}>Bookmark</div>
            </div>
          </div>
        </Card>
      </div>
    </Wrapper>
  );
};

export default Description;
