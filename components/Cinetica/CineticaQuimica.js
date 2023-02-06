import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function CineticaQuimica() {
    return (
        <View style={foStyles.principal}>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A reação de uma velocidade é extremamente importante nas indústrias, pois para garantir lucro é necessário produzir mais, e assim consequentemente controlar essa velocidade.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Existe um ramo na ciência que estuda a velocidade das reações químicas e os fatores que a influenciam, é a chamada Cinética Química. Pode se definir reações químicas como sendo um conjunto de fenômenos nos quais duas ou mais substâncias reagem entre si, dando origem a diferentes compostos. Equação química é a representação gráfica de uma reação química, onde os reagentes aparecem no primeiro membro, e os produtos no segundo.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Cinetica/reacoes.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>


            <Text style={foStyles.txtPropriedades}>O conhecimento e o estudo das reações, além de ser muito importante em termos industriais, também estão relacionados ao nosso dia a dia, pois a velocidade de uma reação é a rapidez com que os reagentes são consumidos ou rapidez com que os produtos são formados. Por exemplo, a combustão de uma vela e a formação de ferrugem são exemplos de reações lentas. Na dinamite, a decomposição da nitroglicerina é uma reação rápida, assim como na explosão de fogos de artifício. </Text>

            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Cinetica/exemplos.png")} style={[foStyles.img2, { height: 70 }]} loading="lazy" />
                </View>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Cinetica/exemplo2.png")} style={[foStyles.img2, { height: 70 }]} loading="lazy" />
                </View>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Cinetica/exemplo3.png")} style={[foStyles.img2, { height: 70 }]} loading="lazy" />
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>As velocidades das reações químicas são determinadas através de leis empíricas, chamadas leis da velocidade, deduzidas a partir do efeito da concentração dos reagentes e produtos na velocidade da reação.</Text>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://brasilescola.uol.com.br/quimica/cinetica-quimica.htm');
                }}> https://brasilescola.uol.com.br/quimica/cinetica-quimica.htm</Text>
            </Text>
        </View>
    )
}
export default CineticaQuimica;