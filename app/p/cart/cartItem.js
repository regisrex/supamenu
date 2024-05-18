import { View, Text, Image, Pressable } from "react-native";
import { useCtx } from "../../../hooks/useCtx";
import { MinusIcon, PlusIcon, TrashIcon } from "react-native-heroicons/outline";
import { useEffect, useState } from "react";
import { pad } from "../../../utils";
export default function CartItem({ itemId }) {
    const { cart, setCart } = useCtx()
    const [item, setItem] = useState(null)
    useEffect(() => {
        setItem(cart.find(item => item.id == itemId))
    }, [cart])

    const increment = () => {
        setCart(
            cart.map(itm => {
                if (item.id == itm.id) {
                    itm.count += 1
                }
                return itm;
            })
        )

    }
    const decrement = () => {
        if (item.count <= 1) return
        setCart(
            cart.map(itm => {
                if (item.id == itm.id) {
                    itm.count -= 1
                }
                return itm;
            })
        )
    }

    console.log(item);
    return (
        <View>
            {item && <View style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                marginVertical: 4,

            }}>
                <Image style={{
                    width: 60,
                    backgroundColor: "#F7B32F15",
                    borderRadius: 14,
                    overflow: "hidden",
                    height: 60
                }} source={{
                    uri: item.photo
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
                        {item.name}
                    </Text>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Text style={{ fontSize: 16, color: "orange" }}>
                            {item.price * item.count} $
                        </Text>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: 'row-reverse',
                                alignItems: "center",
                                gap: 10
                            }}
                        >
                            <Pressable
                                onPress={increment}
                                style={{

                                    padding: 4,
                                    borderRadius: 30
                                }}
                            >
                                <PlusIcon color={'orange'} size={18} />
                            </Pressable>
                            <Text numberOfLines={2} style={{
                                fontSize: 16, color: "#84838B",
                            }}>
                                {pad(item.count)}
                            </Text>
                            <Pressable
                                onPress={decrement}
                                style={{

                                    padding: 4,
                                    borderRadius: 30
                                }}
                            >
                                <MinusIcon color={'orange'} size={18} />
                            </Pressable>
                        </View>
                        <Pressable
                            onPress={decrement}
                            style={{
                                padding: 6,
                                backgroundColor: '#F3E3E1',
                                borderRadius: 6
                            }}
                        >
                            <TrashIcon color={'#FF7C6B'} size={18} />
                        </Pressable>
                    </View>
                </View>
            </View >}
        </View>
    )
}