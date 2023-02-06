import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function OQueSao() {
    return (
        <View style={foStyles.principal}>

           
            <Text style={foStyles.txtPropriedades}>Forças intermoleculares são as formas como as moléculas dos compostos (polares ou apolares) formados por ligações covalentes interagem ente si. Elas foram propostas no ano de 1873 pelo químico e físico holandês Diderik Van der Waals. </Text>
            <Text style={foStyles.txtPropriedades}>De acordo com Van der Waals, as moléculas podem interagir de forma diferente umas com as outras. Essas interações diferentes exercem uma grande influência sobre o ponto de fusão (PF) e ebulição (PE) das substâncias. Assim, a intensidade em que as moléculas interagem define o seu estado físico (sólido, líquido ou gasoso). </Text>
            <Text style={foStyles.txtPropriedades}>Podemos identificar as forças intermoleculares que atuam em uma substância considerando sua composição e estrutura. As forças de dispersão são encontradas em to- das as substâncias. A intensidade dessas forças de atração aumenta conforme o peso molecular aumenta e depende do formato das moléculas</Text>
            <Text style={foStyles.txtPropriedades}>Perceber a existência das diferentes forças intermoleculares (interações) é simples, já que na natureza podemos encontrar uma mesma matéria em diferentes estados físicos. As forças intermoleculares são classificadas em quatro tipos que variam conforme a intensidade. </Text>
            <Text style={foStyles.txtPropriedades}>Da maior para menor intensidade, são elas:</Text>
            <Text style={foStyles.txtPropriedades}>● Forças de London ou Dipolo Induzido</Text>
            <Text style={foStyles.txtPropriedades}>● Forças dipolo-dipolo</Text>
            <Text style={foStyles.txtPropriedades}>● Ligações de Hidrogênio</Text>
            <Text style={foStyles.txtPropriedades}>● Forças íon-dipolo</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/InteracoesIntermoleculares/forcasexemplo.png")} style={[foStyles.img2, { height: 270 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
            Fluxograma para reconhecimento das interações intermoleculares.</Text>

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
export default OQueSao;