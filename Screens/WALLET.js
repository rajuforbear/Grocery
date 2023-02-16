import { View, Text,TouchableOpacity,TextInput,StyleSheet,Image } from 'react-native'
import React from 'react'

const WALLET = () => {
  return (
    <View style={{ margin: "5%" }}>
    <Text style={{ marginLeft: "3%" }}>Link via WALLET</Text>
    <View style={{ borderWidth: 1, borderRadius: 16, width: "100%", marginTop: "1%" ,flexDirection:"row"}}>
        <Image source={require('../Assests/india.png')} style={{height:17,width:25,alignSelf:"center",marginLeft:"2%"}} />
        <Text style={{fontSize:17,fontWeight:"bold",color:"black",margin:"4%"}}>91+</Text>
      <TextInput />
    </View>
    <TouchableOpacity style={styles.btnScr}><Text style={{ color: "white", alignSelf: "center" }}>CONTINUE</Text></TouchableOpacity>
  </View>
  )
}
const styles=StyleSheet.create({
    btnScr: {
        marginTop: "5%",
        backgroundColor: "green",
        paddingVertical: "4.50%",
        borderRadius: 16
      }
})

export default WALLET