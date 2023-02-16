import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"

const Register = () => {

    const [FirstName, SetFirstName] = useState('')
    const [LaststName, SetLastName] = useState('')
    const [Mail, SetMail] = useState('');
    const [Phone, SetPhone] = useState('');
    const [Password, SetPassword] = useState('')
    const UserRegister = () => {
        

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "OCSESSID=82996a004241ed8a64f8c14d3f; currency=INR; language=en-gb");

        var formdata = new FormData();
        formdata.append("firstname", FirstName);
        formdata.append("lastname", LaststName);
        formdata.append("telephone", Phone);
        formdata.append("email", Mail);
        formdata.append("password",Password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://merwans.co.in/index.php?route=api/api/register", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image style={styles.img} source={require('../Assests/store.png')} />
                <Text style={{ fontWeight: "900", fontSize: 25, color: "black", textAlign: 'center', paddingHorizontal: 60, marginBottom: "10%" }}>Welcome To Online Cacke Store</Text>
            </View>
            <ScrollView style={styles.log}>

                <Text style={styles.welcome}>Create An Account</Text>
                <Text style={styles.long}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                <View style={styles.text}>
                    <Feather name="user" size={20} style={{ alignSelf: "center", marginLeft: "5%" }} />
                    <TextInput placeholder='Enter First Name' style={{ fontSize: 17, marginLeft: "2%" }} value={FirstName} onChangeText={(name) => { SetFirstName(name) }} />
                </View>
                <View style={styles.text}>
                    <Feather name="user" size={20} style={{ alignSelf: "center", marginLeft: "5%" }} />
                    <TextInput placeholder='Enter Last Name' style={{ fontSize: 17, marginLeft: "2%" }} value={LaststName} onChangeText={(name) => { SetLastName(name) }} />
                </View>
                <View style={styles.text}>
                    <Feather name="mail" size={20} style={{ alignSelf: "center", marginLeft: "5%" }} />
                    <TextInput placeholder='Enter Email' style={{ fontSize: 17, marginLeft: "2%" }} value={Mail} onChangeText={(mail) => { SetMail(mail) }} />
                </View>
                <View style={styles.text}>
                    <Feather name="mail" size={20} style={{ alignSelf: "center", marginLeft: "5%" }} />
                    <TextInput placeholder='Enter Moblie Number' style={{ fontSize: 17, marginLeft: "2%" }} keyboardType={"number-pad"} value={Phone} onChangeText={(phone) => { SetPhone(phone) }} />
                </View>
                <View style={styles.text}>
                    <Feather name="lock" size={20} style={{ alignSelf: "center", marginLeft: "5%" }} />
                    <TextInput placeholder='Password' style={{ fontSize: 17, marginLeft: "2%" }} keyboardType={"number-pad"} value={Password} onChangeText={(phone) => { SetPassword(phone) }} />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => UserRegister()} ><Text style={styles.button2}>SIGN IN</Text></TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "35%",
        width: "100%",
        //borderWidth:2
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center"

    },
    log: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        marginTop: "-10%",
        borderRadius: 30
    },
    long: {
        fontSize: 15,
        marginTop: "3%",
        marginLeft: '3%',
        color: "#D3D3D3"
    },
    welcome: {
        fontSize: 25,
        fontWeight: "800",
        marginTop: "3%",
        marginLeft: '3%',
        color: "black"
    },
    img: {
        flex: .5,
        resizeMode: "contain"
    },
    text: {

        height: 45,
        width: "90%",
        marginLeft: "5%",
        marginTop: "3%",
        backgroundColor: "lightgrey",
        borderRadius: 20,
        flexDirection: "row"


    },
    button: {
        height: 45,
        width: "90%",
        marginLeft: "5%",
        marginTop: "3%",
        backgroundColor: "green",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "7%"


    },
    button2: {
        fontSize: 20,
        fontWeight: "600",
        color: "white"
    },
})
export default Register