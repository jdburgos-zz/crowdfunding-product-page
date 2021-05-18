/** Components **/
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';

/** Styles **/
import styles from './Description.module.scss';

const Description = () => (
  <div className={ styles.description }>
    <Card>
      <img className={ styles['description__logo'] } src={ `${ process.env.PUBLIC_URL }/images/logo-mastercraft.svg` }
           alt="logo mastercraft" />
      <h1 className={ styles['description__title'] }>Mastercraft Bamboo Monitor Riser</h1>
      <p
        className={ styles['description__content'] }>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      <div className={ styles['description__footer'] }>
        <Button>Back this project</Button>
        <div className={ styles['description__bookmark'] }>
          <img className={ styles['description__bookmark-img'] }  src={ `${ process.env.PUBLIC_URL }/images/icon-bookmark.svg` } alt="bookmark" />
          <div className={ styles['description__bookmark-text'] }>Bookmark</div>
        </div>
      </div>
    </Card>
  </div>
);

export default Description;
