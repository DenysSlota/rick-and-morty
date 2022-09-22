import styles from './SearchPageInfo.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const SearchPageInfo = ({ character }) => {
  return (
    <>
        {character.length
            ? (
                <ul className={styles.list__container}>
                    {character.map(({ name, id, image }) => 
                        <li className={styles.list__item} key={id}>
                            <Link to={`/character/${id}`}>
                                <img className={styles.photo} src={image} alt={name} />
                                <p className={styles.name}>{name}</p>
                            </Link>
                        </li>
                    )}
                </ul>
            )
            : <h2 className={styles.comment}>No results</h2>
        }
    </>
  )
}

SearchPageInfo.propTypes = {
    character: PropTypes.array,
}

export default SearchPageInfo;