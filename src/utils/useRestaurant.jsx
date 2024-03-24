import React from 'react'

const useRestaurant = (resId) => {
  console.log("resid",resId);
  const [restaurant, setRestaurant] = React.useState(null);

  async function getRestaurantInfo () {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json();

    const dishes = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel?.map((e)=>  e.dish.info);
    setRestaurant(prevState => ({
      ...prevState,
      ...json.data.cards[0].card.card.info,
      dishes: dishes
    }));
  }

  React.useEffect(() => {
    getRestaurantInfo();
  }, []);

  return  restaurant ;
}

export default useRestaurant;
