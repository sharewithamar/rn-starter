import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Text } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {/* <Text>your password is {password}</Text>*/}
      {password.length < 4 ? (
        <Text> Password must be atleast 4 characters </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
