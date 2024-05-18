import { Image, Pressable, Text, View } from "react-native";
import { MinusIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import { useCtx } from "../../../hooks/useCtx";
import { useEffect, useState } from "react";
import { pad } from "../../../utils";


export default function MenuItem({ menuItem }) {
    const { cart, setCart } = useCtx()
    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        const isAdded = cart.some(item => item.id === menuItem.id)
        setInCart(isAdded)
    }, [cart, menuItem])

    const toggleAddRemoveFromCart = () => {
        if (inCart) setCart(cart.filter(item => item.id != menuItem.id))
        else setCart([...cart, { ...menuItem, count: 1 }])
    }
    return (
        <View style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            marginVertical: 4,

        }}>
            <Image style={{
                width: 100,
                backgroundColor: "#F7B32F15",
                borderRadius: 14,
                overflow: "hidden",
                height: 100
            }} source={{
                uri: menuItem.photo
            }} />
            <View style={
                {
                    flex: 1,
                    overflow: "hidden",
                    padding: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6
                }
            }>

                <Text style={{ fontSize: 16, color: "#000", fontWeight: "500" }}>
                    {menuItem.name}
                </Text>
                <Text numberOfLines={2} style={{
                    fontSize: 16, color: "#84838B",
                }}>
                    {menuItem.description}
                </Text>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={{
                        display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center"
                }}>
                    <Text style={{ fontSize: 16, color: "#000" }}>
                        {pad(menuItem.preparationMinutes)} mins
                    </Text>
                    <Text style={{ fontSize: 16, color: "orange" }}>
                        {menuItem.price} $
                    </Text>
                    </View>
                    <Pressable onPress={toggleAddRemoveFromCart}
                        style={{
                        borderWidth: 1,
                        borderColor: "orange",
                        padding: 4,
                        borderRadius: 30
                        }}
                    >
                        {inCart ? <MinusIcon size={18} color={"orange"} /> : <ShoppingCartIcon color={"orange"} size={18} />}
                    </Pressable>
                </View>
            </View >
        </View >
    )
}