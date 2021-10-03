import { SEARCH_MOVIE_START, SEARCH_MOVIE_BY_ID_START, RESET_MOVIES } from '../../consts/actionTypes'

export const searchMovie = payload => ({
	type: SEARCH_MOVIE_START,
	payload
})

export const searchMovieById = payload => ({
  type: SEARCH_MOVIE_BY_ID_START,
  payload
})

export const resetMovie = payload => ({
  type: RESET_MOVIES,
  payload: null
})