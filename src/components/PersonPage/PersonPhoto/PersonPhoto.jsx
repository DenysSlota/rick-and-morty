import styles from './PersonPhoto.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '../../../store/actions';
import iconFavorite from './img/favorite.png';
import iconFavoriteFill from './img/favorite-fill.png';

const PersonPhoto = ({ personImage, personName, personId, personFavorite, setPersonFavorite }) => {
    const dispatch = useDispatch();
    
    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personImage
                },
            }));
            setPersonFavorite(true); 
        }
    } 

    return (
        <>
            <div className={styles.container}>
                <img className={styles.person__photo} src={personImage} alt={personName} />
                <img 
                    src={personFavorite ? iconFavoriteFill : iconFavorite}
                    onClick={dispatchFavoritePeople}
                    className={styles.favorite} 
                    alt="Add to favorite" 
                />      
            </div>
                              
        </>
    )
}

PersonPhoto.propTypes = {
    personImage: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
}

export default PersonPhoto;