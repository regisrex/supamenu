import { Slot } from "expo-router"
import { View } from "react-native"
import { useFonts } from 'expo-font'

export default function BaseLayout() {
    const [fontsLoaded] = useFonts({
        'DM_Sans': require('../assets/DMSans-VariableFont.ttf'),
    });
    console.log(fontsLoaded)
    return (
        <View style={{ flex: 1, height: "100%", backgroundColor: 'aliceblue', fontFamily: "DM_Sans" }}>
            <Slot />
        </View>
    )
}