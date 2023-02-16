import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Entypo from "react-native-vector-icons/Entypo"
import DashedLine from 'react-native-dashed-line'
import { ScrollView } from 'react-native-gesture-handler'

const ShoopingCart = () => {

    const [item, SetItem] = useState(0)
    const Navigation = useNavigation()
    return (

        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btn2} onPress={() => Navigation.goBack()}  >
                <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.title}>Shopping Cart</Text>
            <View style={styles.line}></View>
            <ScrollView>
                <View>

                    <View style={styles.mar}>

                        <Image source={require("../Assests/Nimbu.png")} />
                        <View style={{ margin: "3%" }}>
                            <Text style={styles.product}>Organic Lamons</Text>
                            <Text style={styles.fruit}>Fruit</Text>
                            <Text style={styles.dollare}>$5.8 <Text style={styles.dolo}>$8.0</Text></Text>

                        </View>


                    </View>
                    <View style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: "-10%", marginRight: "2%" }}>

                        <TouchableOpacity onPress={() => SetItem(item - 1)} style={styles.btn}>
                            <Entypo name="minus" size={20} />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", fontSize: 17, fontWeight: "bold", marginHorizontal: "5%" }}>{item}</Text>

                        <TouchableOpacity onPress={() => SetItem(item + 1)} style={styles.btn}>
                            <Entypo name="plus" size={20} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.line}></View>

                </View>
                <View>

                    <View style={styles.mar}>

                        <Image source={require("../Assests/BlackGa.png")} />
                        <View style={{ margin: "3%" }}>
                            <Text style={styles.product}>Black Graps</Text>
                            <Text style={styles.fruit}>Fruit</Text>
                            <Text style={styles.dollare}>$4.8 <Text style={styles.dolo}>$6.0</Text></Text>

                        </View>


                    </View>
                    <View style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: "-10%", marginRight: "2%" }}>

                        <TouchableOpacity onPress={() => SetItem(item - 1)} style={styles.btn}>
                            <Entypo name="minus" size={20} />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", fontSize: 17, fontWeight: "bold", marginHorizontal: "5%" }}>{item}</Text>

                        <TouchableOpacity onPress={() => SetItem(item + 1)} style={styles.btn}>
                            <Entypo name="plus" size={20} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.line}></View>

                </View>
                <View>

                    <View style={styles.mar}>

                        <Image source={require("../Assests/Pina.png")} />
                        <View style={{ margin: "3%" }}>
                            <Text style={styles.product}>PinaApples</Text>
                            <Text style={styles.fruit}>Fruit</Text>
                            <Text style={styles.dollare}>$8.8 <Text style={styles.dolo}>$10.0</Text></Text>

                        </View>


                    </View>
                    <View style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: "-10%", marginRight: "2%" }}>

                        <TouchableOpacity onPress={() => SetItem(item - 1)} style={styles.btn}>
                            <Entypo name="minus" size={20} />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", fontSize: 17, fontWeight: "bold", marginHorizontal: "5%" }}>{item}</Text>

                        <TouchableOpacity onPress={() => SetItem(item + 1)} style={styles.btn}>
                            <Entypo name="plus" size={20} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.line}></View>

                </View>
                <View>

                    <View style={styles.mar}>

                        <Image source={require("../Assests/Pina.png")} />
                        <View style={{ margin: "3%" }}>
                            <Text style={styles.product}>PinaApples</Text>
                            <Text style={styles.fruit}>Fruit</Text>
                            <Text style={styles.dollare}>$8.8 <Text style={styles.dolo}>$10.0</Text></Text>

                        </View>


                    </View>
                    <View style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: "-10%", marginRight: "2%" }}>

                        <TouchableOpacity onPress={() => SetItem(item - 1)} style={styles.btn}>
                            <Entypo name="minus" size={20} />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", fontSize: 17, fontWeight: "bold", marginHorizontal: "5%" }}>{item}</Text>

                        <TouchableOpacity onPress={() => SetItem(item + 1)} style={styles.btn}>
                            <Entypo name="plus" size={20} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.line}></View>

                </View>
                <View>

                    <View style={styles.mar}>

                        <Image source={require("../Assests/Pina.png")} />
                        <View style={{ margin: "3%" }}>
                            <Text style={styles.product}>PinaApples</Text>
                            <Text style={styles.fruit}>Fruit</Text>
                            <Text style={styles.dollare}>$8.8 <Text style={styles.dolo}>$10.0</Text></Text>

                        </View>


                    </View>
                    <View style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: "-10%", marginRight: "2%" }}>

                        <TouchableOpacity onPress={() => SetItem(item - 1)} style={styles.btn}>
                            <Entypo name="minus" size={20} />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", fontSize: 17, fontWeight: "bold", marginHorizontal: "5%" }}>{item}</Text>

                        <TouchableOpacity onPress={() => SetItem(item + 1)} style={styles.btn}>
                            <Entypo name="plus" size={20} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.line}></View>

                </View>
                <View>

                    <View style={styles.mar}>

                        <Image source={require("../Assests/Pina.png")} />
                        <View style={{ margin: "3%" }}>
                            <Text style={styles.product}>PinaApples</Text>
                            <Text style={styles.fruit}>Fruit</Text>
                            <Text style={styles.dollare}>$8.8 <Text style={styles.dolo}>$10.0</Text></Text>

                        </View>


                    </View>
                    <View style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: "-10%", marginRight: "2%" }}>

                        <TouchableOpacity onPress={() => SetItem(item - 1)} style={styles.btn}>
                            <Entypo name="minus" size={20} />
                        </TouchableOpacity>
                        <Text style={{ alignSelf: "center", fontSize: 17, fontWeight: "bold", marginHorizontal: "5%" }}>{item}</Text>

                        <TouchableOpacity onPress={() => SetItem(item + 1)} style={styles.btn}>
                            <Entypo name="plus" size={20} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.line}></View>

                </View>



            </ScrollView>
            <View style={{ height: "30%", backgroundColor: "white" }}>
                <View>
                    <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor={"lightgrey"} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: "4%" }}>
                        <Text style={{ color: "grey", fontWeight: "600", fontSize: 12 }}>SubTotal</Text>
                        <Text style={{ color: "grey", fontWeight: "600", fontSize: 12, marginVertical: "4%" }}>TAX(2%)</Text>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16, marginVertical: "4%" }}>TOTAL</Text>
                    </View>
                    <View style={{ margin: "4%", marginLeft: "60%" }}>
                        <Text style={{ color: "grey", fontWeight: "600", fontSize: 12 }}>$56.67</Text>
                        <Text style={{ color: "grey", fontWeight: "600", fontSize: 12, marginVertical: "4%" }}>+ $1.45</Text>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16, marginVertical: "4%" }}>$ 57.67</Text>
                    </View>
                </View>
                <View style={styles.btn23}>
                    <Text style={{ alignSelf: "center", marginLeft: "5%" }}>Apply Promotion code</Text>
                    <Text style={{ color: "green", fontWeight: "bold", alignSelf: "center", marginLeft: "25%" }}>2 Promos</Text>
                </View>
                <TouchableOpacity onPress={()=>Navigation.navigate("DeliveryAdress")} style={{
                    height: "17%",
                    marginHorizontal: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%",
                    backgroundColor: "green",
                    borderRadius: 16

                }}><Text style={{ fontWeight: "bold", color: "white" }}>CHECKOUT</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    btn2: {
        marginTop: "2%",
        marginLeft: "2%"
    },
    back: {
        margin: "3%",
        height: 25,
        width: 25,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
        marginLeft: "-4%",
        marginTop: "-10%"
    },
    mar: {
        marginLeft: "3%",
        marginTop: "5%",
        flexDirection: "row"
    },
    line: {
        height: 2,
        width: "100%",
        backgroundColor: "lightgrey",
        marginTop: "6%"
    },
    product: {
        fontSize: 17,
        fontWeight: "bold",
        color: "black"
    },
    fruit: {
        color: "lightgrey",
        fontWeight: "bold",
        margin: "5%"
    },
    dollare: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginTop: "2%"
    },
    dolo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "lightgrey",
        marginTop: "3%",
        textDecorationLine: 'line-through',
    },
    btn: {
        paddingHorizontal: "1%",
        paddingVertical: "1%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,

    },
    btn23: {
        height: "17%",
        backgroundColor: 'lightgrey',
        marginHorizontal: "5%",
        marginTop: "3%",
        borderRadius: 16,
        flexDirection: "row"
    }
})

export default ShoopingCart