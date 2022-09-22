import styles from './ChooseTheme.module.css';
import { useTheme, THEME_LIGHT, THEME_DARK } from '../../../context/ThemeProvider';

import PropTypes from 'prop-types'

const ChooseTheme = props => {
  const isTheme = useTheme();  

  return (
    <div className={styles.container}>
        <button className={styles.button} onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
        <button className={styles.button} onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
    </div>
  )
}

ChooseTheme.propTypes = {}

export default ChooseTheme