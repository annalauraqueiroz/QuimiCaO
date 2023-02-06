import React, { useEffect, useState} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from '../assets/styles/conteudoStyles.js';
import Icons from '../components/Elementos/importIcons.js'

export default function FetchElemento(props) {

  const [elemento] = useState(props.route.params.elemento);
  const [IcoStandardState, setIcoStandardState] = useState('');
  

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
              <Image style={[styles.imgPrincipalCircle]} source={Icons[10]} loadingIndicatorSource={'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'}/>
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