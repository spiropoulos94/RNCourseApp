import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/Colorbox';
import AddScheme from '../components/AddScheme';

const capitalizeFirstLetterOfEachWord = (sentence) => {
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  sentence = words.join(' ');
  return sentence;
};

const HomeOption = ({ navigation, paletteName, colors }) => {
  console.log('props inside HomeOption', { navigation, paletteName, colors });
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
  console.clear();
  console.log('home props,', { props });
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setisRefreshing] = useState(false);

  const fetchPalettes = useCallback(async () => {
    let res = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
    if (res.ok) {
      let data = await res.json();
      setPalettes(data);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setisRefreshing(true);
    await fetchPalettes();
    setTimeout(() => {
      //timout mimics real time fetching
      setisRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetchPalettes();
  }, []);

  console.log(isRefreshing);

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: 'white', padding: 10 }}
      data={palettes}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => {
        let itemName = item.paletteName;
        let paletteName = itemName.replace(/_/g, ' ').toLowerCase();
        paletteName = capitalizeFirstLetterOfEachWord(paletteName);

        return <HomeOption navigation={props.navigation} paletteName={paletteName} colors={item.colors} />;
      }}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={<AddScheme navigation={props.navigation} />}
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
