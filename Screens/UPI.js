import { View, Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'


const UPI = () => {
  return (
    <View style={{ margin: "5%" }}>
    <Text style={{ marginLeft: "3%" }}>Link via UPI</Text>
    <View style={{ borderWidth: 1, borderRadius: 16, width: "100%", marginTop: "1%" }}>
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

export default UPI