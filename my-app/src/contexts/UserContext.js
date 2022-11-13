import { createContext, useState } from "react";
export const UserContext = createContext();



export default function UserContextProvider(props){
const [userName,setUserName]=useState("Bobby")

    return (
        <UserContext.Provider value={{userName,setUserName}}>
            {props.children}
        </UserContext.Provider>
    )



}






