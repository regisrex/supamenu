import { ShoppingBagIcon } from "react-native-heroicons/outline"
import { useCtx } from "../hooks/useCtx"
import { ShoppingBagIcon as ShoppingBagSolid } from 'react-native-heroicons/solid'
export default function CartButton({ currentRoute }) {
    const { cart } = useCtx()
    return (
        <>
            {
                cart.length == 0 ?
                    <ShoppingBagIcon size={20} color={currentRoute == 4 ? "white" : "orange"} />
                    :
                    <ShoppingBagSolid size={20} color={currentRoute == 4 ? "white" : "orange"} />
            }
        </>
    )
}