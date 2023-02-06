import React, { useContext} from 'react';
import { Text, View } from 'react-native';
import { disciplinaStyles } from '../assets/styles/disciplinasStyles';
import { ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import DATAContext from '../components/DATAContext';

export default function Disciplina() {
  const data = useContext(DATAContext);

  return (
    <ImageHeaderScrollView
      maxHeight={310}
      minHeight={120}
      maxOverlayOpacity={0.6}
      minOverlayOpacity={0.0}
      headerImage={require("./../assets/images/Organica/mainMolecule.png")}
    >
      <View style={disciplinaStyles.headerImg}>
        <View style={disciplinaStyles.card}>
          <Text style={disciplinaStyles.txtTitulo}>{data.titulo}</Text>
          <Text style={disciplinaStyles.txtDescricao}>
            {data.conteudo.texto}
          </Text>
        </View>
      </View>
    </ImageHeaderScrollView>

  );
}