import React, { useEffect, useState } from 'react'
import { StyleSheet, Input, Text, View, SafeAreaView, ScrollView, Alert, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';


function ToDoScreen ({navigation, route}) {
const [data, setData] = useState()
const [isLoading, setIsLoading] = useState(true)

useEffect(() =>{
  fetch('https://todo-too-rb-api.web.app/tasks/3m5rYt8z2fQKDDm0wlgrxg3hFh82')
  .then(res => res.json())
  .then(json => {
   setData(json)
   setIsLoading(false)
  })
  .catch(err => console.log(err))
},[])

  console.log('here is data', data)


const {name} = route

return(
    <>
    <View style={styles.container}>
      <SafeAreaView style={{width: '100%'}} >
      <ScrollView>
      {/* <HomeText myName={myName}/> */}
      {/* <Button title='Button' color='red' onPress={() => {
        Alert.alert(
          "Hello Becca",
          "I love your dogs",
          [{
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },{ text: "OK", onPress: () => () => getData() }
          ], { cancelable: false }
        );
        //console.log('pressed'), Alert.alert(`Hi, ${myName}`, 'How are your dogs today')
        }} />
         <Button title='Button' onPress={() => {
         }} /> */}
         <TouchableOpacity >
             <Image 
             style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 30}}
             source={{ 
                uri: 'https://images-na.ssl-images-amazon.com/images/I/718vecXok+L.jpg',
              }}
             />
         </TouchableOpacity>
         <Button title=' Go to New ToDo' type="outline" buttonStyle={{width: 200, alignSelf: 'center', marginVertical: 20}} onPress={()=> navigation.navigate('NewToDo')}/>

          {/* {isLoading 
          ? <ActivityIndicator/> 
          : data.map(todoItem => {
            if (data){
              return(
              <View key={todoItem.id}>
                <Text>{todoItem.item}, {todoItem.id}</Text>
              </View>
              )
            }
          })}

          {isLoading 
          ? <ActivityIndicator/> 
          : <FlatList 
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
            <Text>{item.item}</Text>
          )} />} */}
      {/* <InputForm /> */}
      <View>
      <Input
        placeholder='New Item'
         />
      </View>
      <View>
        {
          isLoading ? (<ActivityIndicator/>) : (
            data.map((x, i) => (
              <ListItem bottomDivider >
                <Avatar source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/718vecXok+L.jpg'}} />
                <ListItem.Content>
                  <ListItem.Title>{x.item}</ListItem.Title>
                  <ListItem.Subtitle>{x.id}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          )
        }

      </View>
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
      width: '100%'
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