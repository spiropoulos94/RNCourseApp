import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ListFooter = ({ handleSubmit }) => {
  return (
    <TouchableOpacity onPress={handleSubmit} style={styles.container}>
      <Text style={styles.text}>Submit!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F8C75',
    padding: 12,
    borderRadius: 5
  },
  text: {
    textAlign: 'center',
    color: 'white'
  }
});

export default ListFooter;
