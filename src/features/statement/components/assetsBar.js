import {View, StyleSheet} from "react-native";

export const AssetsBar = ({ assets }) => {

    const fii = assets.filter((asset) => {return asset.type.toLowerCase() === 'fii'}).length / assets.length
    const acoes = assets.filter((asset) => {return asset.type.toLowerCase() === 'ação'}).length / assets.length

    // console.log(fii);
    // console.log(acoes);
    return (
        <View style={styles.barContainer}>
            <View style={[styles.bar, styles.first, { width: `${fii*100}%`, backgroundColor: '#A4C3B2'}]} />
            <View style={[styles.bar, { width: `${acoes*100}%`, backgroundColor: '#6B9080' }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        width: '100%',
        marginBottom: 20,
        borderRadius: 5,
        overflow: "hidden",
    },
    bar: {
        height: '100%',
    },
    percentageText: {
        position: 'absolute',
        fontSize: 12,
        color: 'black',
    },
});
