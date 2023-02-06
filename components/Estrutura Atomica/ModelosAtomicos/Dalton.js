import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../../assets/styles/funcoesOrganicasStyles';

function Dalton() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                A natureza da matéria sempre foi algo que os pensadores, filósofos e cientistas tentaram explicar. Tanto que já por volta de 450 a.C., os filósofos gregos Leucipo e Demócrito tiveram a ideia de que a matéria seria formada por pequenas partículas indivisíveis que não poderiam ser destruídas. Essas partículas receberam o nome de “átomos”, palavra que em grego significa “indivisível”.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                No entanto, isso se chocou com as ideias de Aristóteles (384-322 a.C.), que dizia que a matéria era descontínua e que tudo seria formado apenas por quatro “elementos”: fogo, terra, ar e água. Essas ideias foram adotadas pela maioria durante cerca de 2000 anos.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Então, em 1803, o químico inglês John Dalton (1766-1844) retomou as ideias originais de Leucipo e Demócrito. Depois de realizar vários experimentos para comprovar as suas hipóteses, ele formulou os seguintes postulados, isto é, proposições que não podem ser comprovadas, mas que são admitidas como verdadeiras e que servem como ponto de partida para a dedução ou conclusão de outras afirmações:
            </Text>
            <Text style={foStyles.txtPropriedades}>
                1. A matéria seria formada por pequenas partículas esféricas, maciças (algo que não é oco, mas que é compacto) e indivisíveis, denominadas átomos;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                2. A matéria seria descontínua, pois entre um átomo e outro haveria espaços vazios;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                3. Um elemento químico seria formado por um conjunto de átomos de mesmas massas, tamanhos e propriedades;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                4. Elementos químicos diferentes seriam formados por átomos que teriam massas, tamanhos e propriedades diferentes;
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Dalton/tiposdeatomos.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Átomos de diferentes elementos, segundo Dalton, com tamanhos e cores fantasia</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>
                1. A combinação entre átomos diferentes, em uma proporção de números inteiros, formariam substâncias diferentes;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                2. Uma substância composta seria formada por espécies químicas de diferentes elementos com quantidade fixa de cada um deles. Dalton deu o nome “átomos compostos” a essas espécies;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                3. Os “átomos compostos” seriam formados por um pequeno número de “átomos simples”;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                4. Um átomo não poderia ser destruído; em uma reação química, eles apenas se rearranjariam para formar novas substâncias.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Para explicar sua hipótese, Dalton elaborou um modelo, já que os átomos não podiam ser vistos. Os modelos não são a realidade, mas uma representação da natureza, uma imagem mental construída a fim de explicar uma teoria a respeito de algum fenômeno que não pode ser visualizado. Um modelo adequado torna possível que se compreenda melhor a natureza e que até mesmo se faça previsões sobre o fenômeno estudado.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Esse modelo, hoje chamado de modelo atômico de Dalton, era que o átomo seria semelhante a uma bola de bilhar, esférica, maciça e indivisível:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Dalton/boladebilhar.png")} style={[foStyles.img2, { height: 150 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>O modelo atômico de Dalton parecia com uma bola de bilhar</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
            Para melhor representar a sua teoria atômica, Dalton também substituiu os antigos símbolos que eram usados pelos alquimistas para representar o que eles acreditavam ser elementos químicos por símbolos mais apropriados, até porque alguns elementos descobertos não eram conhecidos pelos alquimistas.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Ele propôs uma série de círculos com linhas, pontos ou letras no meio que representassem cada elemento químico:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Dalton/representacoes.png")} style={[foStyles.img2, { height: 210 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Símbolos para representar átomos de Dalton</Text>
                </View>
            </View>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade}/>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Atualmente, sabemos que alguns dos elementos representados por Dalton são, na realidade, compostos químicos, porque as técnicas da época ainda não permitiam a sua decomposição nos elementos que os constituíam. Por exemplo, o que Dalton achava ser o elemento alumínio (A?) era, na realidade, o composto alumina (A?2O3).</Text>
                </View>
           </View>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-geral/modelo-atomico-dalton.htm');
                }}> https://www.manualdaquimica.com/quimica-geral/modelo-atomico-dalton.htm</Text>
            </Text>
        </View>
    )
}
export default Dalton;