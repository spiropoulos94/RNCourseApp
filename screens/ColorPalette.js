import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/Colorbox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <View style={styles.container}>
      <FlatList data={colors} renderItem={({ item }) => <ColorBox item={item} />} keyExtractor={({ hexCode }) => hexCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },

  text: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default ColorPalette;
