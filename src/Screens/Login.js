import React, { useState } from "react";
import { Text, View, SafeAreaView, ScrollView, Keyboard } from "react-native";
import COLORS from "../Bton/COLORS";
import Button from "../component/Button";
import Input from "../component/Input"
import { useNavigation } from '@react-navigation/native'
import Loader from "../Bton/Loader";
import { Alert } from "react-native/Libraries/Alert/Alert";
const Login = () => {
    const navigation = useNavigation()
    const [erros, setErros] = useState({})
    const [loading, setLoading] = useState(false)
    const [intputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const Vailidate = () => {
        Keyboard.dismiss()
        let valid = true;
        if (!intputs.email) {
            handleError('Please input email', 'email')
            valid = false
        }
        else if (!intputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            handleError('Please input valid email', 'email')
            valid = false
        }


        if (!intputs.password) {
            handleError('please enter password', 'password')
            valid = false
        }
        else if (intputs.password.length < 8) {
            handleError('password must be greater then 8 cheracter', 'password')
            valid = false
        }
        else if (!intputs.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            handleError('pasword must be an Uppercase,a special charter and A number ', 'password')
        }
        if (valid) {
            log()
        }


    }

    const log = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            var myHeaders = new Headers();
            myHeaders.append("Cookie", "OCSESSID=82996a004241ed8a64f8c14d3f; currency=INR; language=en-gb");

            var formdata = new FormData();
            formdata.append("email", intputs.email);
            formdata.append("password", intputs.password);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://merwans.co.in/index.php?route=api/api/login", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)

                })
                .catch(error => {
                    console.log('error', error)
                    alert("Invailid details")
                });

        }, 3000)
    }
    const handleOnChange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }))

    }
    const handleError = (errorMassege, input) => {

        setErros(prevState => ({ ...prevState, [input]: errorMassege }))
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <Loader visible={loading} />
            <ScrollView style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>Login</Text>
                <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>Enter your details to login</Text>
                <View style={{ marginVertical: 20 }}>
                    <Input
                        placeholder="Enter your email address"
                        iconName="email-outline"
                        lable="email"
                        onChangeText={(text) => handleOnChange(text, 'email')}
                        error={erros.email}
                        onFocus={() => {
                            handleError(null, 'email')
                        }
                        }
                    />


                    <Input
                        placeholder="Enter your password"
                        iconName="lock-outline" lable="password"
                        password
                        onChangeText={(text) => handleOnChange(text, 'password')}
                        error={erros.password}
                        onFocus={() => {
                            handleError(null, 'password')
                        }
                        }
                    />
                    <Button titel="Login" onPress={() => Vailidate()} />
                    <Text onPress={() => navigation.navigate("Profile")} style={{ fontSize: 16, color: COLORS.black, textAlign: "center" }}>Don't have an account?Register</Text>
                </View>

            </ScrollView>



        </SafeAreaView>
    )
}
export default Login