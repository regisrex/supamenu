import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    cart: [],
    setCart: () => { }
})

export const CtxProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return (
        <AppContext.Provider value={{ cart, setCart }}>
            {children}
        </AppContext.Provider>
    )
}


export const useCtx = () => useContext(AppContext)