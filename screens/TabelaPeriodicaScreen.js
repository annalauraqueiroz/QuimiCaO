import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../assets/styles/mainStyles.js';
import { periodicTableStyles } from '../assets/styles/periodicTableStyles.js';
import Elementos from '../DATABASE/PeriodicTableDB.js';
//import DadosElementos from '../DATABASE/PeriodicTableDB.js'


class ListaElementos extends Component{
  render(){
    return(
      Elementos.map((elemento) => {
        if(elemento.periodo == this.props.linha)
          return(
            <View style={periodicTableStyles.coluna}> 
      
            <View style={periodicTableStyles.cardElemento} key={elemento.nAtomico}>
              <Text>{elemento.simbolo}</Text>
              <Text>{elemento.nAtomico}</Text>
            </View>
            
            </View>
      )
      })
    )
  }
}

export default function TabelaPeriodica() {

  return (
    <View style={periodicTableStyles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        
      
      <View style={periodicTableStyles.linha}> 
        <ListaElementos linha="1"/>
      </View>
      <View style={periodicTableStyles.linha}> 
        <ListaElementos linha="2"/>
      </View>
      <View style={periodicTableStyles.linha}> 
        <ListaElementos linha="3"/>
      </View>
      <View style={periodicTableStyles.linha}> 
        <ListaElementos linha="4"/>
      </View>

      </SafeAreaView>

    </View>
  );
}