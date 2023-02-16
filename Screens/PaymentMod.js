import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import AntDesign from "react-native-vector-icons/AntDesign"
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'






const PaymentMod = () => {
    const Navigation=useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [colore, setColore] = useState(false)
    const [creadit, setCreadit] = useState(false)
    const [PayPal, setPayapl] = useState(false)
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: "5%" }}>

                <TouchableOpacity onPress={() => { setColore(!colore), setCreadit(false), setPayapl(false) }} style={[styles.cardbtn, colore && { borderColor: "green" }]}>
                    <Icon name="hand-holding-usd" size={27} style={{ marginLeft: "-10%" }} color={colore && "green"} />
                    <Text style={[styles.cash, colore && { color: "green" }]}>Cash On Delivery</Text>
                </TouchableOpacity>
                {colore && <View style={styles.cicle}>
                    <AntDesign name="checkcircle" size={15} style={{ marginLeft: "-5%" }} color={"green"} />
                </View>
                }
                <TouchableOpacity onPress={() => { setCreadit(!creadit), setColore(false), setPayapl(false) }} style={[styles.cardbtn, creadit && { borderColor: "green" }]}>
                    <Icon name="credit-card" size={25} style={{ marginLeft: "-10%" }} color={creadit && "green"} />
                    <Text style={[styles.cash, creadit && { color: "green" }]}>Creadit Card</Text>
                </TouchableOpacity>
                {creadit && <View style={styles.cicle}>
                    <AntDesign name="checkcircle" size={15} style={{ marginLeft: "-5%" }} color={"green"} />
                </View>
                }
                <TouchableOpacity onPress={() => { setPayapl(!PayPal), setColore(false), setCreadit(false) }} style={[styles.cardbtn, PayPal && { borderColor: "green" }]}>
                    <Icon name="money-bill-alt" size={27} style={{ marginLeft: "-10%" }} color={PayPal && "green"} />
                    <Text style={[styles.cash, PayPal && { color: "green" }]}>PayPal</Text>
                </TouchableOpacity>
                {PayPal && <View style={styles.cicle}>
                    <AntDesign name="checkcircle" size={15} style={{ marginLeft: "-5%" }} color={"green"} />
                </View>
                }

            </View>
            <View style={styles.imgback}>
                <ImageBackground source={require("../Assests/card.png")} style={styles.card} imageStyle={styles.bri}>
                    <View style={styles.fl}>
                        <View style={styles.circle}></View>
                        <View style={[styles.circle, { marginLeft: "-3%", backgroundColor: "yellow" }]}></View>
                    </View>
                    <View style={{ marginLeft: "8%" }}>
                        <Text style={styles.bank}>BANK OF INDIA</Text>
                        <Text style={styles.bank}>* * * *   * * * *  * * * *</Text>
                    </View>
                    <View style={{ flexDirection: "row",marginLeft:"5%",marginTop:"10%" }}>
                        <View>
                            <Text style={[styles.bank,{fontSize:15,fontWeight:"400"}]}>Card Holder</Text>
                            <Text style={styles.bank}>Raju Barde</Text>
                        </View>
                        <View style={{marginLeft:"45%"}}>
                            <Text style={[styles.bank,{fontSize:15,fontWeight:"400"}]}>VALID THRU</Text>
                            <Text style={[styles.bank,{marginLeft:"4%"}]}>08/21</Text>
                        </View>

                    </View>

                </ImageBackground>
            </View>
            <Text style={styles.text}>CARD HOLDER NAME</Text>
            <View style={styles.TextInput}>
                <TextInput placeholder='NAME' />
            </View>
            <Text style={styles.text}>CARD NUMBER</Text>
            <View style={styles.TextInput}>
                <TextInput placeholder='CARD NUMBER' />
            </View>
          
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <View>
                    <Text style={styles.text2}>MONTH/YEAR</Text>
                    <View style={styles.TextInput2}>
                        <TextInput placeholder='Enter here' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text2}>CVV</Text>
                    <View style={styles.TextInput2}>
                        <TextInput placeholder='Enter here' />
                    </View>
                </View>
            </View>
            <Text style={styles.text}>Country</Text>
            <View style={styles.TextInput}>
                <TextInput placeholder='Enter your country name' />
            </View>
            <View style={{flexDirection:"row"}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={{marginLeft:"5%"}}
            />
            <Text style={[{alignSelf:"center",fontWeight:"bold"},toggleCheckBox&&{color:"geen"}]}>Save This Address Card</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    cardbtn: {

        paddingVertical: "2%",
        borderWidth: 2,
        paddingHorizontal: "2%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: "3%"
        //  borderColor:"green"
    },
    cash: {
        width: 60,
        fontWeight: "bold",
        //  color:"green"
        textAlign: "center"

    },
    cicle: {
        height: 16,
        width: 16,
        backgroundColor: "grey",
        borderRadius: 100,
        marginLeft: "-3%",
        // marginTop: "-1%",
        alignItems: "center",
        justifyContent: "center"
    },
    imgb: {
        height: '100%',
        width: "80%"

    },
    view: {
        height: 25,
        width: 25,
        backgroundColor: "yellow",
        borderRadius: 100,
        alignSelf: "flex-end"
    },
    imgback: {
        paddingHorizontal: "10%",
        paddingVertical: "10%"
    },
    card: {
        height: 200,
        width: 340,
        alignSelf: "center",
    },
    bri: {
        borderRadius: 16
    },
    fl: {
        flexDirection: "row",
        alignSelf: "flex-end",
        margin: "5%"
    },
    circle: {
        height: 35,
        width: 35,
        borderRadius: 100,
        backgroundColor: "red"
    },
    bank: {
        color: "white",
        fontWeight: "bold",
        fontSize: 17
    },
    TextInput: {
        //paddingVertical:"1%",
        backgroundColor: "lightgrey",
        borderRadius: 16,
        marginHorizontal: "5%",
        paddingHorizontal: "5%"
    },
    text: {
        fontWeight: "bold",
        margin: "2%",
        marginLeft: "7%",
        marginTop: "5%"
    },
    TextInput2: {
        //paddingVertical:"1%",
        backgroundColor: "lightgrey",
        borderRadius: 16,
        marginLeft: "5%",
        paddingHorizontal: "11%"

    },
    text2: {
        fontWeight: "bold",
        margin: "2%",
        marginLeft: "9%",
        marginTop: "5%"
    }
})

export default PaymentMod