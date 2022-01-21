/** React core **/
import { useContext } from 'react';

/** Components **/
import Card from '../../ui/Card/Card';
import ProgressBar from '../../ui/ProgressBar/ProgressBar';

/** Contexts **/
import ProjectContext from '../../../store/ProjectContext';

/** Styles **/
import styles from './Amounts.module.scss';

const Amounts = () => {
  const projectCtx = useContext(ProjectContext);
  const maxPledge = `${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(projectCtx.maxPledge)}`;
  const totalPledge = `${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(projectCtx.totalPledge)}`;
  const totalBackers = projectCtx.totalBackers.toLocaleString();
  const daysLeft = projectCtx.daysLeft;
  const totalMoneyPercentage = (projectCtx.totalPledge * 100) / projectCtx.maxPledge;

  return (
    <div className={styles.amounts}>
      <Card>
        <div className={styles.amounts__container}>
          <div className={styles.amounts__item}>
            <h2 className={styles['amounts__item-title']}>{totalPledge}</h2>
            <span className={styles['amounts__item-text']}>of {maxPledge} backed</span>
          </div>
          <div className={styles.amounts__item}>
            <h2 className={styles['amounts__item-title']}>{totalBackers}</h2>
            <span className={styles['amounts__item-text']}>total backers</span>
          </div>
          <div className={styles.amounts__item}>
            <h2 className={styles['amounts__item-title']}>{daysLeft}</h2>
            <span className={styles['amounts__item-text']}>days left</span>
          </div>
        </div>
        <ProgressBar value={totalMoneyPercentage} className={styles.amounts__percentage} />
      </Card>
    </div>
  );
};

export default Amounts;
