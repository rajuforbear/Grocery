import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal"
import Ionicons from "react-native-vector-icons/Ionicons"
import Fontisto from "react-native-vector-icons/Fontisto"



const NETBANK = () => {

    const [toggleModal, setToggleModal] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setToggleModal(true)} style={styles.btn}><Text style={{ color: "green" }}>Net Banking</Text></TouchableOpacity>
            <Modal isVisible={toggleModal}>
                <View style={styles.modal}>
                    <Text style={styles.name}>Raju Barde</Text>
                    <TouchableOpacity onPress={() => { setToggleModal(false) }}>
                        <Fontisto name="close-a" size={15} color={"black"} style={styles.cross} />
                    </TouchableOpacity>
                    <View style={styles.search}>
                        <Ionicons name="search" size={30} color={"lightgrey"} style={styles.searchi} />
                        <TextInput placeholder='Search...' style={styles.pla} placeholderTextColor={"lightgrey"}></TextInput>
                    </View>
                    <Text style={styles.name}>ALL BANKS</Text>
                    <Text style={styles.banks}>Bank Of India</Text>
                    <Text style={styles.banks}>Bank Of Baroda</Text>
                    <Text style={styles.banks}>State Bank Of India</Text>
                    <Text style={styles.banks}>Panjab National Bank</Text>
                    <Text style={styles.banks}>Bank Of Maharastra</Text>
                    <Text style={styles.banks}>HDFC Bank</Text>
                    <Text style={styles.banks}>Fino Bank</Text>
                    <Text style={styles.banks}>Chandal Bank</Text>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        width: "50%",
        paddingVertical: "6%",
        borderRadius: 16,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
        borderColor: "green"
    },
    search: {
        borderWidth: 2,
        height: 52,
        width: "90%",
        alignSelf: "center",
        marginTop: "5%",
        borderRadius: 16,
        borderColor: "lightgrey",
        flexDirection: "row"
    },
    searchi: {
        margin: "2%"
    },
    pla: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        width: "95%",
        alignSelf: "center"

    },
    name: {
        fontSize: 19,
        fontWeight: "bold",
        color: "black",
        margin: "5%"
    },
    modal: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 16
    },
    banks: {
        marginLeft: "9%",
        fontSize: 14, fontWeight: "bold",
        color: "black",
        marginVertical: "2%"
    },
    cross: {
        alignSelf: "flex-end",
        marginTop: "-10%",
        marginRight: "5%"
      },
})

export default NETBANK