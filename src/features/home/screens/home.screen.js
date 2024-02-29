import React from "react";
import { Dimensions, View, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const investmentData = [
    { date: '2019-11', totalInvested: 0, growthInvested: 0 },
    { date: '2019-12', totalInvested: 1400, growthInvested: 1540 },
    { date: '2020-01', totalInvested: 7400, growthInvested: 8140 },
    { date: '2020-02', totalInvested: 8088, growthInvested: 8896 },
    { date: '2020-03', totalInvested: 8776, growthInvested: 9653 },
    { date: '2020-04', totalInvested: 9526, growthInvested: 10478 },
    { date: '2020-05', totalInvested: 10314, growthInvested: 11345 },
    { date: '2020-06', totalInvested: 11102, growthInvested: 12212 },
    { date: '2020-07', totalInvested: 11990, growthInvested: 13079 },
    { date: '2020-08', totalInvested: 12678, growthInvested: 13946 },
    { date: '2020-09', totalInvested: 13428, growthInvested: 14770 },
    { date: '2020-10', totalInvested: 14228, growthInvested: 15651 },
    { date: '2020-11', totalInvested: 15138, growthInvested: 16651 },
    { date: '2020-12', totalInvested: 16038, growthInvested: 17651 },
    { date: '2021-01', totalInvested: 16576, growthInvested: 18234 },
    { date: '2021-02', totalInvested: 17476, growthInvested: 19224 },
    { date: '2021-03', totalInvested: 18344, growthInvested: 25178 },
    { date: '2021-04', totalInvested: 19244, growthInvested: 25168 },
    { date: '2021-05', totalInvested: 20112, growthInvested: 32123 },
    { date: '2021-06', totalInvested: 21000, growthInvested: 33000 },
    { date: '2021-07', totalInvested: 21788, growthInvested: 33967 },
    { date: '2021-08', totalInvested: 22538, growthInvested: 34792 },
    { date: '2021-09', totalInvested: 23338, growthInvested: 45673 },
    { date: '2021-10', totalInvested: 24138, growthInvested: 46673 },
    { date: '2021-11', totalInvested: 25048, growthInvested: 47673 },
    { date: '2021-12', totalInvested: 25948, growthInvested: 48673 },
    { date: '2022-01', totalInvested: 26686, growthInvested: 79355 },
    { date: '2022-02', totalInvested: 27586, growthInvested: 70355 },
    { date: '2022-03', totalInvested: 28454, growthInvested: 71309 },
    { date: '2022-04', totalInvested: 29354, growthInvested: 74309 },
    { date: '2022-05', totalInvested: 30222, growthInvested: 83264 },
    { date: '2022-06', totalInvested: 31110, growthInvested: 84141 },
    { date: '2022-07', totalInvested: 31998, growthInvested: 85008 },
    { date: '2022-08', totalInvested: 32686, growthInvested: 87833 },
    { date: '2022-09', totalInvested: 33486, growthInvested: 86714 },
    { date: '2022-10', totalInvested: 34286, growthInvested: 87714 },
    { date: '2022-11', totalInvested: 35196, growthInvested: 88714 },
    { date: '2022-12', totalInvested: 36096, growthInvested: 89714 },
    { date: '2023-01', totalInvested: 36634, growthInvested: 90397 },
    { date: '2023-02', totalInvested: 37534, growthInvested: 91397 },
    { date: '2023-03', totalInvested: 38302, growthInvested: 94351 },
    { date: '2023-04', totalInvested: 39202, growthInvested: 96351 },
    { date: '2023-05', totalInvested: 40070, growthInvested: 99305 },
    { date: '2023-06', totalInvested: 40958, growthInvested: 90182 },
    { date: '2023-07', totalInvested: 41846, growthInvested: 91049 },
    { date: '2023-08', totalInvested: 42534, growthInvested: 91874 },
    { date: '2023-09', totalInvested: 43334, growthInvested: 122755 },
    { date: '2023-10', totalInvested: 44134, growthInvested: 133755 },
    { date: '2023-11', totalInvested: 45044, growthInvested: 135755 },
    { date: '2023-12', totalInvested: 45944, growthInvested: 130755 },
    { date: '2024-01', totalInvested: 46482, growthInvested: 141438 },
    { date: '2024-02', totalInvested: 47382, growthInvested: 144438 }
];

export const HomeScreen = () => {

    const windowWidth = Dimensions.get('window').width;

    const lineData = investmentData.map((item) => {
        return { value: item.totalInvested };
    });
    const lineData2 = investmentData.map((item) => {
        return { value: item.growthInvested };
    });

    return (
        <View style={{backgroundColor: '#A1B2C3', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#1C1C1C', justifyContent: 'center', alignItems: 'center', width: '90%', paddingHorizontal: 20, paddingTop: 20, borderRadius: 10}}>
                <LineChart
                    data={lineData}
                    data2={lineData2}
                    endSpacing={0}
                    initialSpacing={0}
                    hideDataPoints
                    curved
                    spacing={(((windowWidth - 40) * 0.9 / lineData.length) * 0.87) }
                    areaChart
                    color1="#8a56ce"
                    color2="#56acce"
                    startFillColor1="#8a56ce"
                    startFillColor2="#56acce"
                    endFillColor1="#8a56ce"
                    endFillColor2="#56acce"
                    startOpacity={0.9}
                    endOpacity={0.2}
                    noOfSections={3}
                    yAxisColor="white"
                    yAxisThickness={0}
                    rulesType="solid"
                    rulesColor="gray"
                    yAxisTextStyle={{color: 'gray'}}
                    xAxisColor="lightgray"
                    pointerConfig={{
                        pointerStripUptoDataPoint: true,
                        pointerStripColor: 'lightgray',
                        pointerStripWidth: 2,
                        strokeDashArray: [2, 5],
                        pointerColor: 'lightgray',
                        radius: 4,
                        pointerLabelWidth: 100,
                        pointerLabelHeight: 120,
                        pointerLabelComponent: items => {
                            return (
                                <View
                                    style={{
                                        height: 120,
                                        width: 100,
                                        backgroundColor: '#282C3E',
                                        borderRadius: 4,
                                        justifyContent:'center',
                                        paddingLeft:16,
                                    }}>
                                    <Text style={{color: 'lightgray',fontSize:12}}>{2018}</Text>
                                    <Text style={{color: 'white', fontWeight:'bold'}}>{items[0].value}</Text>
                                    <Text style={{color: 'lightgray',fontSize:12,marginTop:12}}>{2019}</Text>
                                    <Text style={{color: 'white', fontWeight:'bold'}}>{items[1].value}</Text>
                                </View>
                            );
                        },
                    }}
                    maxValue={Math.max(...lineData.map((value) => value.value), ...lineData2.map((value) => value.value))}
                />
            </View>
        </View>
    );

};