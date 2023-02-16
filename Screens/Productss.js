import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import DashedLine from 'react-native-dashed-line';
import { useNavigation } from '@react-navigation/native';

const ProductDetial = () => {

    const Navigation=useNavigation()

    const data = [

        require("../Assests/Nimbu.png"),

        require("../Assests/Nimbu.png"),


        require("../Assests/Nimbu.png"),


        require("../Assests/Nimbu.png"),

        require("../Assests/Nimbu.png"),
    ]
    const [item,SetItem]=useState(0)
    return (
        <View style={{ flex: 1 }}>
            <SliderBox images={data}
                sliderBoxHeight={300}
            />
            <View style={styles.header}>
                <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()}  >
                    <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.title}>Fruits</Text>
                <AntDesign name="heart" size={20} style={styles.heart} />
            </View>
            <View style={styles.degi}>
                <Text style={styles.blue}>Fruits</Text>
                <Text style={styles.text2}>Organic Lemons</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <View style={styles.icon}>
                    <AntDesign name="star" size={25} color={"gold"} />
                    <Text style={[styles.text2, { fontSize: 17, marginLeft: "2%" }]}>4.6 (89 Rewies)</Text>
                    <View style={styles.line}></View>
                    <MaterialCommunityIcons name="truck-delivery-outline" size={25} style={styles.truck} color={"green"}/>
                    <Text style={styles.greem}>Free delivery</Text>
                </View>
                

                <Text style={{color:"lightgrey",marginTop:"12%"}}>price</Text>
                <Text style={styles.dollare}>$5.8 <Text style={styles.dolo}>$8.0</Text></Text>
                <View style={{alignSelf:"flex-end",flexDirection:"row",marginTop:"-7%"}}>

                   <TouchableOpacity onPress={()=>SetItem(item-1)} style={styles.btn}>
                    <Entypo name="minus" size={20}/>
                   </TouchableOpacity>
                   <Text style={{alignSelf:"center",fontSize:17,fontWeight:"bold",marginHorizontal:"5%"}}>{item}</Text>

                   <TouchableOpacity onPress={()=>SetItem(item+1)} style={styles.btn}>
                    <Entypo name="plus" size={20}/>
                   </TouchableOpacity>

                </View>
                <View style={{marginTop:"5%"}}>
                <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor={"lightgrey"} />
                </View>
                <TouchableOpacity style={styles.touch} onPress={()=>Navigation.navigate("Cart")}>
                <Ionicons name="md-cart-sharp" size={25} color={"white"} style={styles.cartIcon} />
                <Text style={styles.cart}>Add To Cart</Text>
                </TouchableOpacity>
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
    blue: {
        color: "skyblue",
        fontSize: 20,
        fontWeight: "500"
    },
    text2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    line: {
        height: 30,
        width: 2,
        backgroundColor: "lightgrey",
        marginHorizontal: "5%"
    },
    heart: {
        alignSelf: "flex-end",
        marginRight: "5%",
        marginTop: "-5%"
    },
    header: {
        marginTop: "-87%"
    },
    degi: {
        margin: "10%",
        marginTop: "82%"
    },
    icon: {
        flexDirection: "row",
        marginTop: "3%"
    },
    truck:{
        alignSelf:"center"
    },
    greem:{
        color:"green",
        alignSelf:"center",
        fontWeight:"bold",
        marginLeft:"3%"
    },
    dollare:{
        fontSize:18,
        fontWeight:"bold",
        color:"black",
        marginTop:"2%"
    },
    dolo:{
        fontSize:15,
        fontWeight:"bold",
        color:"lightgrey",
        marginTop:"3%",
        textDecorationLine: 'line-through',
    },
    btn:{
        paddingHorizontal:"1%",
        paddingVertical:"1%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        borderWidth:1
    },
    touch:{
        backgroundColor:"green",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        marginTop:"30%",
        paddingVertical:"2.50%",
        borderRadius:16
    },
    cart:{
        color:"white",
        fontWeight:"bold"
    }
})
export default ProductDetial