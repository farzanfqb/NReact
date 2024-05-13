import { IMG_CDN_URL } from "../constants";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";

const FoodItems = ({id,name,description, cloudinaryImageId, price}) =>{
  const dispatch = useDispatch();

  const handleAddItem = (item,id) => {
    dispatch(addItem(item,id));
  };


  return(
    <div>
      <img src={IMG_CDN_URL+cloudinaryImageId} alt={"Food Item"}/>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price/100}$</p>
      <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(name,id)}
              >
                Add +
              </button>
    </div>
  )
}
export default FoodItems;
