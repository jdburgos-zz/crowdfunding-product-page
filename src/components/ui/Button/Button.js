/** Styles **/
import styles from './Button.module.scss';

const Button = props => {
  const disableClass = props.disable ? styles[`button--disable`] : '';

  return <button disabled={!!disableClass} className={ `${ styles.button } ${ disableClass }` }>{ props.children }</button>
};

export default Button;
