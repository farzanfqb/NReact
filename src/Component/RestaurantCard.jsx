export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRatingString }) => (

  <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4 style={{fontSize:"small", textWrap:"wrap"}}>{cuisines.join(', ')}</h4>
      <h5>{avgRatingString}+stars</h5>
  </div>

)
