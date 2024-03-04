import React from "react";
import {
    AssetCardBody,
    AssetCardContainer,
    AssetCardHeader, AssetCardProp,
    AssetName,
    AssetPropDescription,
    AssetValue
} from "../screens/statement.styles";
import {AssetIcon} from "./assetIcon";

export const AssetCard = ({asset, goToCardDetail}) => {

    const formatValue = (assetValue) => {
        const finalValue = parseFloat(assetValue).toFixed(2).toString().replace('.', ',');
        return `R$ ${finalValue}`;
    }

    const formatAppreciation = (assetValue) => {
        return `${assetValue*100}%`;
    }

    return (
        <AssetCardContainer onPress={() => goToCardDetail(asset)}>
            <AssetCardHeader>
                <AssetName>{asset.name}</AssetName>
                <AssetIcon asset={asset} />
            </AssetCardHeader>
            <AssetCardBody>
                <AssetCardProp>
                    <AssetPropDescription>Preço hoje</AssetPropDescription>
                    <AssetValue>{formatValue(asset.value)}</AssetValue>
                </AssetCardProp>
                <AssetCardProp>
                    <AssetPropDescription>Total investido</AssetPropDescription>
                    <AssetValue>{formatValue(asset.totalInvested)}</AssetValue>
                </AssetCardProp>
                <AssetCardProp>
                    <AssetPropDescription>Dividendos acumulados</AssetPropDescription>
                    <AssetValue>{formatValue(asset.accumulatedDividends)}</AssetValue>
                </AssetCardProp>
                <AssetCardProp>
                    <AssetPropDescription>Valorização</AssetPropDescription>
                    <AssetValue>{formatAppreciation(asset.appreciation)}</AssetValue>
                </AssetCardProp>
            </AssetCardBody>
        </AssetCardContainer>
    )
}
