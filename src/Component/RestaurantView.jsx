import React from 'react'
import RestaurantDishes from './RestaurantDishes'

const RestaurantView = ({id, name, city,cloudinaryImageId,dishes}) => {
  return (
    <>
    <div>
      <div>RestaurantName: {name}</div>
      <img alt="no" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}></img>
      </div>
      <div>RestaurantId: {id}</div>
      <div>RestaurantCity: {city}</div>
      <RestaurantDishes dishes={dishes}/>
    </>
  )
}

export default RestaurantView
