import React, { useEffect } from 'react'
import FoodForm from '../../components/foodForm';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { searchMovieById } from '../../redux/actions/search'
import { movieResult as MovieResultSelector } from '../../redux/selectors'

const EditFood = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const foodResult = useSelector(state => MovieResultSelector(state));
  
  useEffect(() => {
    dispatch(searchMovieById({ id }))
  }, [id, dispatch])

  const handleSubmit = (data) => {
    axios.put(`https://resource-food-api.herokuapp.com/food/${id}`, {
      name: data.name,
      picture: data.picture,
      description: data.description,
    });
    history.push(`/search`)
  }
  return (
    <div>
      <FoodForm onSubmit={handleSubmit} updateData={foodResult} />
    </div>
  )
}

export default EditFood;
