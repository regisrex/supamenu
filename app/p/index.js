import { FlatList, Image, Text, View } from "react-native"
import { Link } from "expo-router"
import { ChevronRightIcon, ShoppingBagIcon } from "react-native-heroicons/outline"
import { dummyData } from "../../utils/data"
import CartButton from "../../components/cartButton"
import RestaurantCard from "./restaurants/restaurantCard"
import HomeCart from "../../components/homeCart"

export default function Home() {
    return ( 
        <View style={{
            display: "flex",
            flexDirection: "column",
            gap: 20
        }}>

            <View style={
                {
                    padding: 20,
                    borderRadius: 20,
                    backgroundColor: '#F7B32F10',
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                }
            }>
                <Text style={{ fontWeight: "600", fontSize: 22 }}>
                    👋 {new Date().getHours() < 12 ? "Good morning" : new Date().getHours() < 18 ? "Good afternoon" : "Good evening"}, user !
                </Text>
                <Text style={{ fontSize: 16, color: "#84838B" }}>
                    What would you like to order today?
                </Text>
                <Link href={'/p/restaurants'} >
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "orange" }}>New dishes</Text>
                        <ChevronRightIcon color={"orange"} size={18} />
                    </View>
                </Link>
            </View >
            <View  >
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 20 }}>
                        Your favs
                    </Text>
                    <Link href={'/p/restaurants'} >
                        <View style={{ display: "flex", flexDirection: 'row', alignItems: "center" }}>
                            <Text style={{ fontSize: 16, color: "orange" }}>All restaurants</Text>
                            <ChevronRightIcon color={"orange"} size={18} />
                        </View>
                    </Link>
                </View>
                {
                    dummyData.restaurants.slice(0, 2).map((restaurant, i) => (
                        <RestaurantCard restaurant={restaurant} key={i} />
                    ))
                }
                <HomeCart />
            </View>
        </View>

    )
}