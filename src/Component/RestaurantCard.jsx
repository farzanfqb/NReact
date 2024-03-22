import {useNavigate } from "react-router-dom";

export const RestaurantCard = ({ id, name, cuisines, cloudinaryImageId, avgRatingString }) => {
  const navigate = useNavigate();
  // console.log("id is",id);
  return (

  <div className="card" onClick={()=>navigate(`/restaurant/${id}`) }>
      <img alt="no" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4 style={{fontSize:"small", textWrap:"wrap"}}>{cuisines.join(', ')}</h4>
      <h5>{avgRatingString}+stars</h5>
  </div>)

// export default function RestaurantCard

  }
