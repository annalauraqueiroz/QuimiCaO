import React from 'react';
import {  Text, View, FlatList, Image, SectionList,TouchableOpacity } from 'react-native';
import { disciplinaStyles } from '../assets/styles/disciplinasStyles';

const Card = ({ item, onPress }) => (
  <TouchableOpacity
    style={disciplinaStyles.cardInterno}
    onPress={onPress}>
    {item.img ? (
      <Image style={disciplinaStyles.ImgIcones} source={item.img} resizeMode='contain' />
    ):('')} 
    <Text style={disciplinaStyles.txtTituloSubtopicoPreto}>{item.titulo}</Text>
  </TouchableOpacity>
);

export default function CardDisciplina({ navigation, route }) {

  const DATA = [
    {
      title: route.params.item.titulo,
      texto: route.params.item.conteudo.texto,
      data: route.params.item.conteudo.cards
    }
  ];


  const renderCardInterno = ({ item }) => {
    return (
      <Card
        item={item}
        onPress={() => navigation.navigate('FuncaoOrganicaScreen', {item: item })} />
        
    )
  }
  const renderSectionListItem = () => {
    return(
      <View style={disciplinaStyles.listacards}>
         <FlatList contentContainerStyle={disciplinaStyles.listacards}
          numColumns={3}
          data={DATA[0].data}
          renderItem={renderCardInterno}
        />
      </View>
     
    )
  }

  const renderItem = () =>{
    return null;
  }

  return (
    <View style={disciplinaStyles.container}>
      <SectionList
        sections={DATA}
        stickySectionHeadersEnabled={true}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title, texto } }) => (
          <View style={disciplinaStyles.headerImg}>
            <View style={disciplinaStyles.logoPrincipal}>
              <Image style={disciplinaStyles.imgLogo} source={require("../assets/images/Organica/mainMolecule.png")} />
            </View>
            <View style={disciplinaStyles.card}>
              <Text style={disciplinaStyles.txtTitulo}>{title}</Text>
              <Text style={disciplinaStyles.txtDescricao}>
                {texto}
              </Text>
              </View>
          </View>
        )}
        renderSectionFooter={renderSectionListItem}
        />
    </View>
  
  );
}