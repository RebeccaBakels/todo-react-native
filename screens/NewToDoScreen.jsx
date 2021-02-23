import React from 'react' 
import {Text, Button} from 'react-native'

function NewToDoScreen ({navigation, route}) {

    return(
        <>
        <Text>{route.name}</Text>
        <Button title="Go Back"  onPress={() => navigation.goBack()}/>
        </>
    )

}

export default NewToDoScreen