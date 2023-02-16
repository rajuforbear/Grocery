import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Icon from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Friuts = () => {
    const Navigation=useNavigation()

    const DATA = [
        {
            name: "Fresh Tomatos",
            price: "$8.9",
            Icon: "md-cart-sharp",//Feather
            Icon2: "tag", //fontAwesome
            img: require("../Assests/Tomato.png")
        },
        {
            name: "Black Grapes",
            price: "$8.9",
            Icon: "md-cart-sharp",//Feather
            Icon2: "tag", //fontAwesome
            img: require("../Assests/BlackGa.png")
        },
        {
            name: "Water Mallon",
            price: "$8.9",
            Icon: "md-cart-sharp",//Feather
            Icon2: "tag", //fontAwesome
            img: require("../Assests/Tarbuj.png")
        },
        {
            name: "Orange",
            price: "$8.9",
            Icon: "md-cart-sharp",//Feather
            Icon2: "tag", //fontAwesome
            img: require("../Assests/Nimbu.png")
        },
        {
            name: "Pinaple",
            price: "$8.9",
            Icon: "md-cart-sharp",//Feather
            Icon2: "tag", //fontAwesome
            img: require("../Assests/Pina.png")
        },
    ]

    return (
        <View>
            <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()} >
                <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.title}>Fruits</Text>
            <View style={styles.search}>
                <Ionicons name="search" size={30} color={"skyblue"} style={styles.searchi} />
                <TextInput placeholder='Search beverages or food' style={styles.pla} placeholderTextColor={"skyblue"}></TextInput>
            </View>
            <FlatList
                data={DATA}

                renderItem={({ item }) => (
                    <View>
                        <View style={styles.list1}>
                            <ImageBackground style={styles.img} source={item.img}>
                                <View style={styles.heart}><AntDesign name="heart" size={22} color={"white"} /></View>
                            </ImageBackground>
                            <View style={{ marginLeft: "-20%" }}>
                                <Text style={styles.price}>{item.name}</Text>
                                <Text style={styles.price}>{item.price}<Text style={[styles.price, { color: "lightgrey", textDecorationLine: 'line-through', }]}>   $10.60</Text></Text>
                                <View style={{ flexDirection: "row", marginTop: "20%" }}>
                                    <Icon name={item.Icon2} size={20} color={"gold"} style={item.cartIcon} />
                                    <Text style={styles.desc}>Disc. 10% off..</Text>
                                </View>

                            </View>
                            <TouchableOpacity style={styles.cart} onPress={()=>Navigation.navigate("Product")}>
                                <Ionicons name={item.Icon} size={25} color={"white"} style={styles.cartIcon} />
                            </TouchableOpacity>

                        </View>
                        <View style={{ height: 2, width: "100%", backgroundColor: "lightgrey" }}></View>
                    </View>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btn2: {
        marginTop: "2%",
        marginLeft: "2%"
    },
    back: {
        margin: "5%",
        height: 25,
        width: 25,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
        marginLeft: "6%",
        marginTop: "-12%"
    },
    search: {
        // borderWidth: 2,
        height: 52,
        width: "90%",
        alignSelf: "center",
        marginTop: "5%",
        borderRadius: 16,
        borderColor: "skyblue",
        flexDirection: "row",
        backgroundColor: "lightgrey"
    },
    searchi: {
        margin: "3%"
    },
    list1: {
        paddingHorizontal: "2%",
        paddingVertical: "2%",
        //borderWidth: 1,
        flexDirection: "row"
    },
    img: {
        paddingVertical: "15%",
        width: "50%"

    },
    heart: {
        marginTop: "-27%",
        marginLeft: "1%",
        paddingHorizontal: "1%",
        paddingVertical: "1%",
        width: "20%",
        backgroundColor: "pink",
        alignItems: "center",
        borderRadius: 4,
        justifyContent: "center"
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",

    },
    cart: {
        paddingHorizontal: "2%",
        paddingVertical: "2%",
        alignSelf: "center",
        backgroundColor: "green",
        borderRadius: 5,
        marginLeft:"23%"
    },
    cartIcon: {
        alignSelf: "center"
    },
    desc: {
        fontSize: 15, 
        color: "gold"
    }
})

export default Friuts