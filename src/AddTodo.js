import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value)
            setValue('')
        }
        else{
            //error
            Alert.alert('error: not name!')
        }
   
    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.textInput}
                onChangeText={text => setValue(text)} 
                value={value}
                placeholder={"input name..."}
                autoCorrect = {false}
                autoCapitalize='characters'
                />
            <Button title="Add" onPress={pressHandler}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    textInput: {
        color: "blue",
        fontSize: 25,
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3555ab',
    }
})