import PropTypes from 'react';
import { Link } from 'react-router-dom';

import styles from './CharacterList.module.css';

const CharacterList = ({ character }) => {
  return (
    <ul className={styles.list__container}>
        {character.map(({ name, id, image }) => 
          <li className={styles.list__item} key={id}>
            <Link to={`/character/${id}`}>
              <img className={styles.person__photo} src={image} alt={name} />
              <p>{name}</p>
            </Link>
          </li>
        )}
    </ul>
  )
}

CharacterList.propTypes ={
  character: PropTypes.array
}

export default CharacterList;