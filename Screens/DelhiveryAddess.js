import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import AddressField from './AddressField'
import PaymentMod from './PaymentMod'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
const DelhiveryAddess = () => {
    const Navigation=useNavigation()
    const [count, setCount] = useState(1)

    const AnimationCouint = () => {
        setCount(count + 1)
    }
    const AnimationCouint2 = () => {
        setCount(count - 1)
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btn2} onPress={() => Navigation.goBack()}  >
                <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.title}>Checkout</Text>
            <View style={styles.line}>
                <View style={styles.circle}>
                    {count == 1 && <Icon name="dot-circle-o" size={28} color={"green"} style={styles.icon} />}
                    {count >= 2 && <Icon name="check-circle-o" size={28} color={"green"} style={styles.icon} />}

                </View>
                <View style={[{ height: "100%", width: "40%", }, count >= 2 && { backgroundColor: "green" }]}></View>
                <View style={[styles.circle,]}>
                    {count == 2 && <Icon name="dot-circle-o" size={28} color={"green"} style={styles.icon} />}
                    {count >= 3 && <Icon name="check-circle-o" size={28} color={"green"} style={styles.icon} />}
                </View>
                <View style={[{ height: "100%", width: "40%", }, count >= 3 && { backgroundColor: "green" }]}></View>
                <View style={[styles.circle,]}>
                    {count == 3 && <Icon name="dot-circle-o" size={28} color={"green"} style={styles.icon} />}
                    {count >= 4 && <Icon name="check-circle-o" size={28} color={"green"} style={styles.icon} />}
                </View>
            </View>
            <View style={styles.add}>

                <Text style={[{ marginLeft: "-5%", fontWeight: "bold" }, count >= 2 && { color: "green" }]}>Delivery</Text>
                <Text style={[{ marginLeft: "27%", fontWeight: "bold" }, count >= 3 && { color: "green" }]}>Address</Text>
                <Text style={[{ marginLeft: "32%", fontWeight: "bold" }, count >= 4 && { color: "green" }]}>Payment</Text>

            </View>
            <ScrollView>
                {count == 1 && <AddressField />}
                {count == 2 && <AddressField />}
                {count == 3 && <PaymentMod />}
            </ScrollView>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity style={styles.btn}
                  onPress={() => AnimationCouint2()}
                    
                ><Text style={styles.btntxt}>PREVIOUS</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}
                  onPress={() => {if(count<3) AnimationCouint()
                    else
                    {
                        Navigation.navigate("PaymentSuccess")
                    }
                }}
                ><Text style={styles.btntxt}>NEXT</Text></TouchableOpacity>
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
    line: {
        height: 5,
        width: "70%",
        backgroundColor: "lightgrey",
        marginTop: "7%",
        alignSelf: "center",
        flexDirection: "row"
    },
    circle: {
        height: 25, width: 25,
        borderRadius: 100,
        backgroundColor: "lightgrey",
        marginTop: "-3.50%",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        marginTop: "-5%"
    },
    btn: {
        paddingVertical: "3%",
        paddingHorizontal:"15%",
        margin:"2%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 16,
        // marginTop: "60%"

    },
    btntxt: {
        fontWeight: "bold",
        color: 'white'
    },
    add: {
        width: "70%",
        paddingVertical: ".5%",
        alignSelf: "center",
        flexDirection: "row",
        marginTop: "3%"
    }
})

export default DelhiveryAddess