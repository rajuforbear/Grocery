import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native'

const Categories = () => {
    const Navigation=useNavigation()
    const Catagories = [
        {
            icon: "fruit-grapes",
            img: require("../Assests/fruits.jpg"),
            name: "Fruits",
            total: "45 Items",
            color: "skyblue"
        },
        {
            icon: "fish",
            img: require("../Assests/fish.jpg"),
            name: "Fish",
            total: "45 Items",
            color: "pink"

        },
        {
            icon: "food",
            img: require("../Assests/chicken.webp"),
            name: "Chicken",
            total: "45 Items",
            color: 'green'
        },
        {
            icon: "pizza",
            img: require("../Assests/pizza.jpg"),
            name: "Pizza",
            total: "45 Items",
            color: "yellow"
        },
        {
            icon: "pizza",
            img: require("../Assests/pizza.jpg"),
            name: "Pizza",
            total: "45 Items",
            color: "yellow"
        },
        {
            icon: "pizza",
            img: require("../Assests/pizza.jpg"),
            name: "Pizza",
            total: "45 Items",
            color: "yellow"
        },
        {
            icon: "pizza",
            img: require("../Assests/pizza.jpg"),
            name: "Pizza",
            total: "45 Items",
            color: "yellow"
        },
        {
            icon: "pizza",
            img: require("../Assests/pizza.jpg"),
            name: "Pizza",
            total: "45 Items",
            color: "yellow"
        },
        {
            icon: "pizza",
            img: require("../Assests/pizza.jpg"),
            name: "Pizza",
            total: "45 Items",
            color: "yellow"
        },
        {
            icon: "pizza",
            img: require("../Assests/pizza.jpg"),
            name: "Pizza",
            total: "45 Items",
            color: "yellow"
        },
    ]

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()} >
                <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.title}>Categories</Text>
            <FlatList
            style={{marginTop:"10%"}}
                data={Catagories}
                //horizontal={true}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{alignSelf:"center",marginLeft:"3%"}} onPress={()=>Navigation.navigate("Fruits")}>
                        <ImageBackground style={[styles.flat,{backgroundColor:item.color}]} blurRadius={20} imageStyle={{ borderRadius: 17 }} source={item.img}>
                            <MaterialCommunityIcons name={item.icon} size={50} color={"white"} />
                            <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>{item.name}</Text>

                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white" }}>{item.total}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
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
    flat: {
        
        paddingHorizontal:"10%",
        paddingVertical:"30%",
        margin: 7,
        alignItems: "center",
        justifyContent: "center",
      
        borderRadius: 17,
        
    }
})

export default Categories