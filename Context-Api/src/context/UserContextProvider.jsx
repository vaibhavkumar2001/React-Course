import React from "react";
import UserContext from "./UserContext";



const UserContextProvider = ({children}) => {

    const [ user,setUser ] = React.useState(null)
    //isme hm children pass krenge jisse hme apne app k ander kahi bhi use kr ske
    //children props react ka ek special prop hota h jo hme ->
    // component k ander jo bhi content pass krte h wo deta h
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;