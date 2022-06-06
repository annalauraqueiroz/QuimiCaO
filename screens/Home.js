import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Text, View,FlatList, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { styles } from '../assets/styles/mainStyles.js';
import Header from '../components/Header.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dados from '../DATABASE/mainDB.json'
import { SafeAreaView } from 'react-native-safe-area-context';

const UniqueCard = ({item, onPress})=> (
  <View style={styles.card}>

  <TouchableOpacity
     style={styles.card}
     onPress={onPress}
   >
       <Image style={styles.ImgIcones} source={{uri:item.img}}/>
       <Text>{item.name}</Text>
                 
 </TouchableOpacity>
   
  </View>
);

export default function HomeScreen({navigation}) {
  
  const DATA = Dados.itens;

  const renderUniqueCard = ({item}) => {
    return(
      <UniqueCard
        item={item}
        onPress={() => navigation.navigate('TelaCards', {
          idItem: item.id,
          nome: item.name,
        })}
        
      />
    )
  }
  return (
    <View style={styles.container}>
    <StatusBar style="dark" />
    <SafeAreaView>
    <FlatList
      data={DATA}
      renderItem={renderUniqueCard}
      id={UniqueCard.id}
    />
    </SafeAreaView>
    </View>
  );
}