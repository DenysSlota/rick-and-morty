import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';
// import PersonEpisodes from '../../components/PersonPage/PersonEpisodes/';
import { getApiResource } from '../../utils/network';
import { API_PERSON } from '../../constans/api';
import styles from './PersonPage.module.css';


const PersonEpisodes = React.lazy(() => import('../../components/PersonPage/PersonEpisodes/'))

const PersonPage = ({ setErrorApi }) => {
    const id = useParams().id;
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personImage, setPersonImage] = useState();
    const [personEpisodes, setPersonEpisodes] = useState(null);
    const [personId, setPersonId] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);
    const storeDate = useSelector(state => state.favoriteReducer);

    useEffect(() => {        
        (async () => {

            const res = await getApiResource(`${API_PERSON}/${id}`);

            storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false);
            
            setPersonId(id);

            if (res) {
                setPersonInfo([
                    {title: 'status', data: res.status},
                    {title: 'species', data: res.species},
                    {title: 'gender', data: res.gender},
                    {title: 'location', data: res.location.name},
                    {title: 'origin', data: res.origin.name},
                    {title: 'created', data: res.created}
                ]);

                setPersonName(res.name);
                setPersonImage(res.image);

                res.episode.length && setPersonEpisodes(res.episode);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();

    }, []);
        

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personImage={personImage} 
                        personName={personName} 
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personEpisodes && (
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <PersonEpisodes personEpisodes={personEpisodes} />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);