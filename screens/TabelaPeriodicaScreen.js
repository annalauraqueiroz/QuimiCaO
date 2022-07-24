import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../assets/styles/mainStyles.js';
import { periodicTableStyles } from '../assets/styles/periodicTableStyles.js';
import Elementos from '../DATABASE/PeriodicTableDB.js';
//import DadosElementos from '../DATABASE/PeriodicTableDB.js'

const Familias = [
  {
    nome: '1A'
  },
  {
    nome: '2A'
  },
  {
    nome: '3B'
  },
  {
    nome: '4B'
  },
  {
    nome: '5B'
  },
  {
    nome: '6B'
  },
  {
    nome: '7B'
  },
  {
    nome: '8B'
  },
  {
    nome: '1B'
  },
  {
    nome: '2B'
  },
  {
    nome: '3A'
  },
  {
    nome: '4A'
  },
  {
    nome: '5A'
  },
  {
    nome: '6A'
  },
  {
    nome: '7A'
  },
  {
    nome: '8A'
  },
]


function MapearFamilia(elemento){
  Familias.map((familia) => {
    if(elemento.familia == familia)
      return(
        <View style={periodicTableStyles.cardElemento}>
                    <Text> {elemento.simbolo} </Text>
        </View>
      );
  })
}
export default function TabelaPeriodica() {


  return (
    <View style={periodicTableStyles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
      
      <View style={periodicTableStyles.linha}> 
      
        <View style={periodicTableStyles.coluna}> 

          {Elementos.map((elemento) => {
            if(elemento.familia == '1A')
            return(
              <View style={periodicTableStyles.cardElemento}>
                    <Text> {elemento.simbolo} </Text>
              </View>
            );
          })}

        </View>

        <View style={periodicTableStyles.coluna}> 

          {Elementos.map((elemento) => {
            if(elemento.familia == '2A')
            return(
              <View style={periodicTableStyles.cardElemento}>
                    <Text> {elemento.simbolo} </Text>
              </View>
            );
          })}

        </View>
        <View style={periodicTableStyles.coluna}> 

          {Elementos.map((elemento) => {
            if(elemento.familia == '2A')
            return(
              <View style={periodicTableStyles.cardElemento}>
                    <Text> {elemento.simbolo} </Text>
              </View>
            );
          })}

        </View>
        <View style={periodicTableStyles.coluna}> 

          {Elementos.map((elemento) => {
            if(elemento.familia == '3B')
            return(
              <View style={periodicTableStyles.cardElemento}>
                    <Text> {elemento.simbolo} </Text>
              </View>
            );
          })}

        </View>

      </View>

      </SafeAreaView>

    </View>
  );
}