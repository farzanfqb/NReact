import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const {user ,setUser} = useContext(UserContext);
  return (
    <div className='footer'>
      <p>Created by: {user.name}</p>
      <p><a href="https://github.com/farzanfqb" target="_blank"> Github</a>
      <input aria-label="Change userContext using setUser" value={user.name} onChange={e=> setUser({...user,name:e.target.value  })} />
      <input aria-label="Change userContext using setUser" value={user.email} onChange={e=> setUser({...user, email: e.target.value+"@gmail.com"  })} />

      {/* // <input aria-label="Change userContext using setUser" value={user.name} onChange={e=> setUser((_prev)=>{...prev,name:e.target.value})} */}
      </p>
      <div><p>{user.name}</p>
      <p>{user.email}</p></div>
      
    </div>
  )
}

export default Footer;
