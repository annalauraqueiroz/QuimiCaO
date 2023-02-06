import React from  'react'
import {Text, Image, View} from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ComposicaoDoAtomo (){
        return(
<View>
            <Text style={foStyles.txtPropriedades}>
            Átomos são partículas infinitamente pequenas que constituem toda a matéria do universo. Sua estrutura é formada pelo núcleo, que possui duas partículas, os prótons e nêutrons, e pela eletrosfera, que detém os elétrons.

            {`\n`}A concepção de qual seria a representação da estrutura atômica foi mudando ao longo do tempo devido a novas descobertas feitas pelos cientistas. Contudo, esses modelos são apenas uma tentativa de representar a realidade, visto que  ainda não é possível ao ser humano enxergar um átomo isolado. Por isso, os modelos atômicos buscam retratar os principais componentes do átomo e de sua estrutura, explicando comportamentos físicos e químicos da matéria.

            {`\n`}O átomo é formado por uma pequena e densa região central chamada de núcleo e ao redor dele há a eletrosfera, onde se encontram os elétrons, que pode ser dividida em camadas eletrônicas, subníveis energéticos e orbitais atômicos.</Text>
          
            <Text style={foStyles.subtitulo}>Camadas eletrônicas</Text>
            <Text style={foStyles.txtPropriedades}>O átomo apresenta níveis energéticos, que correspondem a sete camadas em torno de um núcleo e nelas estão os elétrons que orbitam ao redor. As camadas são denominadas de K, L, M, N, O, P e Q.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/camadas.png")} style={[foStyles.img2]} loading="lazy"/>
            </View>
            <Text style={foStyles.txtPropriedades}>Cada camada pode conter um certo número de elétrons, conforme a tabela a seguir.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/tabela.png")} style={[foStyles.img2,{height:150}]} loading="lazy"/>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade}/>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Por exemplo, o átomo de hélio (He) tem número atômico 2 e, por isso, apresenta 2 prótons no núcleo. Consequentemente, na eletrosfera do átomo há apenas 2 elétrons, que estão localizados na primeira e única camada eletrônica do átomo, a camada K que corresponde ao primeiro nível de energia.</Text>
                </View>
           </View>
           <Text style={foStyles.subtitulo}>Subníveis energéticos</Text>
           <Text style={foStyles.txtPropriedades}>Os níveis de energia abrigam subníveis, que são representados por s, p, d, f. Cada subnível acomoda um número máximo de elétrons, que é respectivamente 2, 6, 10 e 14.</Text>
           <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/subniveis.png")} style={[foStyles.img2,{height:150}]} loading="lazy"/>
            </View>
            <Text style={foStyles.txtPropriedades}>Com essas informações é possível fazer a distribuição eletrônica de um átomo e saber a localização do elétron mais externo e mais energético.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}Exemplo:{`\n`}Nitrogênio (N)</Text>
            <Text style={foStyles.txtPropriedades}>Número Atômico: 7
                {`\n`}Distribuição eletrônica: 1s2 2s2 2p3{`\n`}
                {`\n`}O átomo de nitrogênio apresenta dois níveis de energia, K e L, e seus 7 elétrons ocupam os subníveis s e p.
                {`\n`}{`\n`}K: s2 = 2 elétrons
                {`\n`}L: s2 + p3 = 5 elétrons
                {`\n`}{`\n`}Observe que a camada L pode conter até 8 elétrons, mas no átomo de nitrogênio existem apenas 5 elétrons nessa camada.
            </Text>
           
            <Text style={foStyles.subtitulo}>Orbitais atômicos</Text>
            <Text style={foStyles.txtPropriedades}>Os orbitais caracterizam a região mais provável de se encontrar um elétron dentro de um subnível energético (s, p, d, f) em uma camada eletrônica (K, L, M, N, O, P, Q).</Text>
            <Text style={foStyles.txtPropriedades}>
            {`\n`}• Subnível s: apresenta 1 orbital que abriga até 2 elétrons
            {`\n`}• Subnível p: apresenta 3 orbitais que abrigam até 6 elétrons
            {`\n`}• Subnível d: apresenta 5 orbitais que abrigam até 10 elétrons
            {`\n`}• Subnível f: apresenta 7 orbitais que abrigam até 14 elétrons
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/subniveis2.png")} style={[foStyles.img2,{height:150}]} loading="lazy"/>
            </View>
            <Text style={foStyles.txtPropriedades}>Utilizando o nitrogênio novamente como exemplo e distribuindo seus 7 elétrons em orbitais atômicos teríamos:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/orbitais.png")} style={[foStyles.img2,{height:150}]} loading="lazy"/>
            </View>
        </View>
        )
}
export default ComposicaoDoAtomo;