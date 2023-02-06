import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function SolucaoTampao() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}> Solução-tampão é uma mistura formada por um ácido ou por uma base fracos inorgânicos e por um sal inorgânico que apresente o mesmo ânion do ácido ou o mesmo cátion da base.</Text>
            <Text style={foStyles.txtPropriedades}> A principal característica de uma solução-tampão é o fato de seu pH manter-se praticamente inalterado, mesmo que acrescido de uma certa quantidade de solução contendo um ácido ou uma base fortes.</Text>

            <Text style={foStyles.subtitulo}>Formação de uma solução-tampão</Text>

            <Text style={foStyles.txtPropriedades}> Eletrólitos são substâncias que, quando adicionadas em água, sofrem dissociação (liberam íons) ou ionização (produzem íons). No caso da solução-tampão, além dos sais, são utilizados outro eletrólito: um ácido ou uma base fracos. Abaixo, aprenderemos como reconhecer esses eletrólitos fracos.</Text>
            <Text style={foStyles.subtitulo}>Comportamento e pH de uma solução-tampão</Text>

            <Text style={foStyles.txtPropriedades}> As soluções-tampão podem ser ácidas ou básicas. Na teoria do pH, meio ácido é aquele que apresenta pH menor que 7, enquanto meio básico é aquele que apresenta pH maior que 7. Essas referências são também utilizadas para as soluções-tampão.</Text>
            <Text style={foStyles.subtitulo}>Solução-tampão ácida</Text>
            <Text style={foStyles.txtPropriedades}> Uma solução-tampão ácida é aquela constituída por um ácido fraco, como o ácido sulfídrico (H2S), e por um sal que apresente o mesmo ânion do ácido, como o sulfeto de potássio (K2S).</Text>
            <Text style={foStyles.txtPropriedades}> Equações de ionização e de dissociação da solução-tampão ácida.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/equacoesTampao.png")} style={[foStyles.img2, { height: 50 }]} loading="lazy" />
            </View>

            <Text style={foStyles.txtPropriedades}> Analisando as equações, observa-se que o ácido, por ser fraco, ioniza pouco (seta menor), enquanto o sal, por ser solúvel, dissocia bastante (seta maior).</Text>
            <Text style={foStyles.txtPropriedades}> O valor do pH de uma solução-tampão ácida é sempre menor que 7. Por apresentar um ácido fraco, no entanto, o pH dessa solução não será muito abaixo desse valor. Ao receber ácido ou base fortes, seu pH não sofrerá grandes alterações.)</Text>
            <Text style={foStyles.subtitulo}>Adição de ácido forte</Text>
            <Text style={foStyles.txtPropriedades}> Suponhamos, por exemplo, que o ácido bromídrico (HBr) seja adicionado na solução-tampão ácida H2S/K2S:</Text>
            <Text style={foStyles.txtPropriedades}> Equação que representa a ionização de um ácido forte.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/ioAcForte.png")} style={[foStyles.img2, { height: 40 }]} loading="lazy" />
            </View>


            <Text style={foStyles.txtPropriedades}> Quando se adiciona ácido bromídrico na solução-tampão, há um acréscimo do íon H+, que já existe no meio. Esse íon irá interagir com o ânion Br-, formando HBr. O aumento da quantidade de bromídrico desencadeará o aumento de sua ionização e a reposição dos íons Br-. Por isso, o pH permanece inalterado.</Text>
            <Text style={foStyles.subtitulo}>Adição de uma base forte</Text>
            <Text style={foStyles.txtPropriedades}> Suponhamos que o hidróxido de sódio (NaOH) seja adicionado na solução-tampão ácida H2S/K2S:</Text>
            <Text style={foStyles.txtPropriedades}> Equação que representa a dissociação de uma base forte</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/ioAcForte.png")} style={[foStyles.img2, { height: 40 }]} loading="lazy" />
            </View>

            <Text style={foStyles.txtPropriedades}> Assim como ppm significa “partes por milhão”, ppb significa “partes por bilhão”, e ppt é “partes por trilhão”:</Text>
            <Text style={foStyles.txtPropriedades}>Essas concentrações tão pequenas são aplicadas principalmente quando se trabalha com dados referentes à poluição do ar e da água. Veja abaixo uma tabela que mostra os principais gases-estufa presentes na atmosfera terrestre e a sua abundância (dados de 1998):</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/baseForte.png")} style={[foStyles.img2, { height: 40 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Quando essa base é adicionada nessa solução-tampão, há também a adição do íon hidróxido (OH-), o qual tem afinidade com o hidrônio H+, existente no meio. Esses íons unem-se, formando água (H2O). Esse fato amplia a ionização do ácido, repondo os hidrônios gastos e mantendo o pH inalterado.</Text>
           
            <Text style={foStyles.subtitulo}>Composição e pH de uma solução-tampão básica</Text>
            <Text style={foStyles.txtPropriedades}> Uma solução-tampão básica é aquela constituída por uma base fraca, como o hidróxido de alumínio [Al(OH)3], e por um sal que apresente o mesmo ânion do ácido, como o cloreto de alumínio (AlCl3).</Text>
            <Text style={foStyles.txtPropriedades}> Equações de dissociação da solução-tampão básica.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/tampaobasica.png")} style={[foStyles.img2, { height: 50 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}> O valor do pH de uma solução-tampão básica é sempre maior que 7. Por apresentar uma base fraca, essa solução não terá um pH muito acima desse valor. Ao receber ácido ou base fortes, seu pH não sofrerá grandes alterações.</Text>
          
            <Text style={foStyles.subtitulo}>Adição de ácido forte</Text>
            <Text style={foStyles.txtPropriedades}> Suponhamos, por exemplo, que o ácido bromídrico (HBr) seja adicionado na solução-tampão básica Al(OH)3/AlCl3.</Text>
            <Text style={foStyles.txtPropriedades}> Equação que representa a ionização de um ácido forte.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/acidoforte.png")} style={[foStyles.img2, { height: 50 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Quando essa base é adicionada nessa solução-tampão, há o acréscimo do íon hidrônio (H+), o qual tem afinidade com o hidróxido (OH-), existente no meio. Esses íons unem-se, formando água (H2O). Esse fato amplia a dissociação da base, repondo os íons hidróxido e mantendo o pH inalterado.</Text>
          
            <Text style={foStyles.subtitulo}>Adição de uma base forte</Text>
            <Text style={foStyles.txtPropriedades}> Suponhamos, por exemplo, que o hidróxido de sódio (NaOH) seja adicionado na solução-tampão básica Al(OH)3/AlCl3:</Text>
            <Text style={foStyles.txtPropriedades}> Equação que representa a dissociação de uma base forte.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/baseforte2.png")} style={[foStyles.img2, { height: 50 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Quando essa base é adicionada nessa solução-tampão, adiciona-se também uma quantidade do íon hidróxido (OH-), o qual já existente no meio. Esses íons unem-se ao cátion alumínio (Al+3), formando hidróxido de alumínio [Al(OH)3]. Esse fato amplia a dissociação da base, repondo os cátions alumínio gastos e mantendo o pH inalterado.</Text>
          
            <Text style={foStyles.subtitulo}>Fórmula do pH de solução-tampão ácida</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/phformula.png")} style={[foStyles.img2, { height: 42 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}> [sal] = concentração mol/L do sal na solução</Text>
            <Text style={foStyles.txtPropriedades}> [ácido] = concentração mol/L do ácido na solução</Text>
            <Text style={foStyles.txtPropriedades}> pKa = -log [constante de ionização do ácido]</Text>
           
            <Text style={foStyles.subtitulo}>Fórmula do pH de solução-tampão básica</Text>
            <Text style={foStyles.txtPropriedades}> pKb = -log [constante de ionização da base]</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/phformula2.png")} style={[foStyles.img2, { height: 50 }]} loading="lazy" />
            </View>
            
            <Text style={foStyles.subtitulo}>Aplicações das soluções-tampão</Text>
            <Text style={foStyles.txtPropriedades}> Biológicas</Text>
            <Text style={foStyles.txtPropriedades}> ● O sangue é uma solução-tampão formada, principalmente, por substâncias como ácido carbônico (H2CO3) e ânion bicarbonato (HCO3).</Text>
            <Text style={foStyles.txtPropriedades}> ● Os sistemas enzimáticos relacionados com a proteína histidina também são soluções-tampão.</Text>
           
            <Text style={foStyles.txtPropriedades}> Químicas</Text>
            <Text style={foStyles.txtPropriedades}> ● Reações de precipitação, nas quais os produtos formados precipitam na forma de um sólido em virtude da variação no pH do meio, são soluções-tampão.</Text>
            <Text style={foStyles.txtPropriedades}> ● Reações eletródicas, que ocorrem em uma pilha ou em uma eletrólise, são também soluções-tampão.</Text>
           
            <Text style={foStyles.txtPropriedades}> Biotecnológicas</Text>
            <Text style={foStyles.txtPropriedades}> ● Eletroforese: solução-tampão com a presença da substância tris-acetato, que permite a separação do RNA e do DNA da célula.</Text>
            <Text style={foStyles.txtPropriedades}> ● Quebra do DNA: durante a extração e quebra do DNA, deve haver uma solução-tampão capaz de mantê-lo íntegro.</Text>
            <Text style={foStyles.txtPropriedades}> ● Lavagem de células: solução-tampão formado por sal e fosfato que tem a função de manter o meio onde as células estão com condições próximas àquelas encontradas no corpo humano.</Text>
           
           

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/fisico-quimica/solucao-tampao.htm');
                }}> https://www.manualdaquimica.com/fisico-quimica/solucao-tampao.htm</Text>
            </Text>
        </View>
    );
}
export default SolucaoTampao;