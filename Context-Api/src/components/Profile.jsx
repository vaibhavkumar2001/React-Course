import React from "react";
import UserContext from "../context/UserContext";


function Profile() {
    const { user } = React.useContext(UserContext)

    if(!user) return <h2>Please Login to see your profile</h2>
    return <div>Welcome {user?.username}</div>
}

export default Profile;