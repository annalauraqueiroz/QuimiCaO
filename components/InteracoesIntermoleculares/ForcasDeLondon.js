import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ForcasDeLondon() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}> As forças de dispersão, às vezes chamadas de forças de London, são comuns a todas as moléculas. </Text>
           
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>As forças de London são também denominadas forças dipolo-dipolo induzido. 
                    </Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}> É o tipo de força que ocorre entre moléculas apolares, ou seja, moléculas que não apresentam polos (positivo e negativo), pois os elétrons estão distribuídos de forma uniforme em sua eletrosfera, até que em certo instante, os elétrons acumulam-se em uma região de uma molécula, criando nela um polo negativo e outro positivo. Como essa molécula está próxima à outra, esse dipolo temporário acaba induzindo os elétrons da outra molécula a se agruparem em uma extremidade e assim sucessivamente. Assim, as moléculas que eram apolares passam a ter um dipolo que foi induzido.</Text>
           

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/InteracoesIntermoleculares/Londonexemplo.png")} style={[foStyles.img2, { height: 90 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Formação de dipolos induzidos</Text>

            <Text style={foStyles.txtPropriedades}>A intensidade da força de dispersão depende da facilidade com que a distribuição de carga em uma molécula pode ser deformada para induzir um dipolo instantâneo. </Text>
            <Text style={foStyles.txtPropriedades}>A facilidade com que a distribuição de carga é deformada chama-se polarizabilidade da molécula. Podemos pensar na polarizabilidade de uma molécula como uma medida da "maciez" de sua nuvem eletrônica: quanto maior a polarizabilidade, mais facilmente a nuvem eletrônica pode ser deformada, resultando em um dipolo instantâneo. </Text>
            <Text style={foStyles.txtPropriedades}>Portanto, moléculas mais polarizáveis têm forças de dispersão maiores. Em geral, a polarizabilidade aumenta à medida que o número de elétrons de um átomo ou de uma molécula também aumenta. Portanto, a intensidade das forças de dispersão tende a aumentar com o aumento do tamanho do átomo ou da molécula </Text>

            <Text style={foStyles.txtPropriedades}>Referências bibliográficas:{`\n`}
            BROWN, Theodore L.; LEMAY, H. Eugene; BURSTEN, B. E.; MURPHY, C. J.; WOODWARD, P. M.; STOLTZFUS, M. W. Química: A Ciência Central. 13. ed. rev. São Paulo: Pearson Education do Brasil, 2016. 1216 p. v. 1. ISBN 9788543005652.
                <Text onPress={() => {
                    Linking.openURL('https://integrada.minhabiblioteca.com.br/reader/books/9788522122745/pageid/300');
                }}> https://integrada.minhabiblioteca.com.br/reader/books/9788522122745/pageid/300</Text>
            </Text>
        </View>
    );
}
export default ForcasDeLondon;