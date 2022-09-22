import { NavLink } from 'react-router-dom';
import { useTheme, THEME_LIGHT, THEME_DARK } from '../../context/ThemeProvider';
import Favorite from '../Favorite';
import imgLight from './img/light.png';
import imgDark from './img/dark.png';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [icon, setIcon] = useState(imgDark);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(imgLight); break;
      case THEME_DARK: setIcon(imgDark); break;
      default: setIcon(imgDark);      
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
        <img className={styles.logo} src={icon} alt="logo" />
        <ul className={styles.list__container}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/character?page=1">Character</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>            
        </ul>
        <Favorite />       
    </div>
  )
}

export default Header