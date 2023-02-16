import { View, Text, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native'
import React, { useState } from 'react'
import Order from './Order'
import { FlatList } from 'react-native-gesture-handler'
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign";



const OrdeId = () => {

    const Ides = [
        {
            key: 1,
            id: "Order Id #012345",
            it: "12 items on delevery",
            page: Order,
            colo: "green"
        },
        {
            key: 2,
            id: "Order Id #012345",
            it: "12 items on delevery",
            page: Order,
            colo: "yellow",
        },
        {
            key: 3,
            id: "Order Id #012345",
            it: "12 items on delevery",
            page: Order,
            colo: "#d63e13"
        },
        {
            key: 4,
            id: "Order Id #012345",
            it: "12 items on delevery",
            page: Order,
            colo: "green"
        },
        {
            key: 5,
            id: "Order Id #012345",
            it: "12 items on delevery",
            page: Order,
            colo: "#d63e13"
        },
        {
            key: 6,
            id: "Order Id #012345",
            it: "12 items on delevery",
            page: Order,
            colo: "yellow"
        },
    ]

    const [key, setKey] = useState(0)
    const [expanded, setExpanded] = useState(true);
    const animation = new Animated.Value(0);
    const [colore,setColore]=useState('');

    const value2 = useState(new Animated.Value(0))

    const Calable = (ikey) => {
       //console.log(ikey,key)
       setKey(ikey)
       setColore('grey')
        const toValue= true
        Animated.timing(animation, {
            toValue,
            duration: 1000,
            useNativeDriver:false
        }).start();
        
    }
    const height = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 250],
    });

    return (



        <View style={{}}>

            <FlatList
                data={Ides}
                keyExtractor={item => { item.key }}
                renderItem={({ item }) =>
                (
                    <View style={{ backgroundColor: "white" }} >
                        <TouchableOpacity style={styles.list} onPress={() => Calable(item.key) }>
                            <View style={[styles.roun, { backgroundColor: item.colo },key===item.key && {backgroundColor:colore}]}>
                                <Feather name="shopping-bag" size={27} color={"white"} />
                            </View>
                            <View style={{ marginLeft: "4%" }}>
                                <Text style={styles.id}>{item.id}</Text>
                                <Text>{item.it}</Text>
                            </View>
                            <AntDesign name="right" size={23} style={{ marginLeft: "40%", alignSelf: "center" }} />
                        </TouchableOpacity>
                        {key == item.key && <Animated.View style={{height}}><item.page /></Animated.View>}
                        <View style={styles.line}></View>

                    </View>
                )}
            />

            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Track Order</Text></TouchableOpacity>

        </View>

    )
}


const styles = StyleSheet.create({
    list: {
        //borderWidth:1,
        paddingHorizontal: "10%",
        paddingVertical: "2%",
        flexDirection: "row",
        margin: "1%"
    },
    roun: {
        //borderWidth:1,
        borderColor: "grey",
        height: 45,
        width: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        marginLeft: "-5%"
    },
    id: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
        // marginLeft:"3%"
    },
    line: {
        backgroundColor: "lightgrey",
        height: 1,
        width: "100%",
        marginTop: "1%"

    },
    btn:{
        paddingVertical:"3%",
        backgroundColor:"green",
        marginTop:"15%",
        marginHorizontal:"3%",
        borderRadius:16
    },
    btnText:{
        alignSelf:"center",
        fontWeight:"bold",
        color:"white"
    }
})


export default OrdeId