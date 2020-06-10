import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const greeting = 'Age of empires'
  return (
    <View>
      <Text style={styles.textStyle}>Hi Sowra baby,</Text>
      <Text style={styles.subHeaderStyle}>Lets play {greeting}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
})

export default ComponentsScreen
