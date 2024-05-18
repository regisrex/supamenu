import { Image, Text, View } from "react-native";
import Rating from '../../../components/rating'
import { Link } from "expo-router";

export default function PopularRestaurant({ restaurant }) {


    return (
        <Link href={`/p/restaurants/${restaurant.id}`}>

            <View style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                borderRadius: 14,
                marginVertical: 4,
                marginRight: 10,
                backgroundColor: "#fff",

            }}>
                <Image style={{
                    width: "100%",
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
                        padding: 14,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6
                    }
                }>

                    <Text style={{ fontSize: 16, color: "#000" }}>
                        {restaurant.name}
                    </Text>
                    <Text numberOfLines={1} style={{ fontSize: 16, color: "#84838B" }}>
                        {restaurant.location}
                    </Text>
                    <Rating count={restaurant.rating} />
                </View >
            </View>
        </Link>

    )
}