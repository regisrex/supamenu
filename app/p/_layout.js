import { Link, Slot, usePathname, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { View, SafeAreaView, StyleSheet, Touchable, Text, FlatList, Pressable, ScrollView, Platform } from "react-native"
import { HomeIcon, ShoppingBagIcon, PlusCircleIcon, UserCircleIcon, BellAlertIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, BuildingStorefrontIcon } from 'react-native-heroicons/outline'
import CartButton from "../../components/cartButton"



const routes = [
    {
        id: 1,
        title: 'Home',
        icon: <HomeIcon />,
        href: '/p'
    },
    {
        id: 2,
        title: 'Restaurants',
        href: '/p/restaurants',
        icon: <BuildingStorefrontIcon />
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

    // useEffect(() => {
    //     if (pathname === '/p') setCurrentRoute(1)
    //     else setCurrentRoute(routes.find(route => pathname.startsWith(route.href)).id)
    // }, [pathname])
    return (
        <>
            <SafeAreaView style={layoutStyles.layout}>
                <ScrollView style={{ ...layoutStyles.container, paddingTop: getPaddingTop(Platform.OS) }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                        {/* <Text style={{ fontSize: 24, fontWeight: "800" }}>
                            {routes.find(route => route.id == currentRoute).title}
                        </Text> */}
                        <Pressable onPress={() => handleRoutePush(routes.find(r => r.id == 4))} style={{ backgroundColor: currentRoute == 4 ? "orange" : "transparent", padding: 10, borderRadius: 20 }}>
                            <CartButton currentRoute={currentRoute} />
                        </Pressable>
                    </View>
                    <Slot />
                </ScrollView>
            </SafeAreaView>
            <View style={layoutStyles.bottomNavigation}>
                {
                    routes.filter(r => r.href != '/p/cart').map((route, i) => (
                        <Pressable onPress={() => handleRoutePush(route)} key={i} style={{ backgroundColor: currentRoute == route.id ? "orange" : "transparent", padding: 10, borderRadius: 20 }}>
                            <route.icon.type  {...route.icon.props} size={20} color={currentRoute == route.id ? "white" : "#414048"} />
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
        padding: 20,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "aliceblue",
        paddingBottom: 30,
        paddingTop: 16,
        paddingHorizontal: 16
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