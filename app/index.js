import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Logo from '../components/Logo';
export default function App() {
    const router = useRouter()

    const redirect = () => {
        setTimeout(() => {
            router.push('/auth/start')
        }, 1000)
    }
    useEffect(() => {
        redirect()
    }, [])
    return (
        <View style={styles.container}>
            <Logo on={'orange'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
