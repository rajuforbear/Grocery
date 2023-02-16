import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';






const Home = () => {
  const Navigation = useNavigation();
  const images =
    [
      {
        key: "1",
        img: require("../Assests/gro.jpg"),

      },
      {
        key: "2",
        img: require("../Assests/gro.jpg"),

      },
      {
        key: "3",
        img: require("../Assests/gro.jpg"),

      },
      {
        key: "4",
        img: require("../Assests/gro.jpg"),

      },
      {
        key: "5",
        img: require("../Assests/gro.jpg"),

      },
      {
        key: "6",
        img: require("../Assests/gro.jpg"),

      }
    ]

  const Catagories = [
    {
      icon: "fruit-grapes",
      img: require("../Assests/fruits.jpg"),
      name: "Fruits",
      total: "45 Items",
      color: "skyblue"
    },
    {
      icon: "fish",
      img: require("../Assests/fish.jpg"),
      name: "Fish",
      total: "45 Items",
      color: "pink"

    },
    {
      icon: "food",
      img: require("../Assests/chicken.webp"),
      name: "Chicken",
      total: "45 Items",
      color: 'green'
    },
    {
      icon: "pizza",
      img: require("../Assests/pizza.jpg"),
      name: "Pizza",
      total: "45 Items",
      color: "yellow"
    },
  ]

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
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ margin: "3%" }}>
      <Text>good moring</Text>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>Raju Barde <Icon name="snowman" size={22} color={"#eb9534"} /></Text>
    </View>
    <View style={styles.notification} ><Text style={{ fontWeight: "700", fontSize: 20, marginLeft: "15%", color: "#eb9534" }} >6</Text>
      <Ionicons name='md-notifications-circle' size={46} color={"#eb9534"} style={styles.bell} />
    </View>
    <View style={styles.search}>
      <Ionicons name="search" size={30} color={"lightgrey"} style={styles.searchi} />
      <TextInput placeholder='Search...' style={styles.pla} placeholderTextColor={"lightgrey"}></TextInput>
    </View>
    <View style={styles.slider}>

      <FlatList
        horizontal={true}
        data={images}

        renderItem={({ item }) => (





          <ImageBackground style={styles.img} imageStyle={{ borderRadius: 21 }} source={item.img}>
            <View style={styles.happy}>
              <Text style={{ fontSize: 12, color: "black" }}>Happy Weekend</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>50% OFF</Text>
              <Text style={{ fontSize: 12, color: "black" }}>*For All Menus</Text>
            </View>
          </ImageBackground>

        )}
      />
    </View>
    <View style={{ margin: "5%", flexDirection: "row" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Categories</Text>
      <TouchableOpacity onPress={() => Navigation.navigate("Categories")} style={{
        marginLeft: "65%",
        marginTop: "2%"
      }}><AntDesign name="right" size={23} />
      </TouchableOpacity>
    </View>
    <FlatList
      data={Catagories}
      horizontal={true}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => Navigation.navigate("Categories")}>
          <ImageBackground style={{ height: 80, width: 100, margin: 7, alignItems: "center", justifyContent: "center", backgroundColor: item.color, borderRadius: 17, }} blurRadius={30} imageStyle={{ borderRadius: 17 }} source={item.img}>
            <MaterialCommunityIcons name={item.icon} size={31} color={"white"} />
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>{item.name}</Text>

            <Text style={{ fontSize: 13, fontWeight: 'bold', color: "white" }}>{item.total}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />

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
          <TouchableOpacity style={styles.btn}><Text style={{ color: "white" }} onPress={() => Pruducts()}>Add TO Cart</Text></TouchableOpacity>
        </View>
      )
      }

    />
  </ScrollView>
)
}
const styles = StyleSheet.create({

  happy: {

    margin: "4%"
  },
  notification: {
    alignSelf: "flex-end",
    height: 35,
    width: "20%",
    backgroundColor: "lightgrey",
    borderWidth: 1,
    marginRight: "5%",
    marginTop: "-12%",
    borderRadius: 16,
    flexDirection: "row"
  },
  bell: {
    marginLeft: "14%",
    marginTop: "-12%"
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
  slider: {
    marginTop: "2%",
    // borderWidth:2,
    height: 100,
    width: "97%",
    alignSelf: "center",
    borderRadius: 13
  },
  img: {
    height: 100,
    width: 280,
    marginHorizontal: 2,
    borderRadius: 17,




  },
  Deals: {

    //  marginHorizontal: "2%",

    marginVertical: "2%",
    margin: "1%",
    backgroundColor: "white",
    borderRadius: 17,
    height: 200,
    width: 170


  },
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
    width: 90,
    height: 80,
    //marginTop: "-25%",
    alignSelf: "center",

    marginTop: "-5%",
    borderRadius: 16
  }
})
export default Home