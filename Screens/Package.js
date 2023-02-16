import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerItem } from '@react-navigation/drawer'
import Order from './Order';
import OrdeId from './OrdeId';
import { useNavigation } from '@react-navigation/native';


const Package = () => {
  const Navigation=useNavigation()

  const Orders = [
    {
      idx: 1,
      status: "All",
     //
      dot: "white"
    },
    {
      idx: 2,
      status: "On Delevery",
      dot: "yellow"
    },
    {
      idx: 3,
      status: "Completed",
      dot: "green"
    }
  ]
  const [data, setData] = useState(1)

  const [status, setStatus] = useState("All")
  const setStatusFilter = (status, idx) => {

    setStatus(status)

    setData(idx)


  }


  return (
    <SafeAreaView style={{flex:1}}>


      <View style={styles.header}>
        <TouchableOpacity style={styles.btn2} onPress={()=>Navigation.goBack()}>
          <Image source={require("../Assests/back-arrow.png")} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Order Status</Text>

      </View>

      <View style={{ flexDirection: "row" }}>
        {
          Orders.map((item) => (
            <View style={{ flexDirection: "row" }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={styles.btnTab} onPress={() => setStatusFilter(item.status, item.idx)} >
                  <Text style={[styles.text, status === item.status && styles.activeColor,]}>
                    <View style={[styles.dot, status == "All" || {backgroundColor:item.dot}]}>
                    </View> {item.status}</Text>
                </TouchableOpacity>
                <View style={[styles.All,status===item.status&&{backgroundColor:"green"}]}></View>
              </View>
            </View>
          ))
        }
      </View>

      <View style={{flex:1}}>
      {data == 1 && <OrdeId />}
      {data == 2 && <OrdeId />}
      {data == 3 && <OrdeId/>}
      </View>


    </SafeAreaView>
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
    marginLeft: "6%"
  },
  btnTab: {
    //  / borderWidth:1,
    //width:85
    marginHorizontal: "1%"
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 100,
    // borderWidth: 1,
    //marginTop:"10%"
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: "-3%"
  },
  activeColor: {
    // backgroundColor:"green",
    color: "green",
  },
  activeColor2: {
    // backgroundColor:"green",
    backgroundColor: "green",
  },
  All: {
    height: "7%",
    width: "75%",
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginLeft: "25%",
    marginTop: "2%"

  },
  All2: {
    marginLeft: "-1%"
  }
})

export default Package