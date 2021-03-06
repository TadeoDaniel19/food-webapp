import React from 'react'
import FoodForm from '../../components/foodForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddFoodFormContainer = () => {
  const history = useHistory();
  const handleSubmit = (data) => {
    axios.post('https://resource-food-api.herokuapp.com/food', {
      name: data.name,
      picture: data.picture,
      description: data.description,
    });
    history.push(`/search`)
  }
  return (
    <div>
      <FoodForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddFoodFormContainer;
