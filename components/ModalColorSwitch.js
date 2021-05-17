import React, { useState, useEffect } from 'react';
import { Text, Switch, View, StyleSheet, TouchableOpacity } from 'react-native';

const ModalColorSwitch = ({ item, setColors, colors }) => {
  console.log({ item });
  const toggleSwitch = () => {
    // setValue(!value);
    setColors((prev) => {
      prev.forEach((color) => {
        if (color.hexCode === item.hexCode) {
          color.checked = !color.checked;
        }
      });
      return [...prev];
    });
  };

  // useEffect(() => {
  //   setNewPalette((prev) => []);
  // }, [value]);

  return (
    <View style={[styles.container]}>
      <Text>{item.colorName}</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={[styles.preview, { backgroundColor: item.hexCode }]}></View>
        <Switch value={item.checked} onValueChange={toggleSwitch} />
      </View>
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
  },
  preview: {
    padding: 12,
    width: 140,
    marginRight: 10
  }
});

export default ModalColorSwitch;
