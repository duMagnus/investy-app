import {View, Text} from "react-native";
import {BackgroundView} from "../../../infrastructure/navigation/index.styles";
import {AssetCardDetailContainer, AssetCardDetailHeader, AssetCardHeader, AssetName} from "./statement.styles";
import {AssetIcon} from "../components/assetIcon";
import React from "react";
import {AssetLineChart} from "../components/assetLineChart";

export const AssetCardDetail = ({ route }) => {
    const { asset } = route.params;
    return (
        <BackgroundView>
            <AssetCardDetailContainer>
                <AssetCardHeader>
                    <AssetName>{asset.name}</AssetName>
                    <AssetIcon asset={asset} color="#6B9080" />
                </AssetCardHeader>
                <AssetLineChart/>
            </AssetCardDetailContainer>
        </BackgroundView>
    )
}