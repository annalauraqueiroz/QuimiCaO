import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ReacoesOxidacao() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                As reações de oxirredução caracterizam-se pela transferência de elétrons entre pelo menos duas espécies envolvidas: a que se oxida (perdendo elétrons - sofrendo aumento do NOx) e a que se reduz (ganhando elétrons - sofrendo redução do NOx). Portanto, um processo é dependente do outro. Entretanto, quando a espécie a ser reduzida (e oxidante) é apenas oxigênio (ou alguma que o contenha na sua molécula, como íon permanganato KMnO4- ou peróxido de hidrogênio H2O2) e/ou um único produto é gerado, usualmente refere-se apenas a nomenclatura oxidação.</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Dentre as reações de oxidação pode-se citar as de combustão (sendo o oxigênio o comburente mais utilizado), e as de corrosão (com desgaste de algum metal puro ou liga pela ação do O2 e conseqüente formação de óxidos).</Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Combustão</Text>
            <Text style={foStyles.txtPropriedades}>
                Na presença de oxigênio e uma fonte de ignição, um combustível qualquer (gasolina, gás natural, hidrogênio, carvão) sofre oxidação com liberação de energia calorífica; que por sua vez consegue fornecer a energia inicial necessária para que outra parcela de combustível queime, promovendo, então, uma reação em cadeia.</Text>
            <Text style={foStyles.txtPropriedades}>
                Um exemplo simples de reação de combustão é a oxidação de carvão mineral (considerando apenas carbono puro):</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Oxidacao/reacao1.png")} style={[foStyles.img2]} loading="lazy" />
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Corrosão</Text>
            <Text style={foStyles.txtPropriedades}>
                A grande parte dos metais possui tendência a liberar elétrons para se estabilizarem eletronicamente, por isso combinam-se facilmente com espécies oxidantes (como o oxigênio) e reagem de modo que o metal sempre é desgastado (a menos que os óxidos formados diminuam ou inibam esse processo ou que alguma intervenção seja feita, como pintura ou revestimento), assim, sofre corrosão.
            </Text>
            <Text style={foStyles.txtPropriedades}>Em caldeiras industriais (equipamentos utilizados na geração de vapor d'água), por exemplo, a preocupação sobre a integridade física dos materiais é extremamente recorrente, uma vez que operam sobre altas pressões (dezenas ou centenas de vezes a atmosférica) e qualquer fissura pode causar graves acidentes. Por isso, é necessário remover ao máximo o oxigênio que se encontra dissolvido na água.</Text>
            <Text style={foStyles.txtPropriedades}>
                De modo resumido, a reação entre o aço (maior componente estrutural de uma caldeira) e o oxigênio é a que se descreve a seguir:</Text>
            <View style={[{ alignItems: 'center' }]}>
                <Text style={foStyles.txtPropriedades}>
                    2Fe + O2 → 2FeO</Text>
                <Text style={foStyles.txtPropriedades}>
                    FeO + 2O2 → 2Fe2O3</Text>
                <Text style={foStyles.txtPropriedades}>
                    FeO + 2O2 → 2Fe2O3</Text>
                <Text style={foStyles.txtPropriedades}>
                    2FeO + 2Fe2O3 → 2Fe3O4, ou simplesmente, </Text>
                <Text style={foStyles.txtPropriedades}>
                    FeO + 2O2 → 2Fe2O3</Text>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Portanto, o ferro pode dar origem aos óxidos de ferro (II) e (III), podendo se combinar e formar a magnetita (ferrugem) - deixando o material frágil.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Assim, os chamados sequestrastes de oxigênio são adicionados à água de caldeira de modo a reduzirem a concentração desde gás: o sulfito de sódio é muito utilizado para este fim, como mostra a reação abaixo:
            </Text>
           <View style={[{ alignItems: 'center' }]}>
                <Text style={foStyles.txtPropriedades}>
                2Na2SO3 + O2 → 2Na2SO4</Text>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade}/>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Sequestrantes de oxigênio são substâncias químicas que removem o oxigênio da água de alimentação e da água de caldeira, inibindo desta forma o processo de corrosão.</Text>
                </View>
           </View>
            <Text style={foStyles.txtPropriedades}>
            O oxigênio consegue oxidar ainda mais o enxofre (passando do Nox +4 para +6). Porém, a dosagem deve ser feita com cautela, pois a formação de sulfato de sódio aumenta a quantidade de sólidos dissolvidos e as chances de incrustação nas tubulações.
            </Text>


            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Oxidacao/reacao1.png")} style={[foStyles.img2]} loading="lazy" />
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.infoescola.com/quimica/oxidacao/');
                }}> https://www.infoescola.com/quimica/oxidacao/</Text>
            </Text>
        </View>
    )
}
export default ReacoesOxidacao;