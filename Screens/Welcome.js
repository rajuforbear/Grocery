import { View, Text, FlatList, Image ,useWindowDimensions, StyleSheet, YellowBox, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation=useNavigation();
    const Items=
    [{
         title:"Welcome to Grocery Application",
         desc:"Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually eaten raw,",
         img:require("../Assests/fruis.png")
    },
    {
         title:"Welcome to Grocery Application",
         desc:"Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually eaten raw,",
         img:require("../Assests/fruis.png")
    },
    {
         title:"Welcome to Grocery Application",
         desc:"Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually eaten raw,",         
         img:require("../Assests/fruis.png")
    },
    {
         title:"Welcome to Grocery Application",
         desc:"Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually eaten raw,",         
         img:require("../Assests/fruis.png")
    },
    {
         title:"Welcome to Grocery Application",
         desc:"Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually eaten raw,",
         img:require("../Assests/fruis.png")
    },
    ]
    const {width}=useWindowDimensions();

  return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{height:"90%",width:"100%",}}>
        <FlatList
       
       
          data={Items}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator
          
          renderItem={({item})=>(
            
             
            <View style={[styles.container,{width}]}>

               <Image style={[styles.image,{width,resizeMode:"contain"}]} source={item.img} />
               <View style={{flex:.3}}>
                <Text style={styles.titlel}>{item.title}</Text>
                <Text style={styles.description}>{item.desc}</Text>
               </View>

            </View>
          )}
        />
        </View>
    <TouchableOpacity style={{borderRadius:10,height:"6%",marginTop:"1%",width:"85%",alignSelf:"center",backgroundColor:"green",alignItems:"center",justifyContent:"center"}}
    onPress={()=>{navigation.navigate("Login")}}><Text style={{fontSize:20,fontWeight:"600",color:"white"}}>NEXT</Text></TouchableOpacity>
      </View>
  )
};
const styles=StyleSheet.create({

  container:{
       flex:1,
       justifyContent:"center",
      
  },
  image:{
    flex:0.4,
  
  
    justifyContent:"center"
  },
  titlel:{
    marginTop:"30%",
   fontWeight:"800",
   fontSize:28,
  
   color:"#493d8a",
   textAlign:"center"
  },
  description:{
    fontWeight:'400',
    color:"#62656b",
    textAlign:"center",
    paddingHorizontal:60

  }
})