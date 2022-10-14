import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { periodicTableStyles } from '../assets/styles/periodicTableStyles.js';
import Elementos from '../DATABASE/PeriodicTableDB.js';




export default class ListaElementos extends Component{
    
    render(){
        const bgColor = (props) => {
 
            switch(props.class){
              case 'Não metal':
                return '#76ED69';
              case 'Metal alcalino':
                return '#EB984E';
              case 'Metal alcalino-terroso':
                return '#F4D03F';
              case 'Metal de transição':
                return '#EC7063';
              case 'Metal de pós-transição':
                return '#73C6B6';
              case 'Semimetal':
                return '#85C1E9';
              case 'Halógeno':
                return '#17A589';
              case 'Gás nobre':
                return '#A569BD';
              case 'Lantanídeos':
                return '#40E0D0';    
              case 'Actinídio' :
                return'#CCCCFF';
            }
          }
      const {navigation} = this.props;
      
      if(this.props.familia != "3B"){
        return(
          Elementos.map((elemento) => {
            if(elemento.familia == this.props.familia){
              return(
                <View style={periodicTableStyles.coluna} key={elemento.nAtomico}> 
                <TouchableOpacity style={[periodicTableStyles.cardElemento,{backgroundColor:bgColor(elemento)}]} 
                  onPress={()=> {
                  navigation.navigate('InfoElemento', {elemento: elemento})}}>
                    <Text style={periodicTableStyles.txtNatm}>{elemento.nAtomico}</Text>
                    <Text style={periodicTableStyles.txtSymbol}>{elemento.simbolo}</Text>
                    
                </TouchableOpacity>
                </View>
              )}
          })
        )
      }
      else{
        return(
          Elementos.map((elemento) => {
            if(elemento.class == this.props.class){
              return(
                <View style={periodicTableStyles.coluna} key={elemento.nAtomico}> 
          
                <TouchableOpacity style={[periodicTableStyles.cardElemento,{backgroundColor:bgColor(elemento)}]} 
                  onPress={()=> {
                  navigation.navigate('InfoElemento', {elemento: elemento})}}>
                  <Text style={periodicTableStyles.txtNatm}>{elemento.nAtomico}</Text>
                  <Text style={periodicTableStyles.txtSymbol}>{elemento.simbolo}</Text>
                </TouchableOpacity>
                
                </View>
              )}
          })   
          
        )
      }
    }
  }
  