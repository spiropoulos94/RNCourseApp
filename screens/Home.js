import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/Colorbox';

const SERIALIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' }
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' }
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' }
];

const COLOR_PALETTES = [{ SERIALIZED }, { RAINBOW }, { FRONTEND_MASTERS }];

const capitalizeFirstLetterOfEachWord = (sentence) => {
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  sentence = words.join(' ');
  return sentence;
};

const HomeOption = ({ navigation, paletteName, colors }) => {
  // console.log('props inside HomeOption', { navigation, paletteName, colors });
  return (
    <View style={{ backgroundColor: 'white' }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', { paletteName: paletteName, colors: colors });
        }}>
        <Text style={{ fontSize: 18 }}>{paletteName}</Text>
        <FlatList
          style={styles.previewContainer}
          data={colors.slice(0, 5)}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            return <ColorBox item={item} isPreviewColorBox />;
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Home = (props) => {
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: 'white', padding: 10 }}
      data={COLOR_PALETTES}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => {
        let itemName = Object.keys(item)[0];
        let paletteName = itemName.replace(/_/g, ' ').toLowerCase();
        paletteName = capitalizeFirstLetterOfEachWord(paletteName);

        return <HomeOption navigation={props.navigation} paletteName={paletteName} colors={item[itemName]} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    flexDirection: 'row',
    marginTop: 5,
    height: 40
  }
});

export default Home;
