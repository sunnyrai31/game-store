export const REACT_APP_MOVIE_STORE_API_URL = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres'
export const REACT_APP_MOVIE_STORE_X_RAPIDAPI_KEY = '83a2eff4b5mshf33bc9dcda00050p19ae28jsn0aa12da257ef'
export const REACT_APP_MOVIE_STORE_X_RAPIDAPI_HOST = 'moviesdatabase.p.rapidapi.com'
export const REACT_APP_MOVIE_STORE_BASE_URL = 'https://moviesdatabase.p.rapidapi.com'
export const ENDPOINTS = {
    "fetchGenres": {
        method: 'GET',
        url: '/titles/utils/genres',
    },
    "fetchTitle": {
        method: 'GET',
        url: 'titles'
    }
}
export const COMMON_HEADERS = {
    'X-RapidAPI-Key': REACT_APP_MOVIE_STORE_X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': REACT_APP_MOVIE_STORE_X_RAPIDAPI_HOST
}
