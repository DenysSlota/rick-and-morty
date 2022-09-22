import PropTypes from 'prop-types';
import styles from './PersonEpisodes.module.css';
import { makeConcurrentRequest } from '../../../utils/network';
import { useEffect, useState } from 'react';

const PersonEpisodes = ({ personEpisodes }) => {
  const [episodesName, setEpisodesName] = useState([]);

  useEffect(() => {
    (async () => {
        const response = await makeConcurrentRequest(personEpisodes);
        setEpisodesName(response);
    })();
  }, []);  

  return (
    <div className={styles.wrapper}>
        <ul className={styles.list__container}>
            {episodesName.map(({name, id}) => 
                <li className={styles.list__item} key={id}>
                    <span>Episode {id}</span>
                    <span> : </span>
                    <span>{name}</span>
                </li>
            )}
        </ul>
    </div>
  )
}

PersonEpisodes.propTypes = {
    personEpisodes: PropTypes.array
}

export default PersonEpisodes;