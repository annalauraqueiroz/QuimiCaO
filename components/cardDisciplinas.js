import React from 'react';
import {  Text, View, FlatList, Image, SectionList,TouchableOpacity } from 'react-native';
import { disciplinaStyles } from '../assets/styles/disciplinasStyles';
import CachedImage from 'react-native-expo-cached-image';

//fazer a limpa nesse codigo aqui inteiro
const Card = ({ item, onPress }) => (
  <TouchableOpacity
    style={disciplinaStyles.cardInterno}
    onPress={onPress}>
    <Image style={disciplinaStyles.ImgIcones} source={item.img} />
    <CachedImage
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://qvault.io/wp-content/uploads/2019/05/QVault-app.png' }}
    />
    <Text style={disciplinaStyles.txtTituloSubtopicoPreto}>{item.titulo}</Text>
  </TouchableOpacity>
);

export default function CardDisciplina({ navigation, route }) {

  const DATA = [
    {
      id:route.params.item.conteudo.id,
      title: route.params.item.conteudo.title,
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
          data={route.params.item.conteudo.cards}
          renderItem={renderCardInterno}
        />
      </View>
     
    )
  }

  const renderItem = () =>{
    return null
  }

  return (
    <View>
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
    </View>
  );
}