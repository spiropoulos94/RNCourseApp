import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddScheme = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ColorPaletteModal')} style={styles.container}>
      <Text style={styles.text}>Add a color scheme</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 40
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#278C82'
  }
});

export default AddScheme;
