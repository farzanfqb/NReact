import { IMG_CDN_URL } from "../constants";
import {useDispatch} from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const FoodItems = ({id,name,description, cloudinaryImageId, price}) =>{
  const dispatch = useDispatch();

  const handleAddItem = (item,id) => {
    dispatch(addItem(item,id));
  };
  const handleRemoveCart = (id) => {
    dispatch(removeItem(id));
  };


  return(
    <div>
      <img src={IMG_CDN_URL+cloudinaryImageId} alt={"Food Item"}/>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price/83}$</p>
      <button onClick={() => handleAddItem(name,id)} > Add + </button>
      <button onClick={() => handleRemoveCart(id)} > Remove </button>
    </div>
  )
}
export default FoodItems;
