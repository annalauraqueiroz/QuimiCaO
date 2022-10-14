import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../assets/styles/mainStyles.js';

import Dados from '../DATABASE/SubtopicosDB.js'

const UniqueCard = ({ item, onPress }) => (
  <View style={styles.cardSubtopicos}>
    <TouchableOpacity
      style={styles.cardSubtopicos}
      onPress={onPress}>
      <Text style={styles.txtTituloSubtopico}>{item.titulo}</Text>
    </TouchableOpacity>
  </View>
);

export default function Disciplina({ navigation, route }) {
  const DATA = Dados.filter((dado) => {
    if (dado.disciplina == route.params.nome) {
      return dado;
    }
  });

  const renderCard = ({ item }) => {
    return (
      <UniqueCard
        item={item}
        onPress={() => navigation.navigate('CardDisciplinas', {idDado: item.id, item: item})} />
    )
  }
  return (
    <View>
      <SafeAreaView>
        <View>
          <View style={{ backgroundColor: '#227fbb' }}>
            <View style={styles.container}>
              <ImageBackground source={require('../assets/images/background.png')} resizeMode="cover">
                <View style={styles.listacards}>
                  <Text style={styles.txtTituloDisciplina}>{route.params.tituloDisciplina}</Text>
                  <FlatList contentContainerStyle={styles.listacards}
                    data={DATA}
                    renderItem={renderCard} />
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}