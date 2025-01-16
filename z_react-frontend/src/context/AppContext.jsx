import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export default function AppProvider({children}){
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState()

    async function getUser() {
        const res = await fetch('/api/user', {
            headers:{
                Authorization : `Bearer ${token}`,
            },
        });

        const data = await res.json();
        if(res.ok){
            setUser(data);
        }
        
    }

    useEffect(() => {

        if(token) {
            getUser();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return(
        <AppContext.Provider value={{token, setToken, user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}