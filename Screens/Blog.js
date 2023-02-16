import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'




const Blog = () => {

  const Navigation=useNavigation();

  const Data = [
    {
      img: require("../Assests/Tost.jpg"),
      like: "The best food of this month",
      desc: "Lroen monsen is simply dommy text form my react natvive app",
      time: "2 hors ago ",
      name: "Emily jain",
      red: "read by"
    },
    {
      img: require("../Assests/Tost.jpg"),
      like: "The best food of this month",
      desc: "Lroen monsen is simply dommy text form my react natvive app",
      time: "2 hors ago ",
      name: "Emily jain",
      red: "read by"
    },
    {
      img: require("../Assests/Tost.jpg"),
      like: "The best food of this month",
      desc: "Lroen monsen is simply dommy text form my react natvive app",
      time: "2 hors ago ",
      name: "Emily jain",
      red: "read by"
    },
    {
      img: require("../Assests/Tost.jpg"),
      like: "The best food of this month",
      desc: "Lroen monsen is simply dommy text form my react natvive app",
      time: "2 hors ago ",
      name: "Emily jain",
      red: "read by"
    },
    {
      img: require("../Assests/Tost.jpg"),
      like: "The best food of this month",
      desc: "Lroen monsen is simply dommy text form my react natvive app",
      time: "2 hors ago ",
      name: "Emily jain",
      red: "read by"
    },
    {
      img: require("../Assests/Tost.jpg"),
      like: "The best food of this month",
      desc: "Lroen monsen is simply dommy text form my react natvive app",
      time: "2 hors ago ",
      name: "Emily jain",
      red: "read by"
    },
  ]

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()}>
          <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Blog</Text>

      </View>
      <View style={styles.search}>
        <Ionicons name="search" size={30} color={"lightgrey"} style={styles.searchi} />
        <TextInput placeholder='Search...' style={styles.pla} placeholderTextColor={"lightgrey"}></TextInput>
      </View>
      <Image style={styles.photo} source={require("../Assests/Tost3.jpg")} />
      <View style={styles.flat}>
        <FlatList
          data={Data}

          renderItem={({ item }) => (
            <TouchableOpacity style={styles.list}
              onPress={()=>{Navigation.navigate("BlogDetail")}}
            >
              <Image style={styles.photo2} source={item.img} />
              <View style={styles.mar}>
                <Text style={styles.like}>{item.like}</Text>
                <Text style={styles.txt}>{item.desc}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>{item.time}</Text>
                  <View style={{ height: 9, width: 9, borderRadius: 100, backgroundColor: "grey", alignSelf: "center", marginLeft: "1%" }}></View>
                  <Text style={{ fontWeight: "bold", marginLeft: "1%" }}>{item.red} {item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}


        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    marginLeft: "15%",
    marginTop: "2%"
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
  pla: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    width: "95%"

  },
  searchi: {
    margin: "2%"
  },
  photo: {
    height: "20%",
    width: "95%",
    alignSelf: "center",
    margin: "5%",
    borderRadius: 16
  },
  flat: {
    margin: "1%"
  },
  list: {
    //borderWidth:1,
    paddingHorizontal: "10%",
    paddingVertical: "2%",
    flexDirection: "row",
    margin: "1%",
    borderRadius: 16,
    backgroundColor: "white"
  },
  photo2: {
    height: 100,
    width: 100,
    borderRadius: 9,
    marginLeft: "-10%"
  },
  like: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black"
  },
  mar: {
    margin: "2%"
  },
  txt: {
    //textAlign:"center",
    width: 250
  }
})

export default Blog