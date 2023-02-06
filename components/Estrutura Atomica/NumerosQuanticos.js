import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function NumerosQuanticos() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                O Princípio da Incerteza de Werner Heisenberg (1901-1976), criado em 1926, estabeleceu que não é possível calcular a posição e a velocidade de um elétron em um mesmo instante, ou seja, quanto maior for a precisão da determinação da medida da posição do elétron, menor será a precisão da medida de sua velocidade e vice-versa.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Por isso, os cientistas passaram a adotar o conceito de “orbital”, que se refere à região no espaço ao redor do núcleo do átomo onde é maior a probabilidade de se encontrar determinado elétron. No modelo de orbitais, o elétron tem característica dual, isto é, como onda-partícula que se desloca no espaço, mas que está dentro de uma região (orbital) ao redor do núcleo, como uma nuvem eletrônica.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Esse movimento do elétron passou a ser descrito por Erwin Schrödinger por meio de uma equação matemática que associava a natureza corpuscular do elétron, ou seja, sua natureza como partícula, sua energia, carga e massa.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Durante o processo algébrico da solução da equação de Schrödinger, surgiram naturalmente códigos matemáticos relacionados com a energia do elétron, que são denominados de números quânticos. Existem quatro números quânticos: número quântico principal (n), número quântico secundário ou azimutal (l), número quântico magnético (m ou ml) e número quântico spin (s ou ms).
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>O conjunto de números quânticos nunca se repete para dois elétrons em um átomo. </Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Portanto, esse conjunto de números quânticos serve para identificar cada elétron na eletrosfera de um átomo. Então, vejamos como determinar cada um:
            </Text>

            <Text style={foStyles.subtitulo}>Número quântico principal (n): Refere-se ao nível de energia do elétron.</Text>
            <Text style={foStyles.txtPropriedades}>
                Segundo o modelo atômico de Rutherford-Bohr, os elétrons movimentam-se ao redor do núcleo em órbitas circulares com quantidades de energia bem definidas e características, sendo, portanto, chamadas de níveis de energia ou camadas eletrônicas. Para os elementos conhecidos até o momento, a quantidade máxima de níveis de energia são sete, sendo representados pelas letras K, L, M, N, O, P e Q, indo da camada mais próxima ao núcleo para a mais distante. Essas camadas correspondem respectivamente aos números 1, 2, 3, 4, 5, 6 e 7.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Assim, os valores de n variam de 1 a 7, de acordo com o nível de energia do elétron. Quanto maior o número quântico principal, maior é a energia do elétron.
            </Text>

            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/camadasEletronicas1.png")} style={[foStyles.img2, { height: 450 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Relação entre o nível de energia e o número quântico principal</Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Número quântico secundário ou azimutal (l): Refere-se ao subnível de energia do elétron.</Text>
            <Text style={foStyles.txtPropriedades}>
                Os elétrons distribuem-se nas camadas eletrônicas de acordo com subníveis de energia, que são identificados pelas letras s, p, d, f, que aumentam de energia nessa ordem. Cada nível comporta uma quantidade máxima de elétrons distribuídos nos subníveis de energia.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Para os elementos até então conhecidos, temos apenas quatro tipos de subníveis:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/subniveis3.png")} style={[foStyles.img2, { height: 250 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Tabela da relação entre o subnível de energia e o número quântico secundário</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Isso significa que, para um número quântico principal n, o número quântico secundário será l = n - 1.
            </Text>
            <Text style={foStyles.subtitulo}>Número quântico magnético (m ou ml): Refere-se à orientação dos orbitais no espaço.</Text>
            <Text style={foStyles.txtPropriedades}>
                O orbital do tipo s possui forma esférica e, portanto, só há uma orientação possível para ele. Desse modo, só haverá um valor possível para o número quântico magnético, que será igual a 0:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/orbitals.png")} style={[foStyles.img2, { height: 180 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Representação do orbital s</Text>
                </View>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Veja que o orbital é representado por um quadrado.</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>
                Em relação ao subnível do tipo p, conforme a figura abaixo indica, existem três orientações espaciais possíveis, porque ele apresenta-se na forma de um duplo ovoide. Então, para o subnível p, há três números magnéticos possíveis, -1, 0, +1, que são representados por três quadradinhos:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/orbitaisp.png")} style={[foStyles.img2, { height: 170 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Representação dos orbitais p</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Já o subnível d possui cinco orientações espaciais possíveis, sendo que o número magnético pode apresentar os seguintes valores: -2, -1, 0, +1, +2:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/orbitaisd.png")} style={[foStyles.img2, { height: 170 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Representação dos orbitais d</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>
                Por fim, o subnível f possui sete orientações espaciais possíveis, sendo que o número magnético pode apresentar os seguintes valores: -3, -2, -1, 0, +1, +2, +3:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/orbitaisf.png")} style={[foStyles.img2, { height: 170 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Representação dos orbitais f</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>
                Desse modo, temos as seguintes possibilidades:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/possibilidades.png")} style={[foStyles.img2, { height: 140 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Tabela da relação entre orbitais e o número quântico magnético</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Esses orbitais costumam ser representados de acordo com um diagrama energético, como o mostrado a seguir, em que cada “escada” corresponde ao nível e cada “degral” corresponde ao subnível.
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/diagramaenergetico.png")} style={[foStyles.img2, { height: 280 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Diagrama energético indicando o número quântico magnético</Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Número quântico spin (s ou ms): Refere-se ao sentido da rotação (no inglês, spin significa rotação) do elétron.</Text>
            <Text style={foStyles.txtPropriedades}>
                Dois elétrons conseguem ficar em um mesmo orbital e não se repelirem porque eles giram em sentidos opostos, o que causa uma força magnética de atração. Assim, o magnetismo em razão do spin de um elétron é anulado pelo magnetismo do spin oposto, ficando um sistema estável.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                É por isso que cada orbital possui no máximo dois elétrons com spins opostos, que são simbolizados por setas. Isso é dito pelo Princípio da Exclusão de Pauli.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Por convenção, adotamos o seguinte: a seta para cima corresponde a ms= -1/2, e a seta para baixo corresponde a ms= +1/2.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                ms = -1/2 ou +1/2ms = ↑ ou ↓
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Segundo a Regra de Hund ou Regra de máxima multiplicidade, o preenchimento dos orbitais de um subnível deve ser feito de uma forma que contenha o maior número possível de elétrons desemparelhados (isolados). Por isso, temos que preencher primeiro os orbitais (quadradinhos), colocando somente as setas para cima, e depois voltamos preenchendo as setas para baixo.
            </Text>


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-geral/numeros-quanticos.htm');
                }}> https://www.manualdaquimica.com/quimica-geral/numeros-quanticos.htm</Text>
            </Text>
        </View>
    )
}
export default NumerosQuanticos;