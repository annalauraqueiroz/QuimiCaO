import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ReacoesEliminacao() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
            As reações de eliminação são reações orgânicas em que ocorre a eliminação de átomos ou grupos de átomos de moléculas, num processo inverso às reações de adição.</Text>
            <Text style={foStyles.txtPropriedades}>
            As principais reações desse tipo são constituídas pela perda de dois átomos ou grupos adjacentes, formando uma ligação dupla na estrutura. </Text>
            
            <Text style={foStyles.subtitulo}>Eliminação de hidrogênio ou desidrogenação</Text>
            <Text style={foStyles.txtPropriedades}>
            Nesse tipo de reação ocorre a eliminação de dois átomos de hidrogênio (H), ao contrário da hidrogenação.  Através da eliminação de hidrogênio é possível converter gorduras saturadas em insaturadas, álcoois em cetonas ou aldeídos (oxidação), alcanos em alcenos, aminas em nitrilas, reações muito úteis em diversos ramos da indústria. </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Eliminacao/esquema1.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>

            <Text style={foStyles.subtitulo}>Eliminação de halogênios ou de-halogenação</Text>
            <Text style={foStyles.txtPropriedades}>
            Halogênios são eletronegativos, por isso, sua eliminação é facilitada pela ação de eletropositivos. Um exemplo de eliminação de halogênios é a reação de brometo de etileno (eletronegativo) com o zinco (eletropositivo), que é catalisada por um álcool e produz um alceno.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Eliminacao/esquema2.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>

            <Text style={foStyles.subtitulo}>Eliminação de água ou desidratação</Text>
            <Text style={foStyles.txtPropriedades}>
            Ocorre eliminação de uma ou mais moléculas de água (H2O).{`\n`} Os álcoois, por exemplo, podem sofrer desidratação e esse processo pode ocorrer de duas formas: intramolecular, quando a reação se dá na própria molécula de álcool; ou intermolecular, quando a reação acontece entre duas moléculas de álcool. Álcoois primários tendem a sofrer desidratação intermolecular, produzindo éteres, enquanto os álcoois secundários e terciários costumam desidratar-se de forma intramolecular, formando seus alcenos correspondentes.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Eliminacao/esquema3.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>
            <Text style={foStyles.txtPropriedades}>
            Ácidos carboxílicos também podem sofrer eliminação de água, dando origem ao anidrido do ácido correspondente. Um exemplo é a desidratação do ácido acético, que forma o anidrido acético, substância muito utilizada em sínteses orgânicas. </Text>
            
            <Text style={foStyles.subtitulo}>Eliminação de halogenidretos HCl, HBr e Hl ou desidro-halogenação</Text>
            <Text style={foStyles.txtPropriedades}>
            As reações de desidro-halogenação seguem a regra de Saytzef, que diz que carbonos menos hidrogenados tendem a perder hidrogênio com mais facilidade. Na reação abaixo, por exemplo, existem duas possibilidades de eliminação:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Eliminacao/esquema4.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Observe que, nesta reação, a eliminação ocorre por meio da ação de hidróxido de potássio (KOH) em solução alcoólica. O HBr é um ácido e, por isso, é facilmente eliminado da molécula através do KOH, que é uma base.</Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Eliminações múltiplas</Text>
            <Text style={foStyles.txtPropriedades}>
            Quando a reação de eliminação ocorre duas vezes na mesma molécula, há a formação de duas ligações duplas ou uma ligação tripla. Exemplo:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Eliminacao/esquema5.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>O segundo exemplo consiste numa reação de desidrogenação, muito frequente em indústrias petroquímicas.</Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Eliminação de átomos ou grupos afastados</Text>
            <Text style={foStyles.txtPropriedades}>
            Nas reações citadas anteriormente, há a eliminação de átomos ou grupos vizinhos. Porém, a reação de eliminação também pode ocorrer se esses átomos ou grupos estiverem afastados uns dos outros na cadeia carbônica, o que dá origem a um composto cíclico. Observe:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Eliminacao/esquema6.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.infoescola.com/quimica/reacoes-de-eliminacao/');
                }}> https://www.infoescola.com/quimica/reacoes-de-eliminacao/</Text>
            </Text>
        </View>
    )
}
export default ReacoesEliminacao;