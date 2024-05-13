import React,{useEffect,useState} from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantCard } from "./RestaurantCard";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);
  const online = useOnline()

  async function getRestaurants() {
      const data = await fetch("https://instafood.onrender.com/api/restaurants?lat=19.07480&lng=72.88560");
      const json = await data.json();
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(() => {
      getRestaurants()
  }, [])


  if(!listOfRestaurants) return null;
  if (!online){
    return <div className="offline"> Connection Error </div>
  }

  return (
      filteredrestaurant.length === 0 ? 
      <>
      <Shimmer />
      <input label="Search" type="text" className="search-input" placeholder="Search" value={searchText}
       onChange={(e) => { setSearchText(e.target.value); const filteredRestaurants = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())); setFilteredRestaurant(filteredRestaurants); } } />
      </>
          : <>
              <input label="Search" type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => { setSearchText(e.target.value); const filteredRestaurants = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase())); setFilteredRestaurant(filteredRestaurants); }} />
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
