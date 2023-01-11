import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView } from 'react-native';
import { periodicTableStyles } from '../assets/styles/periodicTableStyles.js';
import Elementos from '../data/PeriodicTableDB.js';
import ListaElementos from '../components/Elementos/ListaElementos.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import bgColor from '../components/Elementos/getBgColorByGroupBlock.js'


export default function TabelaPeriodica() {
  const navigation = useNavigation();
  
  return (
    <View style={periodicTableStyles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <View style={periodicTableStyles.containerInfoTabela}>
          <View style={periodicTableStyles.containerGrupos}>

            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: Elementos[0].cpkHexColor }]} />
              <Text style={periodicTableStyles.txtNatm}> Não metal </Text>
            </View>

            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: bgColor(Elementos[2]) }]} />
              <Text style={periodicTableStyles.txtNatm}> Metal alcalino</Text>
            </View>

            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: bgColor(Elementos[1]) }]} />
              <Text style={periodicTableStyles.txtNatm}> Gás nobre</Text>
            </View>
          </View>
          <View style={periodicTableStyles.containerGrupos}>

            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: bgColor(Elementos[3]) }]} />
              <Text style={periodicTableStyles.txtNatm}> Metal alcalino-terroso</Text>
            </View>
            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: bgColor(Elementos[8]) }]} />
              <Text style={periodicTableStyles.txtNatm}> Halógeno</Text>
            </View>
            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: bgColor(Elementos[20]) }]} />
              <Text style={periodicTableStyles.txtNatm}> Metal de transição</Text>
            </View>

          </View>

          <View style={periodicTableStyles.containerGrupos}>

            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: bgColor(Elementos[3]) }]} />
              <Text style={periodicTableStyles.txtNatm}> Metal alcalino-terroso</Text>
            </View>

            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: bgColor(Elementos[4]) }]} />
              <Text style={periodicTableStyles.txtNatm}> Semimetal</Text>
            </View>
            <View style={periodicTableStyles.typeGroup}>
              <View style={[periodicTableStyles.cardGrupo, { backgroundColor: bgColor(Elementos[12]) }]} />
              <Text style={periodicTableStyles.txtNatm}> Metal de pós-transição</Text>
            </View>
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

          <ScrollView horizontal={true} alwaysBounceHorizontal={true} maximumZoomScale={2.0}>
            <View style={periodicTableStyles.sviewContainer}>
              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>1A</Text>
                <ListaElementos group='1' navigation={navigation} />
              </View>
              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>2A</Text>
                <ListaElementos group="2" navigation={navigation} />
              </View>
              <View>
                
                <View>
                <Text style={periodicTableStyles.txtLabelGroup}>3B</Text>
                    <ListaElementos group='3' groupBlock="Metal de transição" navigation={navigation} />
                </View>

                <View style={periodicTableStyles.coluna}>
                  <View style={[periodicTableStyles.cardElemento, { backgroundColor: bgColor(Elementos[110]) }]}>
                    <Text style={periodicTableStyles.txtSymbol}> 57 - 71 </Text>
                  </View>
                </View>

                <View style={periodicTableStyles.coluna}>
                  <View style={[periodicTableStyles.cardElemento, { backgroundColor: bgColor(Elementos[110]) }]}>
                    <Text style={periodicTableStyles.txtSymbol}> 89 - 103 </Text>
                  </View>
                </View>

              </View>

              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>4B</Text>
                <ListaElementos group='4' navigation={navigation} />
              </View>

              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>5B</Text>
                <ListaElementos group='5' navigation={navigation} />
              </View>

              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>6B</Text>
                <ListaElementos group='6' navigation={navigation} />
              </View>

              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>7B</Text>
                <ListaElementos group='7' navigation={navigation} />
              </View>

              <View style={[periodicTableStyles.flac]}>
                
                <View style={periodicTableStyles.f8B}>
                  <ListaElementos group='8' navigation={navigation} />
                </View>
                
                <View style={periodicTableStyles.f8B}>
                  <Text style={periodicTableStyles.txtLabelGroup}>8B</Text>
                  <ListaElementos group='9' navigation={navigation} />
                </View>

                <View style={periodicTableStyles.f8B}>
                  <ListaElementos group='10' navigation={navigation} />
                </View>

              </View>

              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>1B</Text>
                <ListaElementos group='11' navigation={navigation} />
              </View>
              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>2B</Text>
                <ListaElementos group='12' navigation={navigation} />
              </View>

              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>3A</Text>
                <ListaElementos group='13' navigation={navigation} />
              </View>
              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>4A</Text>
                <ListaElementos group='14' navigation={navigation} />
              </View>
              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>5A</Text>
                <ListaElementos group='15' navigation={navigation} />
              </View>
              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>6A</Text>
                <ListaElementos group='16' navigation={navigation} />
              </View>
              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>7A</Text>
                <ListaElementos group='17' navigation={navigation} />
              </View>
              <View>
                <Text style={periodicTableStyles.txtLabelGroup}>8A</Text>
                <ListaElementos group='18' navigation={navigation} />
              </View>

            </View>

          </ScrollView>
        </View>
        <ScrollView horizontal={true} alwaysBounceHorizontal={true} maximumZoomScale={2.0}>
          <View style={periodicTableStyles.gruposLAC}>
            <View style={periodicTableStyles.flac}>
              <Text style={[periodicTableStyles.txtLabel, {alignSelf:'center'}]}> Lantanídeos </Text>
              <ListaElementos group='3' groupBlock="Lantanídeo" navigation={navigation} />
            </View>
            <View style={periodicTableStyles.flac}>
              <Text style={[periodicTableStyles.txtLabel, {alignSelf:'center'}]}> Actinídios </Text>
              <ListaElementos group='3' groupBlock="Actinídeo" navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}