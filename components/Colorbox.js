import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ item, isPreviewColorBox }) => {
  let isLightColor = parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1;

  let textColor = isLightColor ? 'black' : 'white';

  const colorStyle = {
    backgroundColor: item.hexCode
  };

  const isPreviewStyle = {
    borderRadius: 0,
    marginVertical: 4,
    marginHorizontal: 4,
    padding: 15
  };

  return (
    <View style={[styles.box, colorStyle, isPreviewColorBox && isPreviewStyle]}>
      {!isPreviewColorBox && (
        <Text style={(styles.text, { color: textColor })}>
          {item.colorName} {item.hexCode}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2
  },
  text: {
    fontWeight: 'bold'
  }
});

export default ColorBox;
