import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    {
      name: 'Friend1',
      age: 20,
    },
    {
      name: 'Friend2',
      age: 30,
    },
    {
      name: 'Friend3',
      age: 40,
    },
    {
      name: 'Friend4',
      age: 50,
    },
    {
      name: 'Friend5',
      age: 60,
    },
    {
      name: 'Friend6',
      age: 20,
    },
    {
      name: 'Friend7',
      age: 70,
    },
    {
      name: 'Friend8',
      age: 20,
    },
  ]

  //Key should be unique ,string for each item
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item: { name, age } }) => {
        //element === {item: {name:'Friend#1},index:0}
        return (
          <Text style={styles.textStyle}>
            {name} - age {age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
})

export default ListScreen
