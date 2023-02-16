import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import DashedLine from 'react-native-dashed-line';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native-gesture-handler';




const ProductDetial = () => {
    const Navigation = useNavigation()


    useEffect(() => {

        getProduct()

        // getOptinos()
    }, []
    )


    const [product, setProduct] = useState()
    const [cacke, setCacke] = useState()
    const [loas, setLoad] = useState(true)
    const [options, setOptions] = useState()


    const getProduct = async () => {
        const id = await AsyncStorage.getItem("Id");
        console.log(id)

        const ID = id.toString();

        var myHeaders = new Headers();
        myHeaders.append(
            "Cookie",
            "OCSESSID=93cc2911922a32a67643b05788; currency=INR; language=en-gb"
        );

        var formdata = new FormData();
        formdata.append("product_id", ID);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        fetch(
            "https://merwans.co.in/index.php?route=api/apiproduct/productDetails",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                const res = JSON.parse(result)
               // console.log(res.products.options)
                setProduct(JSON.parse(result))
                setOptions(res.products.options)

                setLoad(false)
            }
            )
            .catch((error) => console.log("error", error));






    }

   // console.log(options)

    const [item, SetItem] = useState(0)

    const getOptinos = () => {
        setOptions(product.products.options)

    }

    return (
        <View style={{ flex: 1 }}>

            {loas && <View >
                <ActivityIndicator size={70} style={{ marginTop: "50%" }} />
                <Text style={{ fontSize: 20, color: "green", fontWeight: "bold", alignSelf: "center", marginLeft: "5%" }}>Loading...</Text>

            </View>
            }

            {!loas && <View style={{ flex: 1 }}>

                {product !== undefined && <View style={{ flex: 1 }}>
                    <Image style={styles.photo} source={{ uri: product.products.products.thumb }} />
                    <ScrollView>
                        <View style={{ margin: "3%" }}>
                            <Text style={styles.name}>{product.products.products.name}</Text>
                            <Text style={styles.desc}>{product.products.products.description}</Text>
                        </View>
                        <View style={styles.icon}>
                            <AntDesign name="star" size={25} color={"gold"} />
                            <Text style={[styles.text2, { fontSize: 17, marginLeft: "2%" }]}>4.6 (89 Rewies)</Text>
                            <View style={styles.line}></View>
                            <MaterialCommunityIcons name="truck-delivery-outline" size={25} style={styles.truck} color={"green"} />
                            <Text style={styles.greem}>Free delivery</Text>
                        </View>

                        <Text style={{ color: "lightgrey", marginTop: "15%", marginLeft: "2%" }}>price</Text>
                        <Text style={styles.dollare}> ₹{product.products.products.price}  <Text style={styles.dolo}>₹560</Text></Text>
                        <View style={{ alignSelf: "flex-end", flexDirection: "row", marginTop: "-7%" }}>

                            <TouchableOpacity onPress={() => SetItem(item - 1)} style={styles.btn}>
                                <Entypo name="minus" size={20} />
                            </TouchableOpacity>
                            <Text style={{ alignSelf: "center", fontSize: 17, fontWeight: "bold", marginHorizontal: "5%" }}>{item}</Text>

                            <TouchableOpacity onPress={() => SetItem(item + 1)} style={styles.btn}>
                                <Entypo name="plus" size={20} />
                            </TouchableOpacity>

                        </View>
                        {options?.map((item) => (
                            <View style={styles.vice}>
                            <Text style={{fontSize:17}}>{item.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <View style={{ marginTop: "5%" }}>
                        <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor={"lightgrey"} />
                    </View>
                    <TouchableOpacity style={styles.touch} onPress={() => Navigation.navigate("Cart")}>
                        <Ionicons name="md-cart-sharp" size={25} color={"white"} style={styles.cartIcon} />
                        <Text style={styles.cart}>Add To Cart</Text>
                    </TouchableOpacity>

                </View>}

            </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    photo: {
        height: "40%",
        width: "100%",
        alignSelf: "center"
    },
    name: {
        margin: "10%",
        fontSize: 25,
        fontWeight: "bold",
        color: "red",
        //alignSelf: "center",
        marginTop: "1%",
        marginLeft: "-2%"

    },
    desc: {
        fontSize: 17,
        //textAlign: "center",
        marginTop: "-7%",
        color: "black",
        width: 350,
        fontWeight: "600"
    },
    icon: {
        flexDirection: "row",
        marginTop: "3%"
    },
    text2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    truck: {
        alignSelf: "center"
    },
    cart: {
        color: "white",
        fontWeight: "bold"
    },
    greem: {
        color: "green",
        alignSelf: "center",
        fontWeight: "bold",
        marginLeft: "3%"
    },
    dollare: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginTop: "2%",
        marginLeft: "2%"
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
        borderWidth: 1
    },
    touch: {
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: "20%",
        paddingVertical: "2.50%",
        borderRadius: 16,
        marginHorizontal: "2%"
    },
    cart: {
        color: "white",
        fontWeight: "bold"
    },
    vice:{
        margin:"10%",
        paddingVertical:"1%",
        marginVertical:"-1%",
        paddingHorizontal:"1%"
    }
    
})
export default ProductDetial