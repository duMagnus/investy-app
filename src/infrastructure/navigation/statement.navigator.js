import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import {StatementScreen} from "../../features/statement/screens/statement.screen";
import {FilterScreen} from "../../features/statement/screens/filter.screen";
import {AssetCardDetail} from "../../features/statement/screens/assetCardDetail.screen";

const StatementStack = createStackNavigator();

export const StatementNavigator = () => {
    return (
        <StatementStack.Navigator
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
                headerShown: false,
            }}
        >
            <StatementStack.Screen name="StatementScreen" component={StatementScreen} />
            <StatementStack.Screen name="FilterScreen" component={FilterScreen} />
            <StatementStack.Screen name="AssetCardDetail" component={AssetCardDetail} />
        </StatementStack.Navigator>
    );
};