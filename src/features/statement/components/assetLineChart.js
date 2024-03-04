import {View, Text, Dimensions} from "react-native";
import {LineChart} from "react-native-gifted-charts";

const investmentData = [
        {date: "01.2016", price: 2.87},
        {date: "02.2016", price: 2.27},
        {date: "03.2016", price: 2.63},
        {date: "04.2016", price: 3.55},
        {date: "05.2016", price: 4.42},
        {date: "06.2016", price: 5.54},
        {date: "07.2016", price: 6.50},
        {date: "08.2016", price: 6.51},
        {date: "09.2016", price: 6.62},
        {date: "10.2016", price: 6.86},
        {date: "11.2016", price: 8.29},
        {date: "12.2016", price: 11.47},
        {date: "01.2017", price: 11.73},
        {date: "02.2017", price: 13.37},
        {date: "03.2017", price: 14.77},
        {date: "04.2017", price: 12.91},
        {date: "05.2017", price: 10.93},
        {date: "06.2017", price: 11.10},
        {date: "07.2017", price: 13.63},
        {date: "08.2017", price: 12.65},
        {date: "09.2017", price: 13.94},
        {date: "10.2017", price: 11.00},
        {date: "11.2017", price: 10.05},
        {date: "12.2017", price: 10.41},
        {date: "01.2018", price: 12.88},
        {date: "02.2018", price: 12.96},
        {date: "03.2018", price: 11.71},
        {date: "04.2018", price: 10.80},
        {date: "05.2018", price: 13.92},
        {date: "06.2018", price: 15.65},
        {date: "07.2018", price: 17.96},
        {date: "08.2018", price: 25.10},
        {date: "09.2018", price: 32.04},
        {date: "10.2018", price: 20.87},
        {date: "11.2018", price: 18.47},
        {date: "12.2018", price: 16.64},
        {date: "01.2019", price: 19.56},
        {date: "02.2019", price: 23.11},
        {date: "03.2019", price: 27.62},
        {date: "04.2019", price: 27.85},
        {date: "05.2019", price: 28.83},
        {date: "06.2019", price: 29.75},
        {date: "07.2019", price: 32.71},
        {date: "08.2019", price: 30.28},
        {date: "09.2019", price: 30.42},
        {date: "10.2019", price: 34.67},
        {date: "11.2019", price: 40.24},
        {date: "12.2019", price: 45.86},
        {date: "01.2020", price: 48.60},
        {date: "02.2020", price: 53.50},
        {date: "03.2020", price: 45.48},
        {date: "04.2020", price: 52.19},
        {date: "05.2020", price: 55.37},
        {date: "06.2020", price: 53.02},
        {date: "07.2020", price: 57.29},
        {date: "08.2020", price: 86.82},
        {date: "09.2020", price: 81.22},
        {date: "10.2020", price: 75.29},
        {date: "11.2020", price: 85.42},
        {date: "12.2020", price: 91.71}
    ];

export const AssetLineChart = () => {

    const windowWidth = Dimensions.get('window').width;

    const lineData = investmentData.map((item) => {
        return { value: item.price };
    });

    return(
        <View style={{ backgroundColor: '#EAF4F4', justifyContent: 'center', alignItems: 'center', width: '100%', paddingRight: 20, paddingTop: 20, borderRadius: 5}}>
            <LineChart
                data={lineData}
                endSpacing={0}
                initialSpacing={0}
                hideAxesAndRules
                hideDataPoints
                curved
                spacing={(((windowWidth - 40) * 0.9 / lineData.length) * 0.87) }
                areaChart
                color1="#6B9080"
                startFillColor1="#6B9080"
                endFillColor1="#6B9080"
                startOpacity={0.9}
                endOpacity={0.2}
                noOfSections={3}
                yAxisThickness={0}
                rulesType="solid"
                rulesColor="gray"
                yAxisTextStyle={{color: 'gray'}}
                xAxisColor="lightgray"
                height={150}
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
                            </View>
                        );
                    },
                }}
                maxValue={Math.max(...lineData.map((value) => value.value))}
            />
        </View>
    )
}