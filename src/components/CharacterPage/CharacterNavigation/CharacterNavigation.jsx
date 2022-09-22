import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CharacterNavigation.module.css';

const CharacterNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

  return (
    <div className={styles.container}>
        <Link to={`/character/?page=${counterPage-1}`} className={styles.link}>
            <button onClick={handleChangePrev} disabled={counterPage < 2} className={styles.buttons}>Previous</button>
        </Link>
        <Link to={`/character/?page=${counterPage+1}`} className={styles.link}>
            <button onClick={handleChangeNext} disabled={counterPage > 4} className={styles.buttons}>Next</button>
        </Link>
    </div>
  )
}

CharacterNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number    
}

export default CharacterNavigation