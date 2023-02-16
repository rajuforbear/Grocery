import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button,Animated } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons/FontAwesome"
import Modal from "react-native-modal";
import Fontisto from "react-native-vector-icons/Fontisto"
import Entypo from "react-native-vector-icons/Entypo"
import UPI from './UPI';
import WALLET from './WALLET';
import NETBANK from './NETBANK';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {

  const Navigation=useNavigation()

  const Data = [
    {
      Name: "Cards",
      icon: "credit-card",  //FontAwesome5
      desc: "Add creadit Debit & ATM Cards",
      page:UPI
    },
    {
      Name: "UPI",
      icon: "id-card",  //FontAwesome5
      desc: "Pay Via UPI",
      page:UPI
      
    },
    {
      Name: "WALLET",
      icon: "google-wallet",  //FontAwesome5
      desc: "Wallet",
      page:WALLET 
    },
    {
      Name: "Net Banking",
      icon: "bank",  //FontAwesome5
      desc: "NetBanking",
      page:NETBANK
    },


  ]
  const [ModalState, setModalState] = useState(false)
  const [name,setName]=useState('')
  const [boolBtn,setBoolBtn]=useState(false)
  const animation=new Animated.Value(400)
  const[arrow,setArrow]=useState(false)

  const Scrolable = (nm) => {
    const toValue=false
  
  
    Animated.timing(animation, {
      toValue,
      duration: 1000,
      useNativeDriver:false
  }).start();
  setName(nm)
  setBoolBtn(!boolBtn)
  setArrow(!arrow)
  }

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
});


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()} >
          <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>

      </View>
      <Text style={styles.PaymentMode}>Select Payment Mode</Text>
      <FlatList

        data={Data}

        renderItem={({ item }) => (
          <View style={styles.wit} >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.green}></View>
              <Text style={styles.PaymentMode2}>{item.Name}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              if (item.Name === "Cards") setModalState(true)
              else
              {
                Scrolable(item.Name)
              }


            }} style={styles.ptm}>
              <Icon name={item.icon} size={20} />
              <Text style={styles.ptm2}>{item.desc}</Text>

            </TouchableOpacity>
           { arrow==false &&<Entypo name='chevron-small-right' size={35} style={{ alignSelf: "flex-end", marginTop: "-10%" }} />}
          { arrow==true&&name==item.Name&&  <Entypo name='chevron-small-down' size={35} style={{ alignSelf: "flex-end", marginTop: "-10%" }} />}
            {
              item.Name==name &&boolBtn&&
            <Animated.View><item.page/></Animated.View>
        }
          </View>
        )}

      />
      <Modal isVisible={ModalState}>
        <View style={styles.modal} >
          <View >
            <Text style={styles.hide}>ADD CARD</Text>
            <TouchableOpacity onPress={() => { setModalState(false) }}>
              <Fontisto name="close-a" size={15} color={"black"} style={styles.cross} />
            </TouchableOpacity>
            <Text style={styles.place}>Card Holder Name</Text>
            <View style={styles.search}>
              <TextInput />
            </View>
            <Text style={styles.place}>Card Number</Text>
            <View style={styles.search}>
              <TextInput />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ margin: "5%", marginLeft: "10%" }}>
                <Text>Expiry Date</Text>
                <View style={styles.search2}>
                  <TextInput />

                </View>
              </View>
              <View style={{ margin: "5%", marginTop: "5%" }}>
                <Text>Security Code</Text>
                <View style={[styles.search2, {}]}>
                  <TextInput />

                </View>
              </View>
            </View>



          </View>
          <TouchableOpacity style={styles.btnModal} onPress={() => setModalState(false)}><Text style={styles.txe}>Added...</Text></TouchableOpacity>
        </View>

      </Modal>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "lightgrey"
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "white",

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
  PaymentMode: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    margin: "5%"
  },
  PaymentMode2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: "4%",
    marginTop: "-3%"
  },
  wit: {
    marginTop: "3%",
    paddingHorizontal: "2%",
    paddingVertical: "6%",
    backgroundColor: "white",
    margin: "2%",
    borderRadius: 9
  },
  green: {
    height: 25,
    width: 7,
    backgroundColor: "green",
    marginLeft: "-2.10%",
    marginTop: "-3%",
    borderTopRightRadius: 2,
    borderBottomEndRadius: 2
  },
  ptm: {
    flexDirection: "row",
    marginTop: "4%",
    marginLeft: "4%"
  },
  ptm2: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
    alignSelf: "center",
    marginLeft: "3%"
  },
  modal: {
    height: 450,
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 16
  },
  hide: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    margin: "4%"
  },
  cross: {
    alignSelf: "flex-end",
    marginTop: "-6%",
    marginRight: "5%"
  },
  place: {
    marginLeft: "9%",
    marginTop: "5%",
    // color:"lightgrey"
  },
  search: {
    borderWidth: 1,
    //height:"12%",
    //width:"86%",
    width: "86%",
    paddingLeft: "5%",
    //paddingVertical:".1%",
    alignSelf: "center",
    borderRadius: 16,
    marginTop: "3%",
    borderColor: "lightgrey"
  },
  search2: {
    borderWidth: 1,
    width: 120,
    borderColor: "lightgrey",
    borderRadius: 16,
    marginTop: "1%"


  },
  btnModal: {
    marginHorizontal: "10%",
    borderRadius: 16, paddingVertical: "4%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  txe: {
    fontWeight: "bold",
    color: "white"
  },
  btnScr: {
    marginTop: "5%",
    backgroundColor: "green",
    paddingVertical: "4.50%",
    borderRadius: 16
  }
})

export default Payment