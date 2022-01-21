/** Components **/
import MainMenu from '../MainMenu/MainMenu';

/** Styles **/
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <picture className={styles.header__img}>
      <source
        media="(min-width: 576px)"
        srcSet={`${process.env.PUBLIC_URL}/images/image-hero-desktop.jpg`}
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/image-hero-mobile.jpg`}
        alt="crowdfunding product page"
      />
    </picture>
    <img
      className={styles.header__logo}
      src={`${process.env.PUBLIC_URL}/images/logo.svg`}
      alt="crowdfunding product page - logo"
    />
    <MainMenu />
  </header>
);

export default Header;
