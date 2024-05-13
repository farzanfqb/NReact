import React from 'react'

const useRestaurant = (resId, resName, resAddress) => {
  const [restaurant, setRestaurant] = React.useState(null);

  async function getRestaurantInfo () {
    const data = await fetch(`{https://instafood.onrender.com/api/restaurants/${resName}-${resAddress}-${resId}}`);
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
