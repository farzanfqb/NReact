import React from 'react'
import RestaurantDishes from './RestaurantDishes'
import { IMG_CDN_URL } from "../constants"

const RestaurantView = ({id, name, city,cloudinaryImageId,dishes}) => {
  return (
    <>
    <div>
      <div>RestaurantName: {name}</div>
      <img alt="no" src={IMG_CDN_URL + cloudinaryImageId}></img>
      </div>
      <div>RestaurantId: {id}</div>
      <div>RestaurantCity: {city}</div>
      <RestaurantDishes dishes={dishes}/>
    </>
  )
}

export default RestaurantView
