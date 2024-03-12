import React from "react";
import {FlatList} from "react-native";
import { BackgroundView } from "../../../infrastructure/navigation/index.styles";
import {AssetCard} from "../components/assetCard";
import {AssetsHeader} from "../components/assetsHeader";
import {AssetsBar} from "../components/assetsBar";

const assets = [
    {
        name: 'PETR4',
        type: 'Ação',
        value: 25.50,
        totalInvested: 10000,
        accumulatedDividends: 500,
        appreciation: 0.10,
        firstPurchaseDate: '2023-01-01'
    },
    {
        name: 'FIIB11',
        type: 'FII',
        value: 115.80,
        totalInvested: 20000,
        accumulatedDividends: 1000,
        appreciation: -0.05,
        firstPurchaseDate: '2023-02-15'
    },
    {
        name: 'ITUB4',
        type: 'Ação',
        value: 32.80,
        totalInvested: 15000,
        accumulatedDividends: 700,
        appreciation: 0.08,
        firstPurchaseDate: '2023-03-10'
    },
    {
        name: 'VRTA11',
        type: 'FII',
        value: 120.30,
        totalInvested: 18000,
        accumulatedDividends: 900,
        appreciation: 0.15,
        firstPurchaseDate: '2023-04-20'
    },
    {
        name: 'BBDC4',
        type: 'Ação',
        value: 28.90,
        totalInvested: 12000,
        accumulatedDividends: 600,
        appreciation: 0.03,
        firstPurchaseDate: '2023-05-05'
    },
    {
        name: 'HGLG11',
        type: 'FII',
        value: 150.00,
        totalInvested: 25000,
        accumulatedDividends: 1200,
        appreciation: 0.20,
        firstPurchaseDate: '2023-06-15'
    },
    {
        name: 'VALE3',
        type: 'Ação',
        value: 72.40,
        totalInvested: 30000,
        accumulatedDividends: 1500,
        appreciation: 0.25,
        firstPurchaseDate: '2023-07-30'
    },
    {
        name: 'ABEV3',
        type: 'Ação',
        value: 18.70,
        totalInvested: 8000,
        accumulatedDividends: 400,
        appreciation: -0.02,
        firstPurchaseDate: '2023-08-10'
    },
    {
        name: 'XPML11',
        type: 'FII',
        value: 98.20,
        totalInvested: 22000,
        accumulatedDividends: 1100,
        appreciation: 0.12,
        firstPurchaseDate: '2023-09-25'
    }
];

export const StatementScreen = ({ navigation }) => {

    const navigateToAddAssetScreen = () => {
        navigation.navigate('AddAssetScreen');
    }

    const navigateToFilterScreen = () => {
        navigation.navigate('FilterScreen');
    }

    const navigateToCardDetail = (asset) => {
        navigation.navigate('AssetCardDetail', {asset: asset});
    }

    return (
        <BackgroundView>
            <AssetsHeader goToFilterScreen={navigateToFilterScreen} goToAddAssetScreen={navigateToAddAssetScreen}/>
            <AssetsBar assets={assets}/>
            <FlatList
                data={assets}
                renderItem={({item}) => {
                    return (
                        <AssetCard asset={item} goToCardDetail={navigateToCardDetail} />
                    );
                }}/>
        </BackgroundView>
    )
}