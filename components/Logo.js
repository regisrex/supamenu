import { Image, Text, View } from "react-native"
export default function Logo({ on }) {
    return (
        <View style={{ display: "flex", flexDirection: "row", gap: 20, alignItems: "center" }}>
            <Image style={{
                width: 40,
                borderRadius: 20,
                fontFamily: "DM_Sans",
                height: 40
            }} source={{
                uri: "https://static.vecteezy.com/system/resources/previews/017/722/096/original/cooking-cuisine-cookery-logo-restaurant-menu-cafe-diner-label-logo-design-illustration-free-vector.jpg"
            }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Super<Text style={{ color: on == "orange" ? '#fff' : "orange" }}>Menu</Text></Text>
        </View>
    )
}