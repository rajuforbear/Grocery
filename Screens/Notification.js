import { FlatList,View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Notification = () => {

     const Navigation=useNavigation()

         
        const DATA=[
          {
          img:require("../Assests/photo.jpg"),
          time: "5 Hour Ago",
          title:"@Rohan and 5 others",
          com:"like your comment",
          comment:"this is a best food"
        },
          {
          img:require("../Assests/photo.jpg"),
          time: "5 Hour Ago",
          title:"@Rohan and 5 others",
          com:"like your comment",
          comment:"this is a best food do you like it from the rangometaion in the waluee that are very"
        },
          {
          img:require("../Assests/photo.jpg"),
          time: "5 Hour Ago",
          title:"@Rohan and 5 others",
          com:"like your comment",
          comment:"this is a best food"
        },
          {
          img:require("../Assests/photo.jpg"),
          time: "5 Hour Ago",
          title:"@Rohan and 5 others",
          com:"like your comment",
          comment:"this is a best food"
        },
      ]
   


  return (
   <ScrollView>
    <View style={styles.header}>
        <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()}>
          <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>

      </View>
      <Text style={{fontSize:20,fontWeight:"bold",margin:"5%",color:"black"}}>Today</Text>

   <FlatList 
      
      data={DATA}

      renderItem={({item})=>(
        <View style={{height:60,width:"100%",flexDirection:"row",marginVertical:"3%",marginTop:"4%",marginLeft:"3%"}}>
          <Image style={{height:70,width:60,borderRadius:9 }} source={item.img}/>
          <View style={{marginLeft:"3%",marginTop:"2%"}}>
            
            <Text>{item.time}</Text>
            <Text style={{fontSize:15,fontWeight:"700",color:"green"}}>{item.title} <Text style={{fontSize:15,fontWeight:"700",color:"grey"}}>{item.com}</Text></Text>
            <Text>"{item.comment}"</Text>

          </View>
        </View>
      )}
   
   />
     <Text style={{fontSize:20,fontWeight:"bold",margin:"5%",color:"black"}}>One Year Ago</Text>
     
   <FlatList 
      
      data={DATA}

      renderItem={({item})=>(
        <View style={{height:60,width:"100%",flexDirection:"row",marginVertical:"3%",marginTop:"4%",marginLeft:"3%"}}>
          <Image style={{height:70,width:60,borderRadius:9 }} source={item.img}/>
          <View style={{marginLeft:"3%",marginTop:"2%"}}>
            
            <Text>{item.time}</Text>
            <Text style={{fontSize:15,fontWeight:"700",color:"green"}}>{item.title} <Text style={{fontSize:15,fontWeight:"700",color:"grey"}}>{item.com}</Text></Text>
            <Text>"{item.comment}"</Text>

          </View>
        </View>
      )}
   
   />


   </ScrollView>
  )
}
const styles=StyleSheet.create({
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
  marginLeft: "6%"
},
})

export default Notification