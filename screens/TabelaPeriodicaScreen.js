import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView} from 'react-native';
import { periodicTableStyles } from '../assets/styles/periodicTableStyles.js';
import Elementos from '../DATABASE/PeriodicTableDB.js';
import ListaElementos from '../components/ListaElementos.js';
import { styles } from '../assets/styles/conteudoStyles.js';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      return '#CCCCFF';
  }
}

export default function TabelaPeriodica() {
  const navigation = useNavigation();
  
  return (
    <View style={periodicTableStyles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <View style={periodicTableStyles.containerGrupos}>
          <View>
            <View style={[periodicTableStyles.cardGrupo,{backgroundColor:bgColor(Elementos[0])}]}/>
            <Text> Não metal </Text>
          </View>
          <View>
            <View style={[periodicTableStyles.cardGrupo,{backgroundColor:bgColor(Elementos[1])}]}/> 
            <Text>Gás nobre</Text>
          </View>
          <View>
            <View style={[periodicTableStyles.cardGrupo,{backgroundColor:bgColor(Elementos[2])}]}/> 
            <Text>Metal alcalino</Text>
          </View>
          <View>
            <View style={[periodicTableStyles.cardGrupo,{backgroundColor:bgColor(Elementos[3])}]}/> 
            <Text>Metal alcalino-terroso</Text>
          </View>
          <View>
            <View style={[periodicTableStyles.cardGrupo,{backgroundColor:bgColor(Elementos[4])}]}/> 
            <Text>Semimetal</Text>
          </View>
          <View>
            <View style={[periodicTableStyles.cardGrupo,{backgroundColor:bgColor(Elementos[8])}]}/> 
            <Text>Halógeno</Text>
          </View>
          <View>
            <View style={[periodicTableStyles.cardGrupo,{backgroundColor:bgColor(Elementos[12])}]}/> 
            <Text>Metal de pós-transição</Text>
          </View>
          <View>
            <View style={[periodicTableStyles.cardGrupo,{backgroundColor:bgColor(Elementos[20])}]}/> 
            <Text>Metal de transição</Text>
          </View>
        </View>
        <View style={periodicTableStyles.containerInfoTabela}>
          <View style={periodicTableStyles.label}> 
            <Text style={periodicTableStyles.txtLabel}>1</Text>
            <Text style={periodicTableStyles.txtLabel}>2</Text>
            <Text style={periodicTableStyles.txtLabel}>3</Text>
            <Text style={periodicTableStyles.txtLabel}>4</Text>
            <Text style={periodicTableStyles.txtLabel}>5</Text>
            <Text style={periodicTableStyles.txtLabel}>6</Text>
            <Text style={periodicTableStyles.txtLabel}>7</Text>
          </View>
          <ScrollView horizontal={true} alwaysBounceHorizontal={true} maximumZoomScale= {2.0}>
            
            <View style={periodicTableStyles.sviewContainer}>

            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>1A</Text>
              <ListaElementos familia="1A" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
            <Text style={periodicTableStyles.txtLabelGroup}>2A</Text>
              <ListaElementos familia="2A" navigation={navigation}/>
            </View>
            <View>
            <Text style={periodicTableStyles.txtLabelGroup}>3B</Text>
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
              <Text style={periodicTableStyles.txtLabelGroup}>4B</Text>
              <ListaElementos familia="4B" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
            <Text style={periodicTableStyles.txtLabelGroup}>5B</Text>
              <ListaElementos familia="5B" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>6B</Text>
              <ListaElementos familia="6B" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>7B</Text>
              <ListaElementos familia="7B" navigation={navigation}/>
            </View>
            {/* os elementos 8B ocupam 3 colunas */}
            
            <View style={[periodicTableStyles.f8B,{flexWrap:'wrap-reverse'}]}>
              <View style={periodicTableStyles.f8B}>
                <ListaElementos familia="8B" navigation={navigation}/>
              </View>
              <Text style={periodicTableStyles.txtLabelGroup}>8B</Text> 
            </View> 
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>1B</Text> 
              <ListaElementos familia="1B" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>2B</Text> 
              <ListaElementos familia="2B" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>3A</Text> 
              <ListaElementos familia="3A" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>4A</Text> 
              <ListaElementos familia="4A" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
            <Text style={periodicTableStyles.txtLabelGroup}>5A</Text> 
              <ListaElementos familia="5A" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>6A</Text> 
              <ListaElementos familia="6A" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>7A</Text> 
              <ListaElementos familia="7A" navigation={navigation}/>
            </View>
            <View style={periodicTableStyles.f1}> 
              <Text style={periodicTableStyles.txtLabelGroup}>8A</Text> 
              <ListaElementos familia="8A" navigation={navigation}/>
            </View>
            </View>

          </ScrollView>
        </View>
        <ScrollView horizontal={true} alwaysBounceHorizontal={true} maximumZoomScale= {2.0}>
          <View style={periodicTableStyles.gruposLAC}> 
                <View style={periodicTableStyles.flac}> 
                  <Text style={periodicTableStyles.txtLabel}> Lantanídeos </Text>
                  <ListaElementos familia="3B" class="Lantanídeos" navigation={navigation}/>
                </View>
                <View style={periodicTableStyles.flac}> 
                  <Text style={periodicTableStyles.txtLabel}> Actinídios </Text>
                  <ListaElementos familia="3B" class="Actinídio" navigation={navigation}/>
                </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}