import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CharacterList from '../../components/CharacterPage/CharacterList';
import styles from './FavoritesPage.module.css';


const FavoritesPage = () => {
    const [character, setCharacter] = useState([]);
    const storeDate = useSelector(state => state.favoriteReducer);
    
    useEffect(() => {
        const arr = Object.entries(storeDate);

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    name: item[1].name,
                    image: item[1].img,
                }
            })
            setCharacter(res);
        }

    }, []);

    return (
        <>
            <h1 className='header__text'>FavoritesPage</h1>
            {character.length
                ? <CharacterList character={character} />
                : <h2 className={styles.comment}>No data</h2>
            }
            
        </>
    )
}

export default FavoritesPage;