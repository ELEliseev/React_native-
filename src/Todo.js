import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, removeByID }) => {

    // const onLongPressHandler = (id) => {
    //     console.log("id " + id)

    //     removeByID(id)
    // }
    return (
        <TouchableOpacity activeOpacity={0.1}
            onPress={() => { console.log("todo " + todo.id) }}
            //onLongPress={() => onLongPressHandler(todo.id)}
            //onLongPress={onLongPressHandler}
            onLongPress={removeByID.bind(null, todo.id)}
        >
            <View style={styles.todo}>
                <Text style={styles.text}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    },
    text: {
        color: "blue",
        fontSize: 20,
    }
})