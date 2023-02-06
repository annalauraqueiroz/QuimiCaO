import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function LigacoesMetalicas() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}> A ligação metálica é aquela formada exclusivamente por átomos metálicos (do mesmo elemento ou de elementos diferentes). Estes átomos apresentam de um a três elétrons livres na camada de valência, que se encontram afastados do núcleo. Por isso, a força de atração exercida pelo núcleo sobre os elétrons é fraca, fazendo com que estes não permaneçam ligados a um átomo particular no sólido.</Text>
            <Text style={foStyles.txtPropriedades}> Esses elétrons podem se movimentar por todo o metal, formando um mar de elétrons ou uma nuvem eletrônica. Os núcleos dos átomos e os elétrons que não se localizam na camada de valência formam os núcleos iônicos com carga resultante positiva e magnitude igual à carga total dos elétrons de valência por átomo, como mostrado na figura abaixo:</Text>




            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesMetalicas/esquema.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Representação esquemática da ligação metálica.</Text>


            <Text style={foStyles.subtitulo}>Propriedades dos Compostos Metálicos</Text>
            <Text style={foStyles.txtPropriedades}> Dentre as principais propriedades dos compostos metálicos temos:</Text>
            <Text style={foStyles.txtPropriedades}> ● Os metais são encontrados na fase sólida nas condições ambiente (temperatura de 25°C e pressão de 1 atmosfera), exceto o mercúrio, que é líquido.</Text>
            <Text style={foStyles.txtPropriedades}> ● Apresentam brilho característico.</Text>
            <Text style={foStyles.txtPropriedades}> ● Elevada condutividade térmica e elétrica por causa dos elétrons livres.</Text>
            <Text style={foStyles.txtPropriedades}> ● Apresentam elevados pontos de fusão e ebulição.</Text>
            <Text style={foStyles.txtPropriedades}> ● Maleabilidade (facilidade de se moldar mediante a pressão produzindo chapas e lâminas).</Text>
            <Text style={foStyles.txtPropriedades}> ● Apresentam alta ductibilidade (facilidade de se produzir fios).</Text>

            <Text style={foStyles.txtPropriedades}> Os principais metais utilizados hoje em dia são o ferro (Fe) das ligas de aço, o alumínio (Al) das latinhas de refrigerante, ou ouro (Au) presente nas joias, o cobre (Cu) dos fios condutores, o zinco (Zn) presente nas calhas, o cromo (Cr) usado na cromagem do aço, o magnésio (Mg) muito usado para produzir ligas leves, o chumbo (Pb) presente nas baterias, dentre outros.</Text>

            <Text style={foStyles.subtitulo}>Retículo cristalino</Text>
            <Text style={foStyles.txtPropriedades}> Os metais se organizam em células ou retículos cristalinos. </Text>
            <Text style={foStyles.txtPropriedades}> Um material cristalino
                é aquele no qual os átomos encontram-se ordenados sobre longas distâncias atômicas posicionadas sobre uma estrutura tridimensional de pontos chamada rede cristalina. </Text>
            <Text style={foStyles.txtPropriedades}>Um material não-cristalino ou amorfo
                é aquele que não apresenta ordem de longo alcance na disposição dos átomos. A Figura 2 exemplifica um material cristalino (a) e amorfo (b). </Text>


            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesMetalicas/material.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Material cristalino (a) e amorfo (b).</Text>


            <Text style={foStyles.txtPropriedades}>Há um grande número de diferentes estruturas cristalinas nas quais os metais podem se organizar, dependendo de seus elementos constituintes. Os principais são o cúbico de corpo centrado</Text>
            <Text style={foStyles.txtPropriedades}> (CCC), cúbico de faces centradas</Text>
            <Text style={foStyles.txtPropriedades}> (CFC) e hexagonal compacto</Text>
            <Text style={foStyles.txtPropriedades}> (CFC), como mostra a figura abaixo:</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesMetalicas/estruturas.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Estrutura (a) cúbica de corpo centrado (CCC); (b) cúbica de faces centradas (CFC); (c) hexagonal compacta (HC).</Text>


            <Text style={foStyles.txtPropriedades}>Como exemplo, temos o ferro (Fe), o vanádio (V), o nióbio (Nb) e o cromo (Cr), que se organizam segundo a estrutura CCC. Já o alumínio (Al), o níquel (Ni), a prata (Ag), o cobre (Cu) e o ouro (Au) apresentam a estrutura CFC. O titânio (Ti), o zinco (Zn), o magnésio (Mg) e o cádmio (Cd) se organizam em retículos de formato HC.</Text>
            <Text style={foStyles.subtitulo}>Formação de ligas metálicas</Text>
            <Text style={foStyles.txtPropriedades}>Uma liga metálica é um material composto por mais de um elemento, sendo pelo menos um deles metal e que apresenta propriedades metálicas. O interessante de se produzir ligas metálicas é conseguir propriedades que não seriam possíveis de se obter com seus elementos isolados.</Text>
            <Text style={foStyles.txtPropriedades}>Dentre as principais propriedades que podem ser obtidas com a utilização de ligas metálicas, temos:</Text>
            <Text style={foStyles.txtPropriedades}> ● Diminuição da temperatura de fusão: liga de metal fusível. Constituição: Bismuto (Bi), chumbo (Pb), estanho (Sn) e cádmio (Cd).</Text>
            <Text style={foStyles.txtPropriedades}>Aplicação: fusíveis elétricos que se fundem e se quebram, interrompendo a passagem de corrente elétrica.</Text>


            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesMetalicas/fusiveis.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Fusíveis Elétricos.</Text>

            <Text style={foStyles.txtPropriedades}> ● Aumento da dureza: liga de ouro de joalheria. Constituição: ouro (Au), prata (Ag) e cobre (Cu).</Text>
            <Text style={foStyles.txtPropriedades}>Aplicação: manufatura de joias e peças de ornamento.</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesMetalicas/aliancas.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Alianças de ouro.</Text>


            <Text style={foStyles.txtPropriedades}> ● Aumento da resistência mecânica: aço.</Text>
            <Text style={foStyles.txtPropriedades}>Constituição: Ferro (Fe) e carbono (C).</Text>
            <Text style={foStyles.txtPropriedades}>Aplicação: fabricação de peças metálicas que sofrem tração elevada, principalmente em estruturas metálicas.</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesMetalicas/correntes.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Correntes De Ferro.</Text>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://querobolsa.com.br/enem/quimica/ligacao-metalica');
                }}> https://querobolsa.com.br/enem/quimica/ligacao-metalica</Text>
            </Text>
        </View>
    );
}
export default LigacoesMetalicas;