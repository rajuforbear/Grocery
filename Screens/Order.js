import { View, Text} from 'react-native'
import React from 'react'

const Order = () => {
  return (
    <View style={{marginLeft:"13%"}}>
      <View style={{flexDirection:"row",marginTop:"3%"}}>
        <View style={{height:15,width:15,borderRadius:100,backgroundColor:"green"}}></View>
        <View>
         <Text style={{fontSize:18,fontWeight:"500",marginTop:"-6%",marginHorizontal:"5%"}}>Order Placed</Text>
         <Text style={{fontSize:12,marginLeft:"5%"}}>January 19th,12:02 AM</Text>
        </View>
      </View>
      <View style={{flexDirection:"row",marginTop:"12%"}}>
        <View style={{height:15,width:15,borderRadius:100,backgroundColor:"green"}}></View>
        <View>
         <Text style={{fontSize:18,fontWeight:"500",marginTop:"-6%",marginHorizontal:"5%"}}>Order Confirmed</Text>
         <Text style={{fontSize:12,marginLeft:"5%"}}>January 19th,12:02 AM</Text>
        </View>
      </View>
      <View style={{flexDirection:"row",marginTop:"12%"}}>
        <View style={{height:15,width:15,borderRadius:100,backgroundColor:"green"}}></View>
        <View>
         <Text style={{fontSize:18,fontWeight:"500",marginTop:"-6%",marginHorizontal:"5%"}}>Order delivery by Curior</Text>
         <Text style={{fontSize:12,marginLeft:"5%"}}>January 19th,12:02 AM</Text>
        </View>
      </View>
      <View style={{flexDirection:"row",marginTop:"12%"}}>
        <View style={{height:15,width:15,borderRadius:100,backgroundColor:"skyblue"}}></View>
        <View>
         <Text style={{fontSize:18,fontWeight:"500",marginTop:"-6%",marginHorizontal:"5%",color:"skyblue"}}>Order delivery by Curior</Text>
         <Text style={{fontSize:12,marginLeft:"5%",color:"skyblue"}}>January 19th,12:02 AM</Text>
        </View>
      </View>
    </View>
  )
}

export default Order