import React from 'react'
import {useParams} from 'react-router-dom'
import RestaurantView from './RestaurantView';
import useRestaurant from '../utils/useRestaurant';
import { Shimmer } from './Shimmer';

const RestaurantMenu = () => {
  const {id} = useParams();
  console.log(id);
  const restaurant = useRestaurant(id);
  
  return !restaurant ?(
    <Shimmer /> ):(
    <div>
    <RestaurantView {...restaurant}/>
    </div>
  )
}

export default RestaurantMenu
