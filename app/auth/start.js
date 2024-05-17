import {
    Text,
    StyleSheet,
    View,
    StatusBar,
    Pressable,
    TextInput,
} from "react-native";
import { AtSymbolIcon, PhoneIcon, UserCircleIcon } from 'react-native-heroicons/outline'
import Logo from "../../components/Logo";
import { Link, useRouter } from "expo-router";

export default function StartScreen() {

    const router = useRouter()

    function goToLogin() {
        router.push('/auth/signin')
    }
    return (
        <View style={{ ...startStyles.container }}>
            <StatusBar statusBarStyle='light-content' />
            <View style={startStyles.form}>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <Logo on={"white"} />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontWeight: "800", fontSize: 20, fontFamily: "DM_Sans" }}>Welcome  </Text>
                    <Text style={{ color: "#84838B", fontFamily: "DM_Sans" }}> Please fill in this information</Text>
                </View>

                <View style={startStyles.textInputStyles}>
                    <Text style={{ fontWeight: "600" }}> Full name </Text>
                    <View style={startStyles.inputView}>
                        <UserCircleIcon color={'#84838B'} size={20} />
                        <TextInput style={{ paddingVertical: 10, cursorColor: "black" }}
                            placeholder="John Doe"
                            keyboardType="email-address"
                        />
                    </View>
                </View>
                <View style={startStyles.textInputStyles}>
                    <Text style={{ fontWeight: "600" }}> Phone number </Text>
                    <View style={startStyles.inputView}>
                        <PhoneIcon color={'#84838B'} size={20} />
                        <TextInput style={{ paddingVertical: 10, cursorColor: "black" }}
                            placeholder="ten digits"
                            keyboardType="email-address"
                        />
                    </View>
                </View>
                <View style={startStyles.textInputStyles}>
                    <Text style={{ fontWeight: "600" }}>  Email address </Text>
                    <View style={startStyles.inputView}>
                        <AtSymbolIcon color={'#84838B'} size={20} />
                        <TextInput style={{ paddingVertical: 10, cursorColor: "black" }}
                            placeholder="johndoe@example.com"
                            keyboardType="email-address"
                        />
                    </View>
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.text}>Proceed</Text>
                </Pressable>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{
                        textAlign: "center", color: "#84838B", fontWeight: "800",
                    }}>OR</Text>
                    <Text style={{ color: "#84838B", textAlign: "center" }}> Do you have an account? </Text>
                </View>

                <Pressable style={styles.button} onPress={goToLogin}>
                    <Text style={styles.text}>Sign in</Text>
                </Pressable>
            </View>

        </View>
    );
}

const startStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        display: "flex",
        backgroundColor: "orange",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    form: {
        width: "100%",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    inputView: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 12,
        backgroundColor: "#e1e2ed30",
        border: 3,
        borderColor: "#1d1c24",
        // paddingVertical: 10,
    },
    textInputStyles: {
        fontFamily: "DM_Sans",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        paddingVertical: 10,
    }
});

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        shadowColor: 'transparent',
        shadow: "none",
        elevation: 3,
        backgroundColor: 'orange',
    },
    text: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
