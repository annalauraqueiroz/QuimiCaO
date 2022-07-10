import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { styles } from '../assets/styles/mainStyles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HeaderApp(){

      return(
        <View style={styles.containerHeader}>
          <Image style={styles.ImgIcone1}
             source={require('../assets/images/iconeapp.png')}/>
        </View>
      );
}