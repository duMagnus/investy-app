import { StatusBar } from 'react-native';
import { Navigation } from "./src/infrastructure/navigation";
import { useFonts } from "expo-font";
import {AccountScreen} from "./src/features/account/screens/account.screen";
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect} from "react";
import {
    AuthenticationContext,
    AuthenticationContextProvider
} from "./src/services/authentication/authentication.context";

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [fontsLoaded, fontError] = useFonts({
        "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
        "Montserrat-ExtraLight": require("./assets/fonts/Montserrat-ExtraLight.ttf"),
        "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
        "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <>
            <StatusBar style="auto" />
            {/*<AccountScreen/>*/}
            <AuthenticationContextProvider>
                <Navigation />
            </AuthenticationContextProvider>
        </>
    );
}
