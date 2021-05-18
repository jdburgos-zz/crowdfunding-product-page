/** Components **/
import Card from '../Card/Card';

/** Styles **/
import styles from './Overlay.module.scss';

const Overlay = props => {
  return (
    <div className={styles.overlay}>
      <Card>{props.children}</Card>
    </div>
  );
};

export default Overlay;
