import React, {useState} from 'react'
import { TextInput } from 'react-native';
import { Input } from 'react-native-elements';


const InputForm = () => {
    const [value, setValue] = useState('')

    return(
        <>
        {/* <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setValue(text)}
            value={value}
        /> */}
        <Input
        placeholder='New Item'
        
        />
        </>
    )
}



export default InputForm