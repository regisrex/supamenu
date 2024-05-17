import { Slot, usePathname, useRouter } from "expo-router"
import { useState } from "react"
import { View, SafeAreaView, StyleSheet, Touchable, Text, FlatList, Pressable, ScrollView } from "react-native"
import { HomeIcon, HashtagIcon, PlusCircleIcon, UserCircleIcon, BellAlertIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

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
                <ScrollView style={layoutStyles.container}>
                    <Slot />
                </ScrollView>
            </SafeAreaView>
            <View style={layoutStyles.bottomNavigation}>
                {
                    routes.map((route, i) => (
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
        paddingTop: 40,
        padding: 10,
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