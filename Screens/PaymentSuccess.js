import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'


const PaymentSuccess = () => {
    const Navigation=useNavigation()
  return (
    <View style={styles.container}>
        <AntDesign name="checkcircle" size={70} color={'white'}/>
        <Text style={styles.txt}>Payment Successfull !</Text>
        <View style={styles.btn}>
            <Text style={styles.txx}>Delivery Status</Text>
            <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.navigate("Package")}>
                <AntDesign name="right" size={20} color={"white"}/>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"green",
        alignItems:"center",
        justifyContent:"center"
    },
    txt:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        marginTop:"3%",
        alignSelf:"center",
        margin:"2%"
    },
    btn:{
        marginTop:"5%",
        backgroundColor:"white",
        paddingHorizontal:"5%",
        paddingVertical:"3%",
        flexDirection:"row",
        alignSelf:"center",
        borderRadius:16
    },
    btn2:{
     
          width:50,
        backgroundColor:"green",
        borderRadius:4,
        alignItems:"center",
        justifyContent:"center",
        
    },
    txx:{
        fontWeight:"bold",
        color:"green",
        alignSelf:"center",
        margin:"3%",
        fontSize:17
    }
    
})
export default PaymentSuccess