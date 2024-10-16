import { createContext, useContext } from "react";

const defaultUser = {
    name:"",
    pass:"",
    rol:""
}
export const UserContext = createContext(defaultUser);

export const useUserContext = ()=>{
    return useContext(UserContext);
}