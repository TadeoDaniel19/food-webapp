import React, { useEffect, useState } from 'react'
import { Container, CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'
import { searchMovie, resetMovie } from '../../redux/actions/search'
import { movieResults, isSearchLoading } from '../../redux/selectors'
import MovieResult from '../MovieResult'

export default ({ location }) => {
  const dispatch = useDispatch()
  const movies = useSelector(state => movieResults(state))
  const isLoading = useSelector(state => isSearchLoading(state))
  const [isLooked, setIsLooked] = useState(false)

  useEffect(() => {
    const { movieName } = queryString.parse(location.search)
    dispatch(resetMovie())
    if (movieName && !isLooked) {
      setIsLooked(true)
      dispatch(searchMovie({ movieName }))
    }
  },[dispatch, isLooked, location.search])

  const renderMovies = () => {
    if (movies) {
      return movies.map((valueMovie, index) => <MovieResult key={index} {...valueMovie} />)
    } else if (isLoading) {
      return <CircularProgress size={100} color='primary' />
    }

    return <div />
  }
  
  return (
    <Container>
      {renderMovies()}
    </Container>
  )
}