/** Styles **/
import styles from './ProgressBar.module.scss';

const ProgressBar = props => {
  const percentage = `${ props.value }%`;
  return (
    <div className={ `${ styles['progress-bar'] } ${ props.className }` }>
      <div className={ `${ styles['progress-bar__control'] }` } style={ { width: percentage } }/>
    </div>
  );
};

export default ProgressBar;
