import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.view1Style}></View>
      <View style={styles.view2Style}></View>
      <View style={styles.view3Style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1Style: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  view2Style: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  view3Style: {
    height: 100,
    width: 100,
    backgroundColor: 'violet',
  },

  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  text1Style: {
    borderWidth: 1,
    borderColor: 'red',
  },
  text2Style: {
    borderWidth: 1,
    borderColor: 'red',
    fontSize: 18,
    backgroundColor: 'green',
    ...StyleSheet.absoluteFillObject,
  },
  text3Style: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default BoxScreen;
