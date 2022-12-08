import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { disciplinaStyles } from '../assets/styles/disciplinasStyles';

import Dados from '../DATABASE/SubtopicosDB.js'

const UniqueCard = ({ item, onPress }) => (
  <View style={disciplinaStyles.cardSubtopicos}>
    <TouchableOpacity
      style={disciplinaStyles.cardSubtopicos}
      onPress={onPress}>
      <Text style={disciplinaStyles.txtTituloSubtopico}>{item.titulo}</Text>
    </TouchableOpacity>
  </View>
);

export default function Disciplina({ navigation, route }) {
  //tentar com find 
  const DATA = Dados.filter((dado) => {
    if (dado.disciplina == route.params.nome) {
      return dado;
    }
  });

  const renderCard = ({ item }) => {
    return (
      <UniqueCard
        item={item}
        onPress={() => navigation.navigate('CardDisciplinas', {item: item})} />
    )
  }
  return (
    <View>
        <View>
          <View style={{ backgroundColor: '#227fbb' }}>
            <View style={disciplinaStyles.container}>
            <ImageBackground source={require('../assets/images/background.png')} resizeMode="stretch">
                <View style={disciplinaStyles.listacards}>
                  <Text style={disciplinaStyles.txtTituloDisciplina}>{route.params.tituloDisciplina}</Text>
                  <FlatList contentContainerStyle={disciplinaStyles.listacards}
                    data={DATA}
                    renderItem={renderCard}/>
                </View>
                </ImageBackground>
            </View>
          </View>
        </View>
    </View>
  );
}