import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput ,FlatList} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Icon from "react-native-vector-icons/FontAwesome5"



const Favourite = () => {
  const Deals = [
    {
      icon: "heart",
      item: require('../Assests/chicekn.jpg'),
      name: "chicken village",
      price: "$10.9",
      start: "star",

    },
    {
      icon: "heart",
      item: require('../Assests/chicekn.jpg'),
      name: "chicken village",
      price: "$10.9",
      start: "star",

    },
    {
      icon: "heart",
      item: require('../Assests/chicekn.jpg'),
      name: "chicken village",
      price: "$10.9",
      start: "star",

    },
    {
      icon: "heart",
      item: require('../Assests/chicekn.jpg'),
      name: "chicken village",
      price: "$10.9",
      start: "star",

    },
    {
      icon: "heart",
      item: require('../Assests/chicekn.jpg'),
      name: "chicken village",
      price: "$10.9",
      start: "star",

    },
    {
      icon: "heart",
      item: require('../Assests/chicekn.jpg'),
      name: "chicken village",
      price: "$10.9",
      start: "star",

    },
    {
      icon: "heart",
      item: require('../Assests/chicekn.jpg'),
      name: "chicken village",
      price: "$10.9",
      start: "star",

    },
    {
      icon: "heart",
      item: require('../Assests/chicekn.jpg'),
      name: "chicken village",
      price: "$10.9",
      start: "star",

    },

  ]
  return (



    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn2}>
          <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>

      </View>
      <View style={styles.search}>
        <Ionicons name="search" size={30} color={"lightgrey"} style={styles.searchi} />
        <TextInput placeholder='Search...' style={styles.pla} placeholderTextColor={"lightgrey"}></TextInput>
      </View>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black", margin: "5%" }}>Popular Deals</Text>
      <FlatList
        //stickyHeaderIndices={false}
        style={{}}
        data={Deals}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.Deals}>
            <Icon name={item.icon} size={15} color={"pink"} style={{ margin: "5%" }} />
            <Text style={{ margin: "5%", alignSelf: "flex-end", marginTop: "-15%", fontSize: 12, color: "gold" }}> 3 <Icon name="star" size={12} color={"gold"} /></Text>

            <Image style={styles.img2} source={item.item}></Image>
            <Text style={{ fontSize: 16, fontWeight: "800", color: "grey", alignSelf: "center" }}>Chicken Village</Text>
            <Text style={{ alignSelf: "center", fontWeight: "500", color: "gold" }}>{item.price}</Text>
            <TouchableOpacity style={styles.btn}><Text style={{ color: "white" }}>Add TO Cart</Text></TouchableOpacity>
          </View>
        )
        }

      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "green",
    borderRadius: 16,
    paddingHorizontal: "0%",
    paddingVertical: "3%",
    margin: "15%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%"

  },
  img2: {
    width: 100,
    height: 100,
    marginTop: "-19%",
    alignSelf: "center",
    //marginTop:"10%"
  },
  Deals: {

    //  marginHorizontal: "2%",
  
      marginVertical: "2%",
      margin: "1%",
      backgroundColor: "white",
      borderRadius: 17,
      height:200,
      width:170
  
  
    },
  header: {
    height: 50,
    width: "100%",

    flexDirection: "row"
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
    marginLeft: "12%"
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
    width: "95%"

  },
  btn2: {
    marginTop: "2%",
    marginLeft: "2%"
},
})

export default Favourite