import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Dimensions, Platform } from 'react-native'
import { useState } from 'react'
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Modal from "react-native-modal";
import Fontisto from "react-native-vector-icons/Fontisto"
import { useNavigation } from '@react-navigation/native';




const Rating = () => {
    const Navigation=useNavigation()

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight =
        Platform.OS === "ios"
            ? Dimensions.get("window").height
            : require("react-native-extra-dimensions-android").get(
                "REAL_WINDOW_HEIGHT"
            );

    const data = [
        {
            img: require("../Assests/photo.jpg"),
            name: "Raju Barde",
            time: "32 minuts ago",
            rating: 4,
            icon: "star",
            cont: "If the value is 100%, the proportion."
        },
        {
            img: require("../Assests/photo.jpg"),
            name: "Raju Barde",
            time: "32 minuts ago",
            rating: 4,
            icon: "star",
            cont: "If the value is 100%, the proportion."
        },
        {
            img: require("../Assests/photo.jpg"),
            name: "Raju Barde",
            time: "32 minuts ago",
            rating: 4,
            icon: "star",
            cont: "If the value is 100%, the proportion."
        },
        {
            img: require("../Assests/photo.jpg"),
            name: "Raju Barde",
            time: "32 minuts ago",
            rating: 4,
            icon: "star",
            cont: "If the value is 100%, the proportion."
        },
        {
            img: require("../Assests/photo.jpg"),
            name: "Raju Barde",
            time: "32 minuts ago",
            rating: 4.5,
            icon: "star",
            cont: "If the value is 100%, the proportion."
        },
        {
            img: require("../Assests/photo.jpg"),
            name: "Raju Barde",
            time: "32 minuts ago",
            rating: 4.5,
            icon: "star",
            cont: "If the value is 100%, the proportion of."
        },
        {
            img: require("../Assests/photo.jpg"),
            name: "Raju Barde",
            time: "32 minuts ago",
            rating: 4.5,
            icon: "star",
            cont: "If the value is 100%, the proportion of impressions ."
        },
    ]

    const [modal, SetModal] = useState(false)

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()}>
                    <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.title}>Ratting</Text>
            </View>

            <View style={styles.flat}>
                <FlatList

                    data={data}

                    renderItem={({ item }) => (

                        <View style={styles.List2}>
                            <View style={styles.List}>
                                <Image style={styles.img} source={item.img} />
                                <View style={styles.mar}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text>{item.time}</Text>
                                </View>

                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.content}>
                                <Text style={styles.rati}>{item.rating}</Text>
                                <AntDesign name={item.icon} size={19} color={"gold"} />
                                <AntDesign name={item.icon} size={19} color={"gold"} />
                                <AntDesign name={item.icon} size={19} color={"gold"} />
                                <AntDesign name={item.icon} size={19} color={"gold"} />
                                <Feather name={item.icon} size={19} color={"gold"} />
                            </View>
                            {/* <Text style={styles.cont}>{item.cont}</Text> */}
                        </View>
                    )}


                />
                <TouchableOpacity onPress={() => { SetModal(true) }}><AntDesign name="pluscircle" size={50} color={"green"} style={styles.plus} /></TouchableOpacity>
                <Modal isVisible={modal}
                    //isVisible={isModalVisible}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                >
                    <View style={styles.Modal}>
                        <TouchableOpacity style={styles.close} onPress={() => { SetModal(false) }}><Fontisto name="close-a" size={15} color={"black"} /></TouchableOpacity>
                        <View style={styles.cont}>
                            <Text style={styles.think}>What do you think?</Text>
                            <Text style={{ textAlign: "justify" }}>Please give the rating clicking stars on the below</Text>
                            <TouchableOpacity style={{flexDirection:'row',alignSelf:"center",marginTop:"4%"}}>
                            <AntDesign name='star' size={25} color={"gold"} />
                                <AntDesign name="star" size={25} color={"gold"} />
                                <AntDesign name='star' size={25} color={"gold"} />
                                <AntDesign name='star' size={25} color={"gold"} />
                                <Feather name='star' size={25} color={"gold"} />
                            </TouchableOpacity>
                           
                        </View>
                        <View style={styles.textin}>
                            <TextInput placeholder='Tell us about your experience.' style={styles.textInput}/>
                        </View>
                        <TouchableOpacity style={styles.btnModal} onPress={() => { SetModal(false) }}><Text style={styles.text}>SUBMIT</Text></TouchableOpacity>

                    </View>

                </Modal>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: "100%",

        flexDirection: "row"
    },
    btn2: {
        marginTop: "2%",
        marginLeft: "2%"
    },
    back: {
        margin: "10%",
        height: 25,
        width: 25,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
        marginLeft: "6%"
    },
    flat: {
        margin: "1%"
    },
    List: {
        flexDirection: "row",
        paddingHorizontal: "12%",
        paddingVertical: "7%",
        marginTop: "1%",
        


    },
    name: {
        fontSize: 18,
        fontWeight: "bold"
    },
    mar: {
        marginLeft: "4%",
        marginTop: "4%"
    },
    line: {
        height: .50,
        width: "95%",
        //borderWidth:1,
        alignSelf: "center",
        backgroundColor: "grey",

    },
    List2: {
        borderRadius: 10,
        backgroundColor: "white",
        marginVertical: "1%",
        marginHorizontal: "4%",
    },
    content: {
        flexDirection: "row",
        marginLeft: "5%",
        margin: "5%"
    },
    rati: {
        fontWeight: "bold",
        alignSelf: "center",
        margin: "1%",
        fontSize: 17
    },
    cont: {
        margin: "5%",
        marginTop: "-7%",
        color: "#8f8f8f",
        fontWeight: "bold"
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 16,
        marginLeft: "-10%"
    },
    plus: {
        marginTop: "-35%",
        alignSelf: "flex-end",
        margin: "10%",
        opacity:500,
        
    },
    btnModal: {
        height: "10%",
        width: "80%",
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        alignSelf:"center",
        marginTop:"5%"
    },
    Modal: {
        backgroundColor: "white",
        height: "60%",
        width: "100%",
        alignSelf: "center",
        // justifyContent: "center",
        // alignItems: "center",
        borderRadius: 16
    },
    close: {
        alignSelf: "flex-end",
        margin: "8%"
    },
    think: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginLeft:"10%"
    },
    cont: {
        alignSelf: "center",
        marginTop:"-5%"

    },
    textin:{
        height:"40%",
        width:"90%",
        backgroundColor:"lightgrey",
       // borderWidth:1,
        alignSelf:"center",
        marginTop:"10%",
        borderRadius:17
    },
    textInput:{
        fontSize:17,
        color:"grey",
        margin:"3%"
    },
    text:{
        fontWeight:"bold",
        fontSize:17,
        color:"white"
    }
})

export default Rating