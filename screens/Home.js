import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Text, View,FlatList, Image, ImageBackground, TouchableOpacity, Button} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { styles } from '../assets/styles/mainStyles.js';
import Header from '../components/Header.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import Dados from '../DATABASE/ConteudosDB'


const UniqueCard = ({item, onPress})=> (
  <View style={styles.card}>
  <TouchableOpacity
     style={styles.card}
     onPress={onPress}
   >
       <Image style = {styles.ImgIcones} source= {item.img}/>   
       <Text style={styles.TextTitulo} adjustsFontSizeToFit= {true}>{item.title}</Text>
                 
 </TouchableOpacity>
   
  </View>
);

export default function HomeScreen({navigation}) {
  const DATA = Dados;
  let numColums=2;

  const renderUniqueCard = ({item}) => {
    return(
      <UniqueCard
        item={item}
        onPress={() => navigation.navigate(item.name, {
          //id: item.idItem,
          nome: item.name,
        })}
        
      />
    )
  }
  return (
    <View style={{backgroundColor:'#227fbb'}}>
      <View style={styles.container}> 
      <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover" >
      <StatusBar style="dark" />
      
      <FlatList contentContainerStyle={styles.listacards}
          numColumns={numColums}
          data={DATA}
          //PQ quando eu chamo não declara o parametro que to enviando?
          renderItem={renderUniqueCard}
          
        />
      </ImageBackground>
      </View>
    </View>
    
  );
}