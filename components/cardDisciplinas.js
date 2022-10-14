import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { disciplinaStyles } from '../assets/styles/disciplinasStyles';


const Card = ({ item, onPress }) => (
  <TouchableOpacity
    style={disciplinaStyles.cardInterno}
    onPress={onPress}>
    <Image style={disciplinaStyles.ImgIcones} source={item.img} />
    <Text style={disciplinaStyles.txtTituloSubtopico}>{item.titulo}</Text>
  </TouchableOpacity>
);

export default function CardDisciplina({ navigation, route }) {

  const item = route.params.item;
  let numColums = 3;

  const renderCardInterno = ({ item }) => {
    return (
      <Card
        item={item}
        onPress={() => navigation.navigate('CardDisciplinas', { idDado: item.id, item: item })} />
    )
  }
  return (
    <View style={{ backgroundColor: '#2ca2c2' }}>
      <View style={disciplinaStyles.container}>
        <View style={disciplinaStyles.logoPrincipal}>
          <Image style={disciplinaStyles.imgLogo} source={require("../assets/images/Organica/mainMolecule.png")} />
        </View>
        <View style={disciplinaStyles.card}>
          <Text style={disciplinaStyles.txtTitulo}>{item.titulo}</Text>
          <Text style={disciplinaStyles.txtDescricao}>
            {item.conteudo.texto}
          </Text>
        
        <FlatList contentContainerStyle={disciplinaStyles.listacards}
          numColumns={numColums}
          data={item.conteudo.cards}
          renderItem={renderCardInterno}

        />
      </View>
      </View>
    </View>
  );
}