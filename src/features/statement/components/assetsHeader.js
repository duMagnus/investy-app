import {TouchableOpacity, View} from "react-native";
import {AssetsHeaderActions, AssetsHeaderContainer, AssetsHeaderTitle} from "../screens/statement.styles";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export const AssetsHeader = ({ goToFilterScreen }) => {

    return (
        <AssetsHeaderContainer>
            <AssetsHeaderTitle>MEUS ATIVOS</AssetsHeaderTitle>
            <AssetsHeaderActions>
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