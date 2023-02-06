import React from 'react'
import { Text, Image, View, Linking} from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function LigacoesIonicas() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.subtitulo}>O que são os compostos iônicos?</Text>
            <Text style={foStyles.txtPropriedades}> ● Possuem íons positivos e negativos</Text>
            <Text style={foStyles.txtPropriedades}> ● Sofrem atrações eletrostáticas não direcionais;</Text>
            <Text style={foStyles.txtPropriedades}> ● Formam estruturas cristalinas</Text>

            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesIonicas/estruturaIonica.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
                </View>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Ao formar a estrutura cristalina, o cristal dele ser eletricamente neutro, portanto, os compostos iônicos DEVEM ter perfeito equilíbrio de cargas, ou seja: a soma de todas as cargas deve ser igual a zero.</Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Energia de Ionização</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Os átomos apresentam também segunda, terceira, quarta energia de ionização.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>PRIMEIRA ENERGIA DE IONIZACAO (kJ/mol) é a energia necessária para remover um mol de elétrons mais fracamente ligados (mais externos) de um mol de átomos gasosos, de maneira a produzir 1 mol de íons gasosos cada um com carga +1.</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesIonicas/equacao.png")} style={[foStyles.img2, { height: 50 }]} loading="lazy" />
                </View>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Os METAIS possuem baixa energia de ionização (formam cátions). NÃO METAIS têm elevada energia de ionização</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Podemos avaliar a energia de ionização de elementos observando a tabela periódica. A energia de ionização aumenta para a esquerda e para cima da tabela.</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesIonicas/tabela.png")} style={[foStyles.img2, { height: 220 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Para avaliar a energia de ionização é necessário notar alguns aspectos importantes como:</Text>
            <Text style={foStyles.txtPropriedades}> ● Efeito da carga nuclear (raios atômicos de átomos com o mesmo número de camadas Na = 180 pm; Mg 150 pm);</Text>
            <Text style={foStyles.txtPropriedades}> ● Efeito do tamanho do átomo (maior número quântico associado ao elétron mais externo):
                <Text>{`\n`}{`\t`}◦ Efeito de blindagem.</Text>
                <Text>{`\n`}{`\t`}◦ Elétrons mais externos passam a maior parte do tempo longe do núcleo.</Text>
            </Text>
            <Text style={foStyles.txtPropriedades}> ● Para um mesmo nível de energia de ionização, elétrons emparelhados são removidos mais facilmente que os não emparelhados.</Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Quanto maior a EI menor a probabilidade de um átomo ceder elétrons – Compare as EI dos átomos situados nas extremidades direita e esquerda da tabela periódica!</Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Como pode ocorrer a formação de íons?</Text>
            <Text style={foStyles.txtPropriedades}> A formação de íons pode ocorrer na busca de uma configuração estável, como:</Text>
            <Text style={foStyles.txtPropriedades}> ● de gás nobre: Na (11 - Ne), Cl (17 - Ar);</Text>
            <Text style={foStyles.txtPropriedades}> ● pseudo gás nobre: Zn (30);</Text>
            <Text style={foStyles.txtPropriedades}> ● elemento de transição com elétron “d” desemparelhado: Fe (26), Co (27);</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesIonicas/ligacao.gif")} style={[foStyles.img2, { height: 150 }]} loading="lazy" />
                </View>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Pode-se ter compostos iônicos formados por íons simples, mas também por
                        radicais como NO3-1; CO3-2; NH4+e SO4-2 ou mesmo compostos em que os ânions são polímeros complexos como os silicatos ou outros óxidos complexos</Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Propriedades dos compostos iônicos</Text>
            <Text style={foStyles.txtPropriedades}> ● Maus condutores de eletricidade no estado sólido</Text>
            <Text style={foStyles.txtPropriedades}> ● Apresentam elevadas energias de ligação</Text>
            <Text style={foStyles.txtPropriedades}> ● Ligações não são direcionais – forças eletrostáticas.</Text>
            <Text style={foStyles.txtPropriedades}> ● São duros.</Text>
            <Text style={foStyles.txtPropriedades}> ● Ponto de fusão e Ponto de ebulição elevados:</Text>
            <Text style={foStyles.txtPropriedades}> ● São frágeis</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>O melhor solvente dos compostos iônicos é a água, pois, assim como ela, estes compostos são polares. No entanto, apesar de serem polares nem todos os compostos iônicos se dissolvem na água. Alguns exemplos de compostos que não solubilizam em água são: carbonato de cálcio (CaCO3), de estrôncio (SrCO3) e de bário (BaCO3), além do cloreto de prata (AgCl), que é praticamente insolúvel em água.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}> Uma corrente elétrica flui por de um fio de metal pois os elétrons estão livres para se mover pelo fio. Sabemos que os elétrons em movimento que carregam a corrente, dessa forma, as substâncias que contém íons podem conduzir uma corrente elétrica quando os seus íons podem se mover. Como por exemplo: nos compostos iônicos sólidos (como no sal de cozinha, NaCl), os íons ficam presos e não podem se mover. Mas quando esses compostos estão fundidos (líquidos) sua estrutura é rompida e os íons podem se mover, daí a corrente elétrica pode viajar pelo sal derretido.</Text>
            <Text style={foStyles.txtPropriedades}> Seguimos o mesmo raciocínio quando o sal está dissolvido em água, pois seus íons ficam dispersos e podem se mover pela água.</Text>
            

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://edisciplinas.usp.br/pluginfile.php/4604213/mod_resource/content/1/Ligacoes%20ionicas_2019.pdf');
                }}> https://edisciplinas.usp.br/pluginfile.php/4604213/mod_resource/content/1/Ligacoes%20ionicas_2019.pdf</Text>
            </Text>
        </View>
    );
}
export default LigacoesIonicas;