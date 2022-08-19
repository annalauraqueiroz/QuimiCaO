import { StatusBar } from 'expo-status-bar';
import React, {Component, UseState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { periodicTableStyles } from '../assets/styles/periodicTableStyles.js';
import Elementos from '../DATABASE/PeriodicTableDB.js';
import InfoElemento from './ModalScreen.js';
//import DadosElementos from '../DATABASE/PeriodicTableDB.js'


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


class ListaElementos extends Component{
  render(){
    const {navigation} = this.props;
    if(this.props.familia != "3B"){
      return(
        Elementos.map((elemento) => {
          if(elemento.familia == this.props.familia){
            return(
              <View style={periodicTableStyles.coluna} key={elemento.nAtomico}> 
              <TouchableOpacity style={[periodicTableStyles.cardElemento,{backgroundColor:bgColor(elemento)}]} 
                onPress={()=> navigation.navigate('InfoElemento', {elemento: elemento})}>
                  <Text>{elemento.simbolo}</Text>
                  <Text>{elemento.nAtomico}</Text>
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
        
              <View style={[periodicTableStyles.cardElemento,{backgroundColor:bgColor(elemento)}]} >
                <Text>{elemento.simbolo}</Text>
                <Text>{elemento.nAtomico}</Text>
              </View>
              
              </View>
            )}
        })   
        
      )
    }
  }
}

export default function TabelaPeriodica() {
  const navigation = useNavigation();
  

  return (
    <View style={periodicTableStyles.container}>
      <StatusBar style="dark" />
      
      

      <ScrollView horizontal={true} alwaysBounceHorizontal={true} maximumZoomScale= {2.0}>
        <View style={periodicTableStyles.sviewContainer}>
          
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="1A" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="2A" navigation={navigation}/>
        </View>
        <View>
          
          <View style={periodicTableStyles.coluna}> 
        
            <View style={[periodicTableStyles.cardElemento,{backgroundColor:bgColor(Elementos[20])}]} >
              <Text>{Elementos[20].simbolo}</Text>
              <Text>{Elementos[20].nAtomico}</Text>
            </View>
            
          </View>
          <View style={periodicTableStyles.coluna}> 
        
            <View style={[periodicTableStyles.cardElemento,{backgroundColor:bgColor(Elementos[38])}]} >
              <Text>{Elementos[38].simbolo}</Text>
              <Text>{Elementos[38].nAtomico}</Text>
            </View>
            
          </View>
          <View style={periodicTableStyles.coluna}> 
        
            <View style={[periodicTableStyles.cardElemento,{backgroundColor:bgColor(Elementos[100])}]}>
              <Text> 57 - 71 </Text>
            </View>
            
          </View>
          <View style={periodicTableStyles.coluna}> 

            <View style={[periodicTableStyles.cardElemento,{backgroundColor:bgColor(Elementos[110])}]}>
              <Text> 89 - 103 </Text>
            </View>
            
          </View>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="4B" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="5B" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="6B" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="7B" navigation={navigation}/>
        </View>
        {/* os elementos 8B ocupam 3 colunas */}
        <View style={periodicTableStyles.f8B}> 
          <ListaElementos familia="8B" navigation={navigation}/>
        </View> 
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="1B" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="2B" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="3A" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="4A" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="5A" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="6A" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="7A" navigation={navigation}/>
        </View>
        <View style={periodicTableStyles.f1}> 
          <ListaElementos familia="8A" navigation={navigation}/>
        </View>
        </View>

      </ScrollView>
      <ScrollView horizontal={true} alwaysBounceHorizontal={true} maximumZoomScale= {2.0}>
        <View style={periodicTableStyles.gruposLAC}> 
              <View style={periodicTableStyles.flac}> 
                <Text style={periodicTableStyles.txtGruposLAC}> Lantanídeos </Text>
                <ListaElementos familia="3B" class="Lantanídeos"/>
              </View>
              <View style={periodicTableStyles.flac}> 
                <Text style={periodicTableStyles.txtGruposLAC}> Actinídios </Text>
                <ListaElementos familia="3B" class="Actinídio"/>
              </View>
        </View>
      </ScrollView>
    </View>
  );
}