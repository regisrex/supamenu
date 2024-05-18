import { View, Text } from "react-native";
import CartButton from "./cartButton";
import { useCtx } from "../hooks/useCtx";

export default function HomeCart() {
    const { totalAmt, cart, nItems } = useCtx()
    return (
        <View style={{
            borderWidth: 2,
            borderBlockColor: "#F7B32F15",
            borderLeftColor: "#F7B32F15",
            borderRightColor: "#F7B32F15",
            backgroundColor: "#F7B32F10",
            padding: 20,
            marginVertical: 20,
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <CartButton />
            <View style={{ width: 100, borderWidth: 1, marginVertical: 12, borderColor: "orange", borderRadius: 20 }} />
            <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 6 }}>
                Your cart
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 16, color: "#84838B" }}>
                {nItems} items -  {totalAmt} $
            </Text>
        </View>
    )
}