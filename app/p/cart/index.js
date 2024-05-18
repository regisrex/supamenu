import { Pressable, StyleSheet, Text, View } from "react-native"
import { useCtx } from "../../../hooks/useCtx"
import CartItem from "./cartItem";
import { ShoppingCartIcon } from "react-native-heroicons/outline";
export default function Cart() {
    const { cart, setCart, nItems } = useCtx();
    // console.log(cart)
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center", marginVertical: 16, justifyContent: "space-between" }}>
                <View style={{
                    display: "flex", flexDirection: 'column', gap: 4
                }}>
                    <Text style={{ fontWeight: "600", fontSize: 22 }}>
                        Your cart
                    </Text>
                    <Text style={{ fontSize: 16, color: "#84838B" }}>
                        Yout selected items
                    </Text>
                </View>
                <Pressable
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        borderRadius: 10,
                        shadowColor: 'transparent',
                        shadow: "none",
                        elevation: 3,
                        backgroundColor: '#E6E6E850',
                    }}
                    onPress={() => setCart([])}>
                    <Text style={{
                        lineHeight: 21,
                        letterSpacing: 0.25,
                        color: '#84838B',
                    }}>Clear</Text>
                </Pressable>
            </View>
            {nItems != 0 ? <View style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {
                    cart.map((item, i) => (
                        <CartItem itemId={item.id} key={i} />
                    ))
                }
            </View> :
                <View style={{
                    display: "flex", flexDirection: "column", alignItems: "center", padding: 40
                }}>
                    <ShoppingCartIcon size={40} color={"#84838B"} />
                    <Text style={{
                        textAlign: "center",
                        color: "#84838B"
                    }}> It's empty here !</Text>
                </View>
            }
            <Pressable style={styles.button} onPress={() => setCart([])}>
                <Text style={styles.text}>Checkout cart </Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        shadowColor: 'transparent',
        shadow: "none",
        elevation: 3,
        backgroundColor: 'orange',
    },
    text: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})