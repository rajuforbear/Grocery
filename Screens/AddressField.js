import { View, Text, StyleSheet, TextInput } from 'react-native'
import React ,{useState}from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CheckBox from '@react-native-community/checkbox';


const AddressField = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View >

            <Text style={styles.text}>Full Name</Text>
            <View style={styles.TextInput}>
                <TextInput placeholder='Enter your name' />
            </View>
            <Text style={styles.text}>EMAIL</Text>
            <View style={styles.TextInput}>
                <TextInput placeholder='Enter your email address' />
            </View>
            <Text style={styles.text}>PHONE</Text>
            <View style={styles.TextInput}>
                <TextInput placeholder='Enter your phone number' />
            </View>
            <Text style={styles.text}>Address</Text>
            <View style={styles.TextInput}>
                <TextInput placeholder='Enter your address' />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <View>
                    <Text style={styles.text2}>ZIP CODE</Text>
                    <View style={styles.TextInput2}>
                        <TextInput placeholder='Enter here' />
                    </View>
                </View>
                <View>
                    <Text style={styles.text2}>City</Text>
                    <View style={styles.TextInput2}>
                        <TextInput placeholder='Enter here' />
                    </View>
                </View>
            </View>
            <Text style={styles.text}>Country</Text>
            <View style={styles.TextInput}>
                <TextInput placeholder='Enter your country name' />
            </View>
            <View style={{flexDirection:"row"}}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={{marginLeft:"5%"}}
            />
            <Text style={[{alignSelf:"center",fontWeight:"bold"},toggleCheckBox&&{color:"geen"}]}>Save This Address Card</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        //paddingVertical:"1%",
        backgroundColor: "lightgrey",
        borderRadius: 16,
        marginHorizontal: "5%",
        paddingHorizontal: "5%"
    },
    text: {
        fontWeight: "bold",
        margin: "2%",
        marginLeft: "7%",
        marginTop: "5%"
    },
    TextInput2: {
        //paddingVertical:"1%",
        backgroundColor: "lightgrey",
        borderRadius: 16,
        marginLeft: "5%",
        paddingHorizontal: "11%"

    },
    text2: {
        fontWeight: "bold",
        margin: "2%",
        marginLeft: "9%",
        marginTop: "5%"
    }

})

export default AddressField