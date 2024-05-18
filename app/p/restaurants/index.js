import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native"
import { Link } from "expo-router"
import { ChevronRightIcon, MagnifyingGlassIcon, PhoneIcon, ShoppingBagIcon } from "react-native-heroicons/outline"
import { dummyData } from "../../../utils/data"
import { ScrollView } from "react-native"
import PopularRestaurant from "./popularRestaurant"
import RestaurantCard from "./restaurantCard"

export default function Restaurants() {
    return (
        <View style={{
            display: "flex",
            flexDirection: "column",
            gap: 20
        }}>

            <View style={
                {
                    padding: 20,
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    flexDirection: "column",
                    gap: 10
                }
            }>
                <Text style={{ fontWeight: "600", fontSize: 22 }}>
                    Restaurants
                </Text>
                <Text style={{ fontSize: 16, color: "#84838B" }}>
                    Where would like to feast from?
                </Text>
                <View style={styles.inputView}>
                    <TextInput style={{
                        paddingVertical: 20, width: "100%", cursorColor: "black"
                    }}
                        placeholder="Try 'Amikus coffee'"
                        keyboardType="email-address"
                    />
                    <MagnifyingGlassIcon color={'#84838B'} size={20} />

                </View>

            </View >
            <View  >
                <View style={{ display: "flex", flexDirection: "row", flex: 1, justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 20 }}>
                        Top places
                    </Text>

                </View>
                <ScrollView horizontal style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10
                }}>
                    {
                        dummyData.restaurants.slice(0, 2).map((restaurant, i) => (
                            <PopularRestaurant restaurant={restaurant} key={i} />
                        ))
                    }
                </ScrollView>
            </View>
            <View  >
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontWeight: "600", fontSize: 18, marginVertical: 20 }}>
                        All restaurants
                    </Text>

                </View>
                {
                    dummyData.restaurants.map((restaurant, i) => (
                        <RestaurantCard restaurant={restaurant} key={i} />
                    ))
                }
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    inputView: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        borderWidth: 2,
        borderBlockColor: "#F7B32F30",
        borderLeftColor: "#F7B32F30",
        borderRightColor: "#F7B32F30",
        backgroundColor: "#F7B32F10",
        alignItems: "center",
        paddingHorizontal: 40,
        borderRadius: 12,
        // backgroundColor: "#e1e2ed30",
        border: 3,
        borderColor: "#1d1c24",
        // paddingVertical: 10,
    }
})