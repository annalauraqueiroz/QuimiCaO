import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { styles } from '../assets/styles/conteudoStyles.js';
import ConteudosDisciplinas from '../DATABASE/ConteudoDisciplinaDB.js'

export default function InfoElemento({route}) {

  return (
    <View style={styles.container}>
    <StatusBar style="dark" />
    <View>                  
      
        <Text style={styles.TextTitulo}>e.params.elemento.nome}</Text>
                                    
    </View>
    </View>
  );
}