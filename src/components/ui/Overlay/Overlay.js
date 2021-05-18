/** Components **/
import Card from '../Card/Card';

/** Styles **/
import styles from './Overlay.module.scss';

const Overlay = props => {
  return (
    <div className={styles.overlay}>
      <Card>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam asperiores aspernatur at, autem cum eum eveniet, expedita ipsum iusto, magni modi officiis perferendis perspiciatis ratione recusandae velit voluptate?</p>
      </Card>
    </div>
  );
};

export default Overlay;
