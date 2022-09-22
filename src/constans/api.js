const SWAPI_ROOT = 'https://rickandmortyapi.com/api/';
const SWAPI_CHARACTER = 'character';
export const SWAPI_PARAM_PAGE = '/?page=';
export const SWAPI_PARAM_SEARCH = '/?name=';

export const API_CHARACTER = SWAPI_ROOT+SWAPI_CHARACTER+SWAPI_PARAM_PAGE;
export const API_PERSON = SWAPI_ROOT+SWAPI_CHARACTER;
export const API_SEARCH = SWAPI_ROOT+SWAPI_CHARACTER+SWAPI_PARAM_SEARCH;