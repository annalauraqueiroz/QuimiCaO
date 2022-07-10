import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { styles } from '../assets/styles/mainStyles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function TabelaPeriodica() {

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        {/* <View style={styles.ImgIcones}>
            <Image style={styles.ImgIcone1} source={require('C:/Users/Laurinha/Desktop/Projetos/Projeto1/assets/img/list.png')}/> 
            <Image style={styles.ImgIcone1} source={require('C:/Users/Laurinha/Desktop/Projetos/Projeto1/assets/img/perfil.png')}/> 
          </View>
          <View style={styles.ImgLogo}>
            <Image style={styles.ImgLogo} source={require('C:/Users/Laurinha/Desktop/Projetos/Projeto1/assets/img/logo1.png')}/> 
          </View> */}
      </View>

        
    
        
    </View>
  );
}