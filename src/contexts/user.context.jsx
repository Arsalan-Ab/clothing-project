import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firbase/firbase";


export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=> null
})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user)=> {
            setCurrentUser(user)
            if(!user) return
            createUserDocumentFromAuth(user)
            
        })
        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

