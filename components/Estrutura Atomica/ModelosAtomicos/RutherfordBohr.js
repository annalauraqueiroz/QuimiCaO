import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../../assets/styles/funcoesOrganicasStyles';

function RutherfordBohr() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
            O modelo atômico de Rutherford dizia que o átomo seria formado por um núcleo com partículas positivas (prótons) e partículas neutras (nêutrons), além de uma eletrosfera, que seria uma região vazia onde os elétrons ficariam girando ao redor do núcleo. Porém, se o átomo fosse realmente assim, os elétrons, que são partículas negativas, iriam adquirir um movimento na forma de espiral e chocariam-se com o núcleo.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Mas o estudo da natureza da luz proporcionou novas descobertas que ajudaram no desenvolvimento do modelo atômico. Os cientistas descobriram que, quando os gases dos elementos químicos diferentes passam por um prisma, eles produzem espectros descontínuos com linhas ou raias finas de cores diferentes. As cores são, na realidade, ondas eletromagnéticas visíveis, sendo que cada cor possui um comprimento de onda diferente. Assim, cada uma das linhas observadas nos espectros dos elementos corresponde a um comprimento de onda.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Por exemplo, se diferentes sais formados por diferentes elementos químicos forem colocados em uma chama de um Bico de Bunsen, notar-se-á que cada sal terá uma chama de uma cor diferente, conforme mostrado na figura abaixo:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/RutherfordBohr/chamas.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Teste de chamas com cores diferentes (verde: cobre, rosa: lítio e amarelo: sódio)</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
            Niels Bohr relacionou os espectros de linhas dos elementos, principalmente o do hidrogênio, com a constituição do átomo. Assim, em 1913, ele propôs alguns postulados que alteraram a visão do modelo atômico de Rutherford. 
            </Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade}/>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Basicamente ele mostrou que os elétrons movem-se ao redor do núcleo atômico em órbitas circulares que possuem uma energia bem definida e característica, sendo, portanto, um nível de energia ou camada eletrônica. Para cada elétron são permitidas somente certas quantidades de energia, com valores múltiplos inteiros do fóton (quantum de energia).</Text>
                </View>
           </View>
           <Text style={foStyles.txtPropriedades}>
           Ele também mostrou que quando todos os elétrons dos átomos estão se movimentando em seus níveis respectivos de menor energia, o átomo está no seu estado fundamental, que é o mais estável. Mas se o elétron absorve fótons, ele salta de um nível mais próximo do núcleo para um de maior energia, mais externo. Esse é o estado ativado ou estado excitado. Mas ele é instável e o elétron logo emite a energia excedente, retornando para o nível de menor energia.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Conforme a imagem seguinte mostra, para os elementos conhecidos até o momento, a quantidade máxima de níveis de energia são sete, sendo representados pelas letras K, L, M, N, O, P e Q:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/RutherfordBohr/modeloatomico.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Modelo atômico de Rutherford-Bohr</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
            Esse modelo, chamado de modelo atômico de Rutherford-Bohr, explica todos os fatos mencionados anteriormente. Por exemplo, cada elemento possui um espectro descontínuo porque os níveis de energia são quantizados, ou seja, possuem quantidades de energia definidas. Cada energia corresponde a um comprimento de onda.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Além disso, no experimento do teste de chama mencionado ocorre o seguinte: quando colocamos no fogo, os elétrons recebem energia e saltam para um nível mais externo. Mas como esse nível é instável, eles perdem essa energia na forma de radiação eletromagnética visível, que é a luz de cor distinta que visualizamos. Como os níveis de energia são diferentes de elemento para elemento, cada um emite uma cor em um comprimento de onda diferente.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Só para citar um exemplo, veja a figura abaixo. Observe que quando o elétron volta da órbita 4 para a 1, a luz emitida é de cor azul, quando ele volta da órbita 3 para a 1, a cor é verde, e da 2 para a 1, produz luz vermelha:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/RutherfordBohr/saltos.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Três possíveis saltos do elétron de um elemento químico genérico</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-geral/modelo-atomico-rutherford-bohr.htm');
                }}> https://www.manualdaquimica.com/quimica-geral/modelo-atomico-rutherford-bohr.htm</Text>
            </Text>
        </View>
    )
}
export default RutherfordBohr;