import React from 'react';
import { Text, View, Image, StatusBar, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';
import DATA from '../../DATABASE/Organica/FuncoesOrganicas.js'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';

export default function FuncaoOrganicaScreen({ route }) {
  const funcaoOrganica = DATA.find(data => data.id == route.params.item.idItem);
  return (
    <ImageHeaderScrollView
      maxHeight={310}
      minHeight={120}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.0}
      headerImage={funcaoOrganica.imgBackground}

    >
      <StatusBar barStyle='dark-content' />
      <ImageBackground source={require("../../assets/images/Organica/organicaBg.png")} resizeMode='cover'>
        <View style={foStyles.container}>

          <TriggeringView>
            <Text style={foStyles.titulo}>{funcaoOrganica.titulo}</Text>
          </TriggeringView>

          <View>
            <Text style={foStyles.txtPropriedades}>{funcaoOrganica.introducao}</Text>
            <Image source={funcaoOrganica.img1} style={foStyles.img} />
            <Text style={foStyles.subtitulo}>Propriedades Físicas</Text>

            <Text style={foStyles.txtPropriedades}>{funcaoOrganica.propriedadesFisicas}</Text>
            <Image source={funcaoOrganica.img2} style={foStyles.img2} />
            <Text style={foStyles.txtPropriedades}>{funcaoOrganica.texto2}</Text>
            <Image source={funcaoOrganica.img3} style={foStyles.img2} />
          </View>

        </View>
      </ImageBackground>

    </ImageHeaderScrollView>
  );
}