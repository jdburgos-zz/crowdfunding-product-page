/** React core **/
import { useContext, useRef, useState } from 'react';

/** Components **/
import Card from '../ui/Card/Card';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import Wrapper from '../helpers/Wrapper/Wrapper';
import Modal from '../ui/Modal/Modal';

/** Styles **/
import styles from './Pledge.module.scss';
import ProjectContext from '../../store/ProjectContext';

const Pledge = props => {
  const projectCtx = useContext(ProjectContext);
  const priceRef = useRef();
  const [showContinueModal, setShowContinueModal] = useState(false);
  const [error, setError] = useState(false);
  const { id, product } = props;
  const showPrice = !!product.price;
  const showFooter = showPrice && !!product.quantity;
  const disabledClass = !!!product.quantity && (product.quantity !== null) ? styles['disabled'] : '';
  const isDisableInput = !!!product.quantity;

  const changePriceHandler = () => {
    const priceValue = priceRef.current.value;

    setError(priceValue < product.price);
  };

  const continueHandler = () => {
    showContinueModalHandler();
    projectCtx.incrementTotalPledge(+priceRef.current.value);
    projectCtx.incrementTotalBackers(1);
  };

  const showContinueModalHandler = () => {
    setShowContinueModal(prevState => !prevState);
  };

  const modal = (
    <Modal onClose={ showContinueModalHandler }>
      <div className={ styles['continue__modal'] }>
        <img src={ `${ process.env.PUBLIC_URL }/images/icon-check.svg` } alt="icon check" />
        <h2 className={ styles['continue__modal-title'] }>Thanks for your support!</h2>
        <p
          className={ styles['continue__modal-description'] }>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <Button onClick={ showContinueModalHandler }>Got it!</Button>
      </div>
    </Modal>
  );

  const footer = (
    <Wrapper>
      { showContinueModal && modal }
      <div className={ styles['pledge__footer'] }>
        <span className={ styles['pledge__footer-text'] }>Enter your pledge</span>
        <div className={ styles['pledge__footer-content'] }>
          <div className={ styles['pledge__footer-input'] }>
            <span className={ styles['pledge__footer-input-icon'] }>$</span>
            <Input
              ref={ priceRef }
              className={ styles['pledge__footer-input-control'] }
              input={ {
                id: 'amount_' + id,
                type: 'number',
                min: product.price,
                defaultValue: product.price
              } }
              error={ error }
              onChange={ changePriceHandler }
            />
          </div>
          <Button disable={ error } onClick={ continueHandler }
                  className={ styles['pledge__footer-btn'] }>Continue</Button>
        </div>
      </div>
    </Wrapper>
  );

  const description = <div className={ styles['pledge__description'] }>Pledge ${ product.price } or more</div>;

  return (
    <label htmlFor={ id } className={ `${ styles['pledge'] } ${ disabledClass }` }>
      <Card borderColor="light">
        <div className={ styles['pledge__header'] }>
          <input id={ id } name="product" className={ styles['pledge__radio'] } type="radio" disabled={isDisableInput} />
          <h3 className={ styles['pledge__title'] }>{ product.title }</h3>
        </div>
        { showPrice && description }
        <p className={ styles['pledge__content'] }>{ product.description }</p>
        <div className={ styles['pledge__quantity'] }><span
          className={ styles['pledge__quantity-number'] }>{ product.quantity }</span> left
        </div>
        { showFooter && footer }
      </Card>
    </label>
  );
};

export default Pledge;
