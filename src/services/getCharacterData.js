import {SWAPI_PARAM_PAGE} from '../constans/api';

export const getCharacterPageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length);
    return Number(id);
}
