import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorPaletteModal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is modal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  },
  text: {}
});

export default ColorPaletteModal;
