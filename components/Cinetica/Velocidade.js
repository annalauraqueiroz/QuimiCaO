import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Velocidade() {
    return (
        <View style={foStyles.principal}>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Lei da Cinética Química “A velocidade de uma reação química, em uma determinada temperatura, é diretamente proporcional ao produto das concentrações dos reagentes, em mols por litro, elevadas aos seus expoentes por uma constate.</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>O que determina a rapidez com que ocorre uma reação química é o tempo em que os reagentes são consumidos para formar produtos. Assim, a velocidade de uma reação pode ser representada tanto pelo consumo de um reagente, quanto pela geração de um produto.</Text>
            <Text style={foStyles.txtPropriedades}>Antes de acontecer a reação química, temos quantidade máxima de reagentes e nenhum produto. Quando um dos reagentes é totalmente consumido, formam-se os produtos e a reação termina.</Text>


            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Cinetica/reacao.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>

            <Text style={foStyles.txtPropriedades}>A Velocidade Média de uma reação química é a variação na quantidade de um reagente ou produto em um determinado intervalo de tempo. Assim, quando calculamos a velocidade média, queremos saber a velocidade em que um reagente foi consumido ou a velocidade em que um produto foi formado.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Cinetica/formulas.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>


            <Text style={foStyles.txtPropriedades}>As unidades utilizadas no cálculo para expressar as substâncias produzidas ou consumidas podem ser, por exemplo, concentração, em mol/L, quantidade de matéria, em mol, e variação da pressão para gases, em atm. Já a variação do tempo pode ser dada em segundos (s), minutos (min) ou horas (h).</Text>

            <Text style={foStyles.txtPropriedades}>Exemplo: </Text>
            <Text style={foStyles.txtPropriedades}>uma reação química genérica pode ser representada pela equação: aA + bB  -{`>`} cC + dD. </Text>

            <Text style={foStyles.txtPropriedades}>A e B são os reagentes, C e D são os produtos e a, b, c e d são os coeficientes da equação balanceada.Portanto, a velocidade de consumo dos reagentes e de formação dos produtos podem ser expressas da seguinte forma:</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Cinetica/tabela.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Cinetica/formulas2.png")} style={[foStyles.img2, { height: 75 }]} loading="lazy" />
            </View>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>OBS: os valores negativos indicam o consumo da substância e os valores positivos indicam que as substâncias estão surgindo.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Pensando ainda na reação genérica aA + bB -{`>`} cC + dD, a lei da velocidade das reações químicas pode ser expressa como:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Cinetica/equacao.png")} style={[foStyles.img2, { height: 40 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Sendo,</Text>
            <Text style={foStyles.txtPropriedades}>V: velocidade da reação;</Text>
            <Text style={foStyles.txtPropriedades}>K: constante que depende da temperatura;</Text>
            <Text style={foStyles.txtPropriedades}>a e ß: expoentes determinados experimentalmente;</Text>
            <Text style={foStyles.txtPropriedades}>[A] e [B]: concentração em mol/L dos reagentes A e B.</Text>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.educamaisbrasil.com.br/enem/quimica/cinetica-quimica');
                }}> https://www.educamaisbrasil.com.br/enem/quimica/cinetica-quimica</Text>
            </Text>
        </View>
    )
}
export default Velocidade;