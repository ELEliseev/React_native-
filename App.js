import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'
import { Todo } from './src/Todo'
//https://reactnative.dev/docs/
export default function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (title) => {
    //   const newTodo = {
    //     id: Date.now().toString(),
    //     title: title,
    //   }

    //setTodos(todos.concat([newTodo]))
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })
    setTodos((prev) => [
      {
        id: Date.now().toString(),
        title: title,
      },
      ...prev,
    ])
  }
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)
    )
  }
  return (
    <View >
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => {
            return <Todo todo={item} removeByID={removeTodo} />
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 22,
  }
});
//https://clc.to/rnative  end free go