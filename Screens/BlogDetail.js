import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const BlogDetail = () => {
    const Navigation=useNavigation()
    return (
        <ScrollView style={{ flex: 1 }}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()}>
                    <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.title}>BlogDetails</Text>
            </View>
            <ImageBackground source={require('../Assests/Tost.jpg')} style={styles.backImage}>
                <View style={styles.backStyle}>
                    <Text style={styles.best}>The Best Foood of This mounth</Text>
                    <View style={{ flexDirection: "row" }}>

                        <Image source={require('../Assests/photo.jpg')} style={{ height: 30, width: 30, borderRadius: 100 }} />
                        <View style={{marginLeft:"3%"}}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: 'white', }}>By Rohan Sahu</Text>
                            <Text style={{ color: "white", fontWeight: "bold", }}>2 hours Ago</Text>
                        </View>

                    </View>
                </View>
            </ImageBackground>
            <Text style={{fontSize:17,fontWeight:"bold",color:"black",
        margin:"5%"}}>What's So Trendy About Food That Everyone Went Crazy Over It?</Text>
        <Text style={{margin:"5%",marginTop:"-5%"}}>Vegetables, including lettuce, corn, tomatoes, onions, celery, cucumbers, mushrooms, and more are also sold at many grocery stores, and are purchased similarly to the way that fruits are. Grocery stores typically stock more vegetables than fruit at any given time, as vegetables remain fresh longer than fruits do, generally speaking.

Donec sit amet eros non massa vehicula porta. Nulla facilisi. Suspendisse ac aliquet nisi, lacinia mattis magna. Praesent quis consectetur neque, sed viverra neque. Mauris ultrices massa purus, fermentum ornare magna gravida vitae. Nulla sit amet est a enim porta gravida.</Text>

        </ScrollView>
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
        marginLeft: "7%",
        marginTop: "2%"
    },
    backImage: {
        width: 350,
        height: 400,
        alignSelf: "center"
    },
    best: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        width: 200
    },
    backStyle: {
        marginTop: "87%",
        marginLeft: "3%"
    }
})

export default BlogDetail