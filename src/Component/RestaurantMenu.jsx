import React from 'react'
import {useParams} from 'react-router-dom'
import RestaurantView from './RestaurantView';
import useRestaurant from '../utils/useRestaurant';
import { Shimmer } from './Shimmer';

const RestaurantMenu = () => {
  const {id, name, add} = useParams();
  console.log(id);
  const restaurant = useRestaurant(id,name,add);
  
  return !restaurant ?(
    <Shimmer /> ):(
    <div>
    <RestaurantView {...restaurant.info}/>
    </div>
  )
}

export default RestaurantMenu
