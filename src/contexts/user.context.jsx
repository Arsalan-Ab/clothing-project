import { createContext, useReducer, useEffect,useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firbase/firbase";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

const UserReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'm':
            return {
                currentUser: payload
            }

    }

}

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    // const [state,dispatch] = useReducer(UserReducer,{})

    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user)
            if (!user) return
            createUserDocumentFromAuth(user)

        })
        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

