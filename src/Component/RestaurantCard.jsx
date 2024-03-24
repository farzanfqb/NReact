import {useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

export const RestaurantCard = ({ id, name, cuisines, cloudinaryImageId, avgRatingString }) => {
  const navigate = useNavigate();
  // console.log("id is",id);
  return (

  <div className="card" onClick={()=>navigate(`/restaurant/${id}`) }>
      <img alt="no" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4 style={{fontSize:"small", textWrap:"wrap"}}>{cuisines.join(', ')}</h4>
      <h5>{avgRatingString}+stars</h5>
  </div>)

// export default function RestaurantCard

  }
