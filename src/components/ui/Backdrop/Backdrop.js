/** Styles **/
import styles from './Backdrop.module.scss';

const Backdrop = props => <div className={styles.backdrop} onClick={props.onClose} />;

export default Backdrop;
