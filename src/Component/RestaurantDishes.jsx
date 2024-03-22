import React from 'react'

const RestaurantDishes = ({dishes}) => {  
  console.log(dishes);
  return (
    <> 
    {dishes?.map((e)=>(
      <div className='dish-card' key={e._id}>
        <h1>Dish Name: {e.name}</h1>
        <h2>Dish Category: {e.category}</h2>
        <h3>Description: {e.description}</h3>
        <h3>Price: {e.price}$</h3>
        <h4>Avg Rating: {e.ratings.aggregatedRating.rating}</h4>
      </div>
    ))}
    </>

  )
}

export default RestaurantDishes
