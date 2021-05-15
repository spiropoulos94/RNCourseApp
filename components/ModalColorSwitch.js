import React from 'react';
import { Text, Switch, View, StyleSheet, TouchableOpacity } from 'react-native';

const ModalColorSwitch = ({ item }) => {
  console.log({ item });
  return (
    <View style={[styles.container]}>
      <Text>{item.colorName}</Text>
      <Switch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default ModalColorSwitch;
