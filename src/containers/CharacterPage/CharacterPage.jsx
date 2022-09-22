import PropTypes from 'react';

import { useEffect, useState } from 'react';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import {getApiResource} from '../../utils/network';
import { getCharacterPageId } from '../../services/getCharacterData';
import { API_CHARACTER } from '../../constans/api';
import CharacterList from '../../components/CharacterPage/CharacterList';
import CharacterNavigation from '../../components/CharacterPage/CharacterNavigation';
import { useQueryParams } from '../../hooks/useQueryParams';

import styles from './CharacterPage.module.css'

const CharacterPage = ({ setErrorApi }) => {
    const [character, setCharacter] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);
    
    const query = useQueryParams();
    const queryPage = query.get('page');
    console.log(queryPage);

    const getResourse = async (url) => {
        const res = await getApiResource(url);
        console.log(res);
        if (res) {
            const characterList = res.results.map(({ name, id, image }) => {
                return {
                    name: name,
                    id: id,
                    image: image
                }
            })
            setCharacter(characterList);
            setPrevPage(res.prev);
            setNextPage(res.next);
            setCounterPage(getCharacterPageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }
    useEffect(() => {
        getResourse(API_CHARACTER+queryPage);
    }, [queryPage]);
  
    return (
        <>            
            <CharacterNavigation 
                getResourse={getResourse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {character && <CharacterList character={character} />}             
        </>
    )
}

CharacterPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(CharacterPage);