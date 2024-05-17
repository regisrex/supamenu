import { Link, Slot, usePathname, useRouter } from "expo-router"
import { useState } from "react"
import { View, SafeAreaView, StyleSheet, Touchable, Text, FlatList, Pressable, ScrollView, Platform } from "react-native"
import { HomeIcon, ShoppingBagIcon, PlusCircleIcon, UserCircleIcon, BellAlertIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'



const routes = [
    {
        id: 1,
        title: 'Home',
        icon: <HomeIcon />,
        href: '/p'
    },
    {
        id: 2,
        title: 'Search',
        href: '/p/search',
        icon: <MagnifyingGlassIcon />
    },
    {
        id: 3,
        title: 'Notifications',
        href: '/p/notifications',
        icon: <BellAlertIcon />
    },
    {
        id: 4,
        title: 'Cart',
        href: '/p/cart',
        icon: <ShoppingBagIcon />
    },
    {
        id: 5,
        title: 'Profile',
        href: '/p/profile',
        icon: <UserCircleIcon />
    }
]
export default function BaseLayout() {
    const pathname = usePathname()
    const router = useRouter()

    const [currentRoute, setCurrentRoute] = useState(1)

    const handleRoutePush = (route) => {
        router.push(route.href)
        setCurrentRoute(route.id)
    }
    return (
        <>
            <SafeAreaView style={layoutStyles.layout}>
                <ScrollView style={{ ...layoutStyles.container, paddingTop: getPaddingTop(Platform.OS) }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 24, fontWeight: "800" }}>
                            {routes.find(route => route.id == currentRoute).title}
                        </Text>
                        <Pressable onPress={() => handleRoutePush(routes.find(r => r.id == 4))} style={{ backgroundColor: currentRoute == 4 ? "orange" : "transparent", padding: 10, borderRadius: 20 }}>
                            <ShoppingBagIcon size={30} color={currentRoute == 4 ? "white" : "orange"} />
                        </Pressable>
                    </View>
                    <Slot />
                </ScrollView>
            </SafeAreaView>
            <View style={layoutStyles.bottomNavigation}>
                {
                    routes.filter(r => r.href != '/p/cart').map((route, i) => (
                        <Pressable onPress={() => handleRoutePush(route)} key={i} style={{ backgroundColor: currentRoute == route.id ? "orange" : "transparent", padding: 10, borderRadius: 20 }}>
                            <route.icon.type  {...route.icon.props} size={30} color={currentRoute == route.id ? "white" : "#414048"} />
                        </Pressable>
                    ))
                }
            </View>
        </>
    )
}



const layoutStyles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "aliceblue",
        paddingBottom: 30,
        paddingTop: 20,
        paddingHorizontal: 20
    }
})


const getPaddingTop = (platform) => {
    switch (platform) {
        case "android":
            return 40;
            break;
        default:
            return 10;
    }
}