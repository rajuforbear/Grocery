import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { CardStyleInterpolators } from '@react-navigation/stack'
import { FlatList } from 'react-native-gesture-handler'
import DrawerNavigator from './DrawerNavigator'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import Fontisto from "react-native-vector-icons/Fontisto"
import Icon from "react-native-vector-icons/FontAwesome5"


const Profile = () => {
    const Navigation = useNavigation();

    const DATA = [
        {
            name: "My Orders",
            main: require("../Assests/clock.png"),
            img: require("../Assests/half.png"),
            page: "Order"
        },
        {
            name: "Payments & Wallet",
            main: require("../Assests/wallet.png"),
            img: require("../Assests/half.png"),
            page: "Payment"
        },
        {
            name: "Ratting & Review",
            main: require("../Assests/star.png"),
            img: require("../Assests/half.png"),
            page: "Rating"
        },
        {
            name: "Notification",
            main: require("../Assests/bell.png"),
            img: require("../Assests/half.png"),
            page: "Notification"
        },
        {
            name: "Delivery Adress",
            main: require("../Assests/icon.png"),
            img: require("../Assests/half.png"),
            page: "Address"
        },
        {
            name: "Blog & Blog Details",
            main: require("../Assests/msg.png"),
            img: require("../Assests/half.png"),
            page: "Blog"
        },
        {
            name: "LogOut",
            main: require("../Assests/logout.png"),
            img: require("../Assests/half.png"),
            page: "Login"
        },

    ]
    const [Modalbool, SetModalBool] = useState(false)

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btn}>
                    <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
                <TouchableOpacity style={styles.lst} onPress={() => { Navigation.dispatch(DrawerActions.openDrawer()) }}><Image style={styles.back} source={require("../Assests/list.png")} /></TouchableOpacity>
            </View>

            <View style={styles.details}>
                <View style={styles.data}>
                    <View style={styles.photow}>
                        <Image style={styles.photo} source={require("../Assests/photo.jpg")} />
                    </View>
                    <View style={styles.nm}>
                        <Text style={styles.name}>Raju Barde</Text>
                        <Text style={styles.rout}>rajubarde54@gmail.com</Text>
                        <Text style={styles.rout}>846195542</Text>
                    </View>
                    <TouchableOpacity style={styles.edit}>
                        <Image style={styles.pen} source={require("../Assests/pen.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.loc}>
                    <View style={styles.dete}>
                        <View style={styles.lo}>
                            <Image style={styles.locincon} source={require("../Assests/loc.png")} />
                        </View>
                        <View style={styles.uk}>
                            <Text style={styles.txt}>324402</Text>
                            <Text style={styles.txt}>UK-23444</Text>
                        </View>
                        <TouchableOpacity style={styles.btn2}><Text style={{ color: "white", fontSize: 17 }}>Change</Text></TouchableOpacity>
                    </View>

                </View>


            </View>
            <View style={{ flex: 1 }}>

                <FlatList
                    data={DATA}

                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.items} onPress={() => {
                            if (item.page != "Address")
                                Navigation.navigate(item.page)
                            else
                                SetModalBool(true)
                        }}>
                            <View style={styles.view}>
                                <Image style={styles.pen2} source={item.main} />
                                <Text style={styles.content}>{item.name}</Text>
                            </View>
                            <Image style={styles.half} source={item.img} />
                        </TouchableOpacity>
                    )}
                />


            </View>
            <Modal
                isVisible={Modalbool}
            >
                <View style={{
                    height: 200, width: 330, backgroundColor: "white", alignSelf: "center",
                    borderRadius: 16
                }}>
                    <Text style={{
                        alignSelf: "flex-start", fontSize: 17, fontWeight: "bold", color: "black",
                        margin: "5%"
                    }}>Select Location</Text>
                    <TouchableOpacity style={styles.close} onPress={() => { SetModalBool(false) }}><Fontisto name="close-a" size={15} color={"black"} /></TouchableOpacity>
                    <View style={styles.line}></View>
                    <View style={styles.textInput}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name='search' size={17} color={"lightgrey"} style={{ margin: "3%" }} />
                            <TextInput placeholder='Search for area,street name..' placeholderTextColor={"lightgrey"} style={{ fontWeight: "bold", marginTop: "0%" }} />
                        </View>
                        <TouchableOpacity style={styles.btn3} onPress={()=>{SetModalBool(false)}}><Text style={{ fontSize: 17, fontWeight: "bold", color: "green" }}>Add</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>

    )
}
const styles = StyleSheet.create({
    btn3: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        height: "95%",
        width: "100%",
        alignSelf: "center",
        marginTop: "5%",
        borderRadius: 10
    },
    textInput: {
        width: "85%",
        height: "20%",
        borderWidth: 1,
        alignSelf: "center",
        marginTop: "10%",
        borderRadius: 10,
        borderColor: "lightgrey",
        // flexDirection: "row"
    },
    line: {
        width: "100%",
        height: .50,
        backgroundColor: "grey"
    },
    page: {
        flex: 1
    },
    header: {
        height: "7%",
        width: "100%",

        flexDirection: "row"
    },
    back: {
        height: 25,
        width: 25,

    },
    btn: {
        marginTop: "3%",
        marginLeft: "2%"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
        marginLeft: "28%"
    },
    lst: {
        marginTop: "3%",
        marginLeft: "35%"
    },
    details: {
        backgroundColor: "green",
        height: "30%"
    },
    data: {
        flexDirection: "row"
    },
    photo: {
        alignSelf: "center",
        height: 60,
        width: 60,
        marginTop: "7%",
        borderRadius: 9
    },
    photow: {
        height: 75,
        width: 75,
        borderRadius: 9,
        borderWidth: 3,
        borderColor: "white",
        alignItems: 'center',
        justifyContentP: "center",
        marginTop: "7%",
        marginLeft: "4%"
    },
    name: {
        fontSize: 19,
        fontWeight: "bold",
        color: "white"
    },
    rout: {
        fontSize: 15,
        color: "lightgrey",
    },
    nm: {
        marginTop: "7%",
        marginLeft: "2%"
    },
    pen: {
        height: 35,
        width: 35
    },
    edit: {
        alignSelf: "center",
        marginLeft: "11%"
    },
    dete: {
        flexDirection: "row"
    },
    loc: {
        alignSelf: "center",
        // borderWidth:2,
        height: "37%",
        width: "95%",
        borderRadius: 15,
        marginTop: "5%",
        backgroundColor: "#128c33"
    },
    lo: {
        marginTop: "7%",
        marginLeft: "5%",
        height: 37,
        width: 37,
        borderWidth: 2,
        borderColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9
    },
    locincon: {
        height: 27,
        width: 27,
        // marginLeft:"3%"

    },
    uk: {
        marginTop: "5%",
        marginLeft: "5%"
    },
    txt: {
        fontSize: 17,
        color: "white"
    },
    btn2: {
        borderWidth: 2,
        height: 40,
        width: 80,
        borderColor: "white",
        borderRadius: 9,
        marginTop: "7%",
        marginLeft: "29%",
        alignItems: "center",
        justifyContent: "center"
    },
    items: {
        height: 65,
        width: "100%",
        // alignItems:"center",
        //  justifyContent:"center",
        borderWidth: 1,
        borderColor: "lightgrey",
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row"
    },
    content: {
        fontSize: 17,
        fontWeight: "800",
        //marginBottom:"1%",
        marginLeft: "5%"
    },
    view: {
        // borderWidth:1,
        flexDirection: "row",
        width: "60%",
        alignItems: "center",
        //justifyContent:"center"
    },
    pen2: {
        height: 35,
        width: 35,
        marginLeft: "2%"
    },
    half: {
        height: 25,
        width: 25,
        marginLeft: "30%"
    },
    close: {
        alignSelf: "flex-end",
        marginTop: "-10%",
        margin: "5%"
    }
})

export default Profile