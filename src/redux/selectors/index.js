import {get} from 'lodash'

export const isSearchLoading = state => get(state, 'search.isLoading')
export const movieResults = (state) => state.search.movieResults;
export const movieResult = (state) => state.search.movieResult;
 