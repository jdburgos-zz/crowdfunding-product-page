/** React core **/
import { useState } from 'react';

/** Styles **/
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  const [showMainMenu, setShowMainMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMainMenu(prevState => !prevState);
  };

  const menu = (
    <nav className={ styles['main-menu__nav'] }>
      <ul className={ styles['main-menu__items'] }>
        <li className={ styles['main-menu__item'] }>About</li>
        <li className={ styles['main-menu__item'] }>Discover</li>
        <li className={ styles['main-menu__item'] }>Get Started</li>
      </ul>
    </nav>
  );

  const menuDesktop = (
    <nav className={ styles['main-menu-desktop__nav'] }>
      <ul className={ styles['main-menu-desktop__items'] }>
        <li className={ styles['main-menu-desktop__item'] }>About</li>
        <li className={ styles['main-menu-desktop__item'] }>Discover</li>
        <li className={ styles['main-menu-desktop__item'] }>Get Started</li>
      </ul>
    </nav>
  );

  return (
    <div className={ styles['main-menu'] }>
      <img className={ styles['main-menu__icon'] }
           src={ `${ process.env.PUBLIC_URL }/images/icon-hamburger.svg` }
           alt="menu icon"
           onClick={toggleMenuHandler} />
      {showMainMenu && menu}
      {menuDesktop}
    </div>
  );
};

export default MainMenu;
