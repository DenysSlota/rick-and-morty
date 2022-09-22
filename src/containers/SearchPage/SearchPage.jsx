import styles from './SearchPage.module.css';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import { API_SEARCH } from '../../constans/api';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';

const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [character, setCharacter] = useState([]);

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH+param);

        if (res) {            
            const characterList = res.results.map(({ name, id, image }) => {
                return {
                    name: name,
                    id: id,
                    image: image
                }
            });
            setCharacter(characterList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

    }

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = (e) => {
        const value = e.target.value

        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    return (
        <>
            <h1 className="header__text">Search</h1>
            <input 
                type="text" 
                value={inputSearchValue}
                onChange={handleInputChange}
                placeholder="input character's name"
                className={styles.input}
            />
            <SearchPageInfo character={character} />
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);