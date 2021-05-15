import React, { useState } from 'react';
import { Text, Switch, View, StyleSheet, TouchableOpacity } from 'react-native';

const ModalColorSwitch = ({ item, setNewPalette }) => {
  // console.log({ item });

  const toggleSwitch = () => {};

  return (
    <View style={[styles.container]}>
      <Text>{item.colorName}</Text>
      <Switch value={false} onValueChange={toggleSwitch} />
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
