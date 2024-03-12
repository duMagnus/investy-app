import {TouchableOpacity, View} from "react-native";
import {AssetsHeaderActions, AssetsHeaderContainer, ScreenTitle,} from "../screens/statement.styles";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const AssetsHeader = ({ goToFilterScreen, goToAddAssetScreen }) => {

    return (
        <AssetsHeaderContainer>
            <ScreenTitle>MEUS ATIVOS</ScreenTitle>
            <AssetsHeaderActions>
                <TouchableOpacity onPress={() => {goToAddAssetScreen()}}>
                    <Ionicons name="add" size={26} color="#6B9080"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {goToFilterScreen()}}>
                    <Ionicons name="filter" size={26} color="#6B9080"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="search" size={26} color="#6B9080"/>
                </TouchableOpacity>
            </AssetsHeaderActions>
        </AssetsHeaderContainer>
    )
}