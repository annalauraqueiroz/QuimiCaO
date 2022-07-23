import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './assets/styles/mainStyles.js';
import DadosElementos from '../DATABASE/PeriodicTableDB.js'
import { FlatList } from 'react-native-web';


const Elemento = ({elemento, onPress})=> (
  <View> 
    <Text> {elemento.nome}</Text>
  </View>
);


export default function TabelaPeriodica() {
  
  const renderElemento = ({simboloElemento}) => {
    return(
      <Elemento
        elemento = {simboloElemento}
        onPress={() => navigation.navigate(simboloElemento.nome, {
          //tem necessidade de repetir isso aqui??
          z: simboloElemento.nAtomico,
          nome: simboloElemento.nome,

        })}
      />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
          <FlatList
            data = {DadosElementos}
            renderItem={renderElemento}
            id= {Elemento.z}
          
          />
      </SafeAreaView>

    </View>
  );
}