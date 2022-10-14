import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { styles } from '../assets/styles/mainStyles.js';
import Dados from '../DATABASE/ConteudosDB'


const UniqueCard = ({ item, onPress }) => (
  <View style={styles.card}>
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Image style={styles.ImgIcones} source={item.img} />
      <Text style={styles.TextTitulo} adjustsFontSizeToFit={true}>{item.title}</Text>

    </TouchableOpacity>

  </View>
);

export default function HomeScreen({ navigation }) {
  const DATA = Dados;
  let numColums = 2;

  const renderUniqueCard = ({ item }) => {
    return (
      <UniqueCard
        item={item}
        onPress={() => 
          item.name != "TabelaPeriodica"?(
            
            navigation.navigate('Disciplina', {
              nome: item.name,
              tituloDisciplina: item.title,
        })
          ):(
            navigation.navigate(item.name, {
              nome: item.name,
        })
          )}

      />
    )
  }
  return (
    <View style={{ backgroundColor: '#227fbb' }}>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" >
          <StatusBar style="dark" />

          <FlatList contentContainerStyle={styles.listacards}
            numColumns={numColums}
            data={DATA}
            renderItem={renderUniqueCard}

          />
        </ImageBackground>
      </View>
    </View>

  );
}