import React, { useEffect, useState} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from '../assets/styles/conteudoStyles.js';
import Icons from '../components/Elementos/importIcons.js'
import CachedImage from 'react-native-expo-cached-image';

export default function FetchElemento(props) {

  const [elemento] = useState(props.route.params.elemento)
  const [IcoStandardState, setIcoStandardState] = useState('');
  

// preview can be a local image or a data uri
const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };
const uri = "https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/b47b03a1e22e3f1fd884b5252de1e64a06a14126.png?alt=media&token=d636c423-3d94-440f-90c1-57c4de921641";
<CachedImage style={{ height: 100, width: 100 }} {...{preview, uri}} />

  useEffect(() => {
    switch (elemento.standardState) {
      case 'Gasoso':
        return setIcoStandardState(require("../assets/images/icons/gasoso.png"));
      case 'Sólido':
        return setIcoStandardState(require("../assets/images/icons/solido.png"));
      case 'Líquido':
        return setIcoStandardState(require("../assets/images/icons/liquido.png"));
      case 'Desconhecido':
        return setIcoStandardState(require("../assets/images/icons/desconhecido.png"));
    }
  })

  return (
    
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.title}>
          <Text style={styles.txtTitle}>{elemento.name}</Text>
        </View>
        <CachedImage source={{
          uri: `https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg`
        }}
          cacheKey={`${elemento.atomicNumber}-thumb`}
          resizeMode="contain"
        />
        <View style={styles.circlesView}>
          <View style={styles.circleCard}>
            <View style={styles.circle}>
              <Image style={styles.imgCircle} source={Icons[9]} />
            </View>
            <Text style={styles.txtValueTitle}>{elemento.atomicMass}</Text>
            <Text style={styles.txtValueSubtitle}>massa atômica</Text>
          </View>
          <View style={styles.circleCard}>
            <View style={[styles.circle, {borderColor:'#a2dfd9'}]}>
              <Image style={[styles.imgPrincipalCircle]} source={Icons[10]} />
            </View>
            <Text style={styles.txtValueTitle}>{elemento.atomicNumber}</Text>
            <Text style={styles.txtValueSubtitle}>número atômico</Text>
          </View>
          <View style={styles.circleCard}>
            <View style={styles.circle}>
              <Image style={styles.imgCircle} source={IcoStandardState} />
            </View>
            <Text style={styles.txtValueTitle}>{elemento.standardState}</Text>
            <Text style={styles.txtValueSubtitle}>estado físico</Text>
          </View>


        </View>
        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[0]} />
            <Text style={styles.txtListTitle}>Configuração eletrônica</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues} adjustsFontSizeToFit={true}>{elemento.electronicConfiguration}</Text>
          </View>
        </View>
        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[1]} />
            <Text style={styles.txtListTitle}>Raio atômico [pm]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.atomicRadius}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[2]} />
            <Text style={styles.txtListTitle}>Ponto de ebulição [K]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.boilingPoint}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[3]} />
            <Text style={styles.txtListTitle}>Ponto de fusão [K]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.meltingPoint}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[4]} />
            <Text style={styles.txtListTitle}>Estados de oxidação</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.oxidationStates}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[5]} />
            <Text style={styles.txtListTitle}>Eletronegatividade</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.electronegativity}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[6]} />
            <Text style={styles.txtListTitle}>Densidade [g/cm³]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.density}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[7]} />
            <Text style={styles.txtListTitle}>Energia de ionização [KJ/mol]</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.ionizationEnergy}</Text>
          </View>
        </View>

        <View style={styles.cardList}>
          <View style={styles.descriptionItems}>
            <Image style={styles.listIcon} source={Icons[8]} />
            <Text style={styles.txtListTitle}>Ano de descoberta</Text>
          </View>
          <View style={styles.valuesList}>
            <Text style={styles.txtValues}>{elemento.yearDiscovered}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}