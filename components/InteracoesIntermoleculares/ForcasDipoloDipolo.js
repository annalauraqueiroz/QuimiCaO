import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ForcasDipoloDipolo() {
    return (
        <View style={foStyles.principal}>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Estas interações são mais acentuadas no estado sólido.
                    </Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>As forças do tipo dipolo-dipolo ocorrem entre moléculas polares (com exceção daquelas que apresentam o elemento hidrogênio ligado diretamente a flúor, oxigênio ou nitrogênio), como é o caso do ácido clorídrico (HCl), dióxido de enxofre (SO2), ácido bromídrico (HBr) e ácido cianídrico (HCN). </Text>
            <Text style={foStyles.txtPropriedades}>Como as moléculas são polares (apresentam polos positivo e negativo), elas interagem de forma que o polo negativo de uma una-se ao polo positivo da outra e assim sucessivamente. </Text>
           
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/InteracoesIntermoleculares/dipolodipoloexemplo.png")} style={[foStyles.img2, { height: 50 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
            Representação do dipolo permanente entre moléculas do ácido clorídrico</Text>

            <Text style={foStyles.txtPropriedades}>É importante ressaltar, também, que se duas moléculas têm aproximadamente a mesma massa e o mesmo tamanho, as forças dipolo-dipolo aumentam com o aumento da polaridade.</Text>
            <Text style={foStyles.txtPropriedades}>Em virtude da presença do dipolo, já que as moléculas são polares, a interação dipolo-dipolo é mais intensa do que a dipolo induzido, porem são mais fracas do que as forças íon-dipolo. </Text>

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
export default ForcasDipoloDipolo;