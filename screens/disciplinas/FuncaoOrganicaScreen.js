import React, {useState, useEffect, useMemo} from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';
import DATA from '../../data/Organica/FuncoesOrganicas.js'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';

export default function FuncaoOrganicaScreen({ route }) {
  const [funcaoOrganica, setFuncaoOrganica]= useState('');
  const dados = useMemo(()=> DATA.find(data => data.id == route.params.item.idItem))
  
  useEffect(()=>{
     setFuncaoOrganica(dados)
  })
  

  return (
    <ImageHeaderScrollView
      maxHeight={310}
      minHeight={120}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.0}
      headerImage={funcaoOrganica.imgBackground}
    >
      <ImageBackground source={require("../../assets/images/Organica/organicaBg.png")} resizeMode='cover'>
        <View style={foStyles.container}>

          <TriggeringView>
            <Text style={foStyles.titulo}>{funcaoOrganica.titulo}</Text>
          </TriggeringView>

          <View>
            <Text style={foStyles.txtPropriedades}>{funcaoOrganica.introducao}</Text>
            <Image source={funcaoOrganica.img1} style={foStyles.img} loading="lazy" />
            <Text style={foStyles.subtitulo}>Propriedades Físicas</Text>
            <Text style={foStyles.txtPropriedades}>{funcaoOrganica.propriedadesFisicas}</Text>
            <Image source={funcaoOrganica.img2} style={foStyles.img2} loading="lazy"/>
            <Text style={foStyles.txtPropriedades}>{funcaoOrganica.texto2}</Text>
            <Image source={funcaoOrganica.img3} style={foStyles.img2} loading="lazy"/>
          </View>

        </View>
      </ImageBackground>
    </ImageHeaderScrollView>
  );
}