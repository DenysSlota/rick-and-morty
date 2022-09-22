import ChooseTheme from '../../components/HomePage/ChooseTheme/ChooseTheme';
import planet from './planet.jpg';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className='header__text'>HomePage</h1>
      <ChooseTheme />
      <img className={styles.image} src={planet} alt="image" />
    </div>
  )
}

export default HomePage