import React, {useContext,useState,useEffect} from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';
import DATAContext from '../../components/DATAContext.js';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function SubtopicoScreen({ route }) {
  
  const [subtopico, setSubtopico] = useState('');
  const data = useContext(DATAContext);

  useEffect(()=>{
    typeof data === "undefined"? (
      setSubtopico(route.params.item)):(
      setSubtopico(data.conteudo.cards));
  })
  return (
    <ImageHeaderScrollView
      maxHeight={310}
      minHeight={120}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.0}
      headerImage={subtopico.imgBackground}
      maximumZoomScale={2.0}
    >
      <ImageBackground source={require("../../assets/images/Organica/organicaBg.png")} resizeMode='cover'>
        <View style={foStyles.container}>

          <TriggeringView>
            <Text style={foStyles.titulo}>{subtopico.titulo}</Text>
          </TriggeringView>

          <View>
            {subtopico.componente}
          </View>

        </View>
      </ImageBackground>
    </ImageHeaderScrollView>
  );
}