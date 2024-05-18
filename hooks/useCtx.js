import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
    cart: [],
    setCart: () => { },
    totalAmt: 0.00,
    nItems: 0
})

export const CtxProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalAmt, setTotalAmt] = useState(0.00)
    const [nItems, setNItems] = useState(0)

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.count;
        })
        setTotalAmt(total)

        let totalCount = 0;
        cart.forEach(item => {
            totalCount += item.count
        })
        setNItems(totalCount)
    }, [cart])


    return (
        <AppContext.Provider value={{
            cart,
            setCart,
            totalAmt,
            nItems
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useCtx = () => useContext(AppContext)