import React, {useContext} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {BackgroundView} from "../../../infrastructure/navigation/index.styles";
import {Ionicons} from "@expo/vector-icons";
import {AuthenticationContext} from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {

    const { onSignOut } = useContext(AuthenticationContext);

    return (
        <BackgroundView style={{ justifyContent: 'center', alignItems: 'center', gap: 50 }}>
            <Text>E agora na página de configurações!</Text>
            <TouchableOpacity onPress={onSignOut}>
                <Ionicons name='log-out' size={100} color='#6B9080'/>
            </TouchableOpacity>
        </BackgroundView>
    )
}