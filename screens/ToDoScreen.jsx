import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Alert, TouchableOpacity, Image } from 'react-native';


function ToDoScreen ({navigation, route}) {
const [data, setData] = useState()

useEffect(() =>{

    const getData = () => {
    fetch('https://api.sampleapis.com/beers/ale')
    .then(res => setData(res.json()))
    .catch(err => console.log(err))
    }
    getData()
},[])

const {name} = route

return(
    <>
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView>
      {/* <HomeText myName={myName}/> */}
      <Button title='Button' color='red' onPress={() => {
        Alert.alert(
          "Hello Becca",
          "I love your dogs",
          [{
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },{ text: "OK", onPress: () => console.log("OK Pressed") }
          ], { cancelable: false }
        );
        //console.log('pressed'), Alert.alert(`Hi, ${myName}`, 'How are your dogs today')
        }} />
         <Button title='Button' onPress={() => {
         }} />
         <TouchableOpacity onPress={()=> navigation.navigate('NewToDo')}>
             <Image 
             style={{ width: 200, height: 200}}
             source={{ 
                uri: 'https://images-na.ssl-images-amazon.com/images/I/718vecXok+L.jpg',
              }}
             />
         </TouchableOpacity>
         <Text>{name}</Text>
         {data.map()}
      </ScrollView>
    </SafeAreaView>
    </View>
    </>
)}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      // paddingVertical: '15%'
    },
    heading: {
      color: 'blue',
      fontWeight: '800',
      marginBottom: 400
    }
  });
  const btn = StyleSheet.create({
    btn_one: {
      color: 'red',
    },
  });

export default ToDoScreen