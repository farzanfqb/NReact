import React,{useEffect,useState} from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantCard } from "./RestaurantCard";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);

  async function getRestaurants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(() => {
      getRestaurants()
  }, [])

  return (
      filteredrestaurant.length === 0 ? <Shimmer />
          : <>
              <input label="Search" type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => { setSearchText(e.target.value); const filteredRestaurants = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())); console.log(filteredRestaurants); setFilteredRestaurant(filteredRestaurants); }} />
              <button onClick={() => {
                  const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurant(filteredRestaurants);
              }}>Search</button >
              < div className="body" >
                  {filteredrestaurant.map(restaurant => (<RestaurantCard {...restaurant.info} key={restaurant.info.id} />))}
              </ div>
          </>
  );
}

export  default Body;
