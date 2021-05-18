/** Styles **/
import styles from './Card.module.scss';

const Card = props => {
  const borderColor = props.borderColor ? props.borderColor : 'lighten';
  const type2 = props.type ? styles[`card--type-2`] : '';

  return <div className={ `${ styles.card } ${ styles[`card--${borderColor}`] } ${type2}` }>{ props.children }</div>
};

export default Card;
