import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from '../assets/styles/conteudoStyles.js';

export default function FetchElemento(props) {

  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([])
  useEffect(
    () => {
      fetch('https://periodic-table-elements-info.herokuapp.com/element/atomicNumber/' + props.elemento)
        .then((response) => response.json())
        .then(json => {

          setDados(json);
        })
        .catch((error) => console.error(error))
        .finally(() => setCarregando(false))
    }, []
  )

  return (
    <View>
      {
        carregando ? (<Image style={styles.loading} source={require("../assets/images/loadingElement.gif")} />) : (
          <View style={styles.container}>
            <Text style={styles.TextTitulo}>{dados[0].name}</Text>
            <View style={styles.switch}>
              <Text style={styles.TextSubtitulo}>INFO</Text>
              <Text style={[styles.TextSubtitulo, { color: '#b6c8e8' }]}>CURIOSIDADES</Text>
            </View>
            <ScrollView>
              <View>
                <View style={styles.row1}>
                  <View style={styles.family}>
                    <Text style={styles.textSub2}>FAMÍLIA</Text>
                    <Text style={styles.txtInfoElemento}>{dados[0].group}</Text>
                  </View>
                </View>
                <View style={styles.row2}>
                  <View style={styles.family}>
                    <Text style={styles.textSub2}>NÚMERO ATÔMICO</Text>
                    <Image style={styles.circle2} source={require("../assets/images/icoAtom.png")} />
                    <Text style={styles.txtInfoElemento2}>{dados[0].atomicNumber}</Text>
                  </View>
                  <View style={styles.family}>
                    <Text style={styles.textSub2}>ESTADO FÍSICO</Text>
                    <Image style={styles.circle2} source={require("../assets/images/icoGas.png")} />
                    <Text style={styles.txtInfoElemento2}>{dados[0].standardState}</Text>
                  </View>
                </View>
                <View style={styles.row3}>
                  <View style={styles.family}>
                    <Text style={styles.textSub3}>MASSA ATÔMICA</Text>
                    <Text style={styles.txtInfoElemento}>{dados[0].atomicMass}</Text>
                  </View>
                  <Image style={styles.circle2} source={require("../assets/images/icoMass.png")} />
                </View>
                <View style={styles.row4}>
                  <View style={styles.family}>
                    <Text style={styles.textSub4}>RAIO ATÔMICO</Text>
                    <Image style={styles.circle2} source={require("../assets/images/icoRadius.png")} />
                    <Text style={styles.txtInfoElemento2}>{dados[0].atomicRadius}</Text>
                  </View>
                  <View style={styles.family}>
                    <Text style={styles.textSub4}>PONTO DE FUSÃO</Text>
                    <Image style={styles.circle2} source={require("../assets/images/icoMelting.png")} />
                    <Text style={styles.txtInfoElemento2}>{dados[0].meltingPoint} K</Text>
                  </View>
                  <View style={styles.family}>
                    <Text style={styles.textSub4}>PONTO DE EBULIÇÃO</Text>
                    <Image style={styles.circle2} source={require("../assets/images/icoBoiling.png")} />
                    <Text style={styles.txtInfoElemento2}>{dados[0].boilingPoint} K</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        )
      }
    </View>
  )
}