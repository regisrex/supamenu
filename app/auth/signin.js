import {
    Text,
    StyleSheet,
    View,
    StatusBar,
    Pressable,
    TextInput,
} from "react-native";
import { AtSymbolIcon, LockClosedIcon } from 'react-native-heroicons/outline'
import Logo from "../../components/Logo";
import { Link } from "expo-router";

export default function StartScreen() {
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
                    <Text style={{ fontWeight: "600" }}>  Email address </Text>
                    <View style={startStyles.inputView}>
                        <AtSymbolIcon color={'#84838B'} size={20} />
                        <TextInput style={{ paddingVertical: 10, cursorColor: "black" }}
                            placeholder="Your email address"
                            keyboardType="email-address"
                        />
                    </View>
                </View>
                <View style={startStyles.textInputStyles}>
                    <Text style={{ fontWeight: "600" }}> Password </Text>
                    <View style={startStyles.inputView}>
                        <LockClosedIcon color={'#84838B'} size={20} />
                        <TextInput style={{ paddingVertical: 10, cursorColor: "black" }}
                            placeholder="Your password"
                            keyboardType="password"
                        />
                    </View>
                </View>

                <Pressable style={styles.button}>
                    <Text style={styles.text}>Proceed</Text>
                </Pressable>
                <View style={{ paddingVertical: 20 }}>

                    <Text style={{ color: "#84838B", textAlign: "center" }}> You don't  have an acoount ? </Text>
                </View>

                <Pressable style={styles.buttonWiithoutBackground}>
                    <Text style={{ ...styles.text, ...styles.textOrange }}>Get started</Text>
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
        shadow: "none",
        backgroundColor: 'orange',
    },
    text: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    buttonWiithoutBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        shadow: "none",
        borderWidth: 1,
        borderStyle: "solid",
        borderBlockColor: 'orange',
        borderLeftColor: "orange",
        borderRightColor: "orange",
        color: "orange"
    },
    textOrange: {
        color: "orange"
    }
});
