import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../context/GlobalState";
 
const Profile = () => {
    
  const [ state, dispatch ] = useGlobalState();
  const router = useRouter();
  
  useEffect(() => {
    const userToken = state.currentUserToken;
    if (userToken == null) {
        router.push("/login");
    }
  }, []);
 
  // Once the user request finishes, show the user
  return (
    <div>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(state.currentUser, null, 2)}</pre>
    </div>
  )
}
 
export default Profile