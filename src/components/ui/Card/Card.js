/** Styles **/
import styles from './Card.module.scss';

const Card = props => {
  const borderColor = props.borderColor ? props.borderColor : 'lighten';

  return <div className={ `${ styles.card } ${ styles[`card--${borderColor}`] }` }>{ props.children }</div>
};

export default Card;
