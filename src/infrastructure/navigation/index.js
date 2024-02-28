import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../features/home/screens/home.screen";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {SettingsScreen} from "../../features/settings/screens/settings.screen";
import {StatementScreen} from "../../features/statement/screens/statement.screen";
import {InvestScreen} from "../../features/invest/screens/invest.screen";
import {IdeasScreen} from "../../features/ideas/screens/ideas.screen";

const TAB_ICON = {
    Home: ["home", "home-outline"],
    Statement: ["analytics", "analytics-outline"],
    Invest: ["add-circle", "add-circle-outline"],
    Ideas: ["bulb", "bulb-outline"],
    Settings: ["settings", "settings-outline"],
};

const createScreenOptions = ({ route }) => {
    return {
        tabBarIcon: ({ color, focused }) => {
            const iconName = TAB_ICON[route.name][focused ? 0 : 1];
            return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarStyle: styles.bottomTab,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#778DA9",
    };
};

const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Statement" component={StatementScreen}/>
                <Tab.Screen name="Invest" component={InvestScreen}/>
                <Tab.Screen name="Ideas" component={IdeasScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    bottomTab: {
        position: "absolute",
        bottom: 0,
        height: 60,
        backgroundColor: "#a1b2c3",
        borderTopWidth: 0,
    },
});