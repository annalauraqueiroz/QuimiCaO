import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ForcasIonDipolo() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}> Como o nome sugere, essas interações acontecem entre íons e dipolos de moléculas polares (são
                as interações que acontecem entre água e sal, por exemplo). Os íons positivos interagem com dipolos negativos, e os íons negativos interagem com dipolos positivos, conforme a figura à seguir.  </Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Forças íon-dipolo são especialmente importantes para soluções de substâncias iônicas em líquidos polares.
                    </Text>
                </View>
            </View>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/InteracoesIntermoleculares/iondipoloexemplo.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>

            <Text style={foStyles.txtPropriedades}>As forças íon-dipolo dependem de três fatores:</Text>
            <Text style={foStyles.txtPropriedades}>● A distância entre o íon e o dipolo: quanto menor a distância entre o íon e o dipolo, mais
                forte será a atração</Text>
            <Text style={foStyles.txtPropriedades}>● A carga do íon: quanto maior a carga do íon, mais forte será a atração.</Text>
            <Text style={foStyles.txtPropriedades}>● A magnitude do dipolo:  quanto maior a magnitude do dipolo, mais forte será
                a atração.</Text>

            

            <Text style={foStyles.txtPropriedades}>Referências bibliográficas:{`\n`}
                BROWN, Theodore L.; LEMAY, H. Eugene; BURSTEN, B. E.; MURPHY, C. J.; WOODWARD, P. M.; STOLTZFUS, M. W. Química: A Ciência Central. 13. ed. rev. São Paulo: Pearson Education do Brasil, 2016. 1216 p. v. 1. ISBN 9788543005652.
                <Text onPress={() => {
                    Linking.openURL('https://integrada.minhabiblioteca.com.br/reader/books/9788522122745/pageid/300');
                }}> https://integrada.minhabiblioteca.com.br/reader/books/9788522122745/pageid/300</Text>
             <Text onPress={() => {
                    Linking.openURL('https://brasilescola.uol.com.br/o-que-e/quimica/o-que-sao-forcas-intermoleculares.htm#');
                }}> https://brasilescola.uol.com.br/o-que-e/quimica/o-que-sao-forcas-intermoleculares.htm#</Text>
            </Text>
        </View>
    );
}
export default ForcasIonDipolo;