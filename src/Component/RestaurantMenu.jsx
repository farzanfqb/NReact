import React from 'react'
import {useParams} from 'react-router-dom'
import RestaurantView from './RestaurantView';

const RestaurantMenu = () => {
  const [restaurantDetails, setrestaurantDetails] = React.useState({});
  const {id} = useParams();
  
  // async function getRestaurantInfo () {
  //   let response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
  //   const json = await response.json();
  //   const dishes = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((e)=>  e.card.info);

  //   setrestaurantDetails(prevState => ({
  //     ...prevState,
  //     ...json.data.cards[0].card.card.info,
  //     dishes: dishes
  //   }));
  // }

  // React.useEffect(() => {
  //   getRestaurantInfo();
  // }, []);
  
  const getRestaurantInfo = React.useCallback(async () => {
    let response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    const dishes = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((e) => e.card.info);
  
    setrestaurantDetails((prevState) => ({
      ...prevState,
      ...json.data.cards[0].card.card.info,
      dishes: dishes,
    }));
  }, [id]); // Add 'id' as a dependency if it changes
  
  React.useEffect(() => {
    getRestaurantInfo();
  }, [getRestaurantInfo]);
  return (
    <div>
    <RestaurantView {...restaurantDetails}/>
    </div>
  )
}

export default RestaurantMenu
