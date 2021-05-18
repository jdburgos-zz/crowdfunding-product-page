/** Components **/
import Card from '../../ui/Card/Card';
import Products from '../../Products/Products';

/** Styles **/
import styles from './About.module.scss';

const About = () => (
  <div className={styles.about}>
    <Card>
      <h2 className={styles['about__title']}>About this project</h2>
      <div className={styles['about__description']}>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
          to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      </div>
      <Products />
    </Card>
  </div>
);

export default About;
