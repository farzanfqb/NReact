import React, { useEffect } from 'react'

const Profile = () => {
  useEffect(() => {
    console.log("useEffect");
    return () => { console.log("useEffectReturn"); }
  }, [])
  console.log("profile Render");
  return (
    <div>Profile</div>
  )
}

export default Profile
