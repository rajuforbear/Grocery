import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
//import Welcome from "./Welcome";
//import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";

const LoginPage = () => {

    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [Email, SetMail] = useState('');
    const [Password, SetPassword] = useState('')
    const GetDataPage = () => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "OCSESSID=82996a004241ed8a64f8c14d3f; currency=INR; language=en-gb");

        var formdata = new FormData();
        formdata.append("email", Email);
        formdata.append("password", Password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://merwans.co.in/index.php?route=api/api/login", requestOptions)
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

                <Text style={styles.welcome}>Welcome Back</Text>
                <Text style={styles.long}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                <View style={[styles.textt, { marginTop: "15%" }]}>

                    <Image style={styles.img2} source={require('../Assests/user.png')} />
                    <TextInput style={styles.placeholder} placeholder="Email" value={Email} onChangeText={(EMAIL) => { SetMail(EMAIL) }} />
                </View>
                <View style={styles.textt}>

                    <Image style={styles.img2} source={require('../Assests/pass.png')} />
                    <TextInput style={styles.placeholder} placeholder="Password"
                        value={Password} onChangeText={(pas)=>{SetPassword(pas)}}

                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => GetDataPage()} ><Text style={styles.button2}>SIGN IN</Text></TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        style={{ height: 40, with: 40, marginLeft: "7%" }} />

                    <Text style={{ marginTop: "3%", color: "black" }}> Keep me sign in</Text>
                    <Text style={styles.forget} >forget password?</Text>
                </View>

                <Text style={styles.notaccount}>Dont have an Account?</Text>
                <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate("Register")}><Text style={styles.text2}>CREAT AN ACCOUNT</Text></TouchableOpacity>

            </ScrollView>
        </View>
    )
};

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
    textt: {
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
    img: {
        flex: .5,
        resizeMode: "contain"
    },
    welcome: {
        fontSize: 25,
        fontWeight: "800",
        marginTop: "3%",
        marginLeft: '3%',
        color: "black"
    },
    long: {
        fontSize: 15,
        marginTop: "3%",
        marginLeft: '3%',
        color: "#D3D3D3"
    },
    img2: {
        height: 25,
        width: 25,
        alignSelf: "center",
        marginLeft: "5%"
    },
    placeholder: {
        marginLeft: "5%",
        fontSize: 17
    },
    forget: {
        color: "green",
        marginHorizontal: "20%",
        marginTop: "3%",
        fontWeight: "bold"
    },
    button2: {
        fontSize: 20,
        fontWeight: "600",
        color: "white"
    },
    notaccount: {
        alignSelf: "center",
        marginTop: "10%"
    },
    button3: {
        borderWidth: 2,
        borderColor: "green",
        height: 45,
        width: "90%",
        marginLeft: "5%",
        marginTop: "3%",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "7%"


    },
    text2: {
        color: "green",
        fontWeight: "bold"
    }
})

export default LoginPage;