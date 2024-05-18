import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { Text, View, Image, Touchable, Pressable } from "react-native"
import { dummyData } from "../../../utils/data"
import Rating from "../../../components/rating"
import { ChevronLeftIcon, ChevronRightIcon } from "react-native-heroicons/outline"
import { useRouter } from "expo-router"
import MenuItem from "./menuItem"
export default function SingleRestaurant() {
    const router = useRouter()
    const [restaurant, setRestaurant] = useState(null)
    const { id } = useLocalSearchParams()
    useEffect(() => {
        setRestaurant(dummyData.restaurants.find(r => r.id == id))
    }, [id])

    return (
        <View>
            {restaurant ? <View style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                borderRadius: 14,
                marginVertical: 4,

            }}>

                <View style={{ display: "flex", flexDirection: 'row', alignItems: "center", marginBottom: 10, gap: 10 }}>
                    <Pressable onPress={() => router.back()} style={{
                        backgroundColor: "red",
                        backgroundColor: "#F7B32F10",
                        borderRadius: 20
                    }}>
                        <ChevronLeftIcon color={"black"} size={22} />
                    </Pressable>
                    <Text style={{ fontSize: 22, fontWeight: "700", color: "#000" }}>
                        {restaurant.name}
                    </Text>
                </View>
                <Image style={{
                    width: "100%",
                    backgroundColor: "#F7B32F15",
                    borderRadius: 14,
                    overflow: "hidden",
                    height: 200
                }} source={{
                    uri: restaurant.image
                }} />
                <View style={
                    {
                        width: "100%",
                        paddingVertical: 14,
                        paddingHorizontal: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6
                    }
                }>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#000" }}>
                        {restaurant.name}
                    </Text>

                    <Text numberOfLines={1} style={{ fontSize: 16, color: "#84838B" }}>
                        {restaurant.location}
                    </Text>
                    <Rating count={restaurant.rating} />
                    <View style={{ width: "100%", borderWidth: 1, marginVertical: 12, borderColor: "#b6b6bf30", borderRadius: 20 }} />
                    <View>
                        {
                            restaurant.menu.map((menuItem, i) => (
                                <MenuItem menuItem={menuItem} key={i} />
                            ))
                        }
                    </View>
                </View >
            </View> :
                <View>
                    <Text> Loading </Text>
                </View>
            }
        </View >
    )
}