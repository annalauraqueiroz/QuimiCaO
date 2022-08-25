import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { styles } from '../assets/styles/conteudoStyles.js';
import FetchElemento from '../components/FetchElemento.js'

export default function InfoElemento(props) {
  
  return (
    <View style={styles.container}>
    <StatusBar style="dark" />
      <FetchElemento elemento={props.route.params.elemento.nAtomico}/>
    </View>
  );
}