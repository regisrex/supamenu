import { View } from "react-native"
import { StarIcon as StarIconOutline } from "react-native-heroicons/outline"
import { StarIcon as StarIconSolid } from "react-native-heroicons/solid"

export default function Rating({ count }) {
    const solid = count;
    const outline = 5 - count;
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }}>
            {
                new Array(solid).fill("").map((_, i) => <StarIconSolid key={i} color="orange" size={16} />)
            }
            {
                new Array(outline).fill("").map((_, i) => <StarIconOutline key={i}
                    color="orange" size={16} />)
            }

        </View>
    )
}