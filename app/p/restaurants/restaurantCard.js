import { Image, Text, View } from "react-native";
import Rating from '../../../components/rating'
import { Link } from "expo-router";

export default function RestaurantCard({ restaurant }) {
    return (
        <Link href={`/p/restaurants/${restaurant.id}`}>

            <View style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginVertical: 4,
                // backgroundColor: "#fff",

            }}>
                <Image style={{
                    width: 100,
                    backgroundColor: "#F7B32F15",
                    borderRadius: 14,
                    overflow: "hidden",
                    height: 100
                }} source={{
                    uri: restaurant.image
                }} />
                <View style={
                    {
                        width: "100%",
                        padding: 10,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6
                    }
                }>

                    <Text style={{ fontSize: 16, color: "#000" }}>
                        {restaurant.name}
                    </Text>
                    <Text style={{ fontSize: 16, color: "#84838B" }}>
                        {restaurant.location}
                    </Text>
                    <Rating count={restaurant.rating} />
                </View >
            </View>
        </Link>
    )
}