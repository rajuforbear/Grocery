import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome5";


const CostumDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView 
                contentContainerStyle={{ marginTop:"-5%"}}
            >

                <View style={styles.header}>

                     <Image  style={styles.photo} source={require('../Assests/photo.jpg')} />
                     <View style={styles.txt}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Raju Barde</Text>
                    <Text style={{fontSize:17,color:'white'}}>Rajubarde54@gmail.com</Text>
                </View>

                </View>


                <DrawerItemList {...props}/>
               

            </DrawerContentScrollView>


            <View style={{padding:35, borderTopWidth:1,borderTopColor:"#ccc"}}>
              <TouchableOpacity style={{paddingVertical:15}} onPress={()=>{}}>
                <View style={{flexDirection:"row"}}>
                <Icon name="user-friends" size={27}/>
                 <Text style={{fontSize:15,fontWeight:"bold",margin:"2%"}}>Tell a friend !</Text>
                </View>
               
              </TouchableOpacity>
              <TouchableOpacity style={{paddingVertical:15}} onPress={()=>{}}>
              <View style={{flexDirection:"row"}}>
                <Icon name="thumbs-up" size={27} />
                <Text style={{fontSize:15,fontWeight:"bold",margin:"2%"}}>Like our website!</Text>
                </View>
              </TouchableOpacity>
        </View>
    

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: "10%",
        backgroundColor: "green",
        flexDirection: "row",
        alignItems:'center',
        justifyContent:'center'
      
    },
    photo:{
        height:75,
        width:75,
        borderRadius:100
    },
    txt:{
        marginLeft:"4%"
    }

})

export default CostumDrawer