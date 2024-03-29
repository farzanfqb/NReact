import React from 'react'
import { DISH_URL } from '../constants';

const RestaurantDishes = ({dishes}) => {  
  return (
    <> 
    {dishes?.map((e)=>(
      <div className='dish-card' key={e._id}>
        <img style={{height:"105px", width: "105px"}}alt="dishimg" src={DISH_URL+e.imageId} />      
        <h1>Dish Name: {e.name}</h1>
        <h2>Dish Category: {e.category}</h2>
        <h3>Description: {e.description}</h3>
        <h3>Price: {e.price}$</h3>
      </div>
    ))}
    </>

  )
}

export default RestaurantDishes
