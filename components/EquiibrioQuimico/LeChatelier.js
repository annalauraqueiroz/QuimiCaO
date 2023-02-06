import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function LeChatelier() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                O princípio de Le Chatelier afirma que quando uma variação é aplicada em um sistema em equilíbrio, a posição do equilíbrio se desloca em um sentido que tende a reduzir o efeito dessa variação.</Text>
            <Text style={foStyles.txtPropriedades}>
                Os principais fatores que causam esse deslocamento no equilíbrio químico são: concentração
                dos reagentes ou produtos participantes da reação, pressão e temperatura.</Text>
            <Text style={foStyles.txtPropriedades}>O uso de catalisadores apenas acelera a velocidade das reações, isto é, no caso de reações reversíveis, faz com que elas atinjam o equilíbrio mais rapidamente. Mas os catalisadores não interferem no deslocamento do equilíbrio, pois eles atuam igualmente tanto no sentido da reação direta quanto no sentido da reação inversa.</Text>
            <Text style={foStyles.txtPropriedades}>Um exemplo da vida real que mostra a importância do princípio de Le Chatelier é o efeito das altas altitudes sobre o fornecimento de oxigênio para o corpo. Se você já viajou para as montanhas nas férias, pode ter sentido uma “tontura” e, especialmente, cansaço durante os primeiros dias de sua visita. Essas sensações resultaram de uma diminuição da oferta de oxigênio para o corpo, por causa da pressão mais baixa do ar em altitudes mais elevadas. Por exemplo, o fornecimento de oxigênio em Leadville, Colorado (altitude, 3.048 metros), é de apenas cerca de dois terços do fornecimento ao nível do mar. Podemos compreender os efeitos da diminuição do suprimento de oxigênio pelo seguinte equilíbrio:</Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}>Hb(aq) + 4O2(g) →  Hb(O2)4(aq)</Text>
            <Text style={foStyles.txtPropriedades}>em que Hb representa a hemoglobina, proteína contendo ferro que transporta o O2 dos seus pulmões para os tecidos, onde ele é usado para manter o metabolismo. O coeficiente 4 na equação significa que cada molécula de hemoglobina capta quatro moléculas de O2 nos pulmões. Observe que, pelo princípio de Le Chatelier, uma pressão de oxigênio menor fará com que esse equilíbrio se desloque para a esquerda, para longe da hemoglobina oxigenada. Isso gera um suprimento de oxigênio inadequado aos tecidos, que por sua vez resulta em fadiga e uma sensação de “tontura”.</Text>
            <Text style={foStyles.subtitulo}>Efeito de uma variação no volume</Text>
            <Text style={foStyles.txtPropriedades}>Quando um gás é comprimido sua a pressão aumenta. Isso ocorre porque as moléculas presentes estão agora contidas em um espaço menor e elas batem nas paredes de seu recipiente com mais frequência, gerando uma pressão maior. Por isso, quando o volume de um sistema de reação gasosa em equilíbrio é subitamente reduzido, pelo princípio de Le Chatelier, o sistema se desloca no sentido que reduz a pressão.
                Por exemplo, considere a reação </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}>CaCO3(s) ↔️  CaO(s) + CO2(g)
            </Text>
            <Text style={foStyles.txtPropriedades}>em um recipiente com um êmbolo móvel. Se o volume é subitamente diminuído empurrando-se o êmbolo, a pressão do CO2 gasoso aumenta. O sistema, para compensar esse aumento de pressão desloca-se para a esquerda, no sentido que reduz a quantidade de gás presente. Ou seja, um deslocamento para a esquerda consumirá as moléculas de CO2, o que diminui a pressão.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A pressão diminuirá pois terá menos moléculas presentes para bater nas paredes, porque a maior parte das moléculas de CO2 combinou com o CaO e, portanto, tornou-se parte do CaCO3 sólido.</Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>O que acontece se variarmos a temperatura?
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>As variações de pressão e temperatura NÃO alteram a constante de equilíbrio.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>O efeito da temperatura sobre o equilíbrio altera o valor de K, pois ele varia com a temperatura. Para analisar as variações classificamos as reações de acordo com sua produção ou absorção de calor.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Lembrete: Reações que produzem calor são exotérmicas.
                        Reações que absorvem o calor são endotérmicas.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Em uma reação endotérmica consideramos o calor como um dos reagentes, e na exotérmica consideramos o calor como um produto. Um exemplo que temos é a síntese da amônia a partir de nitrogênio e hidrogênio:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EquilibrioQuimico/sintese.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Quando adicionarmos energia nesse sistema em equilíbrio (aquecendo o sistema), o deslocamento será no sentido que consome energia, ou seja: para a esquerda.
            </Text>
            <Text style={foStyles.txtPropriedades}>Sendo assim, para utilizar o princípio de Le Chatelier para descrever o efeito de uma variação de temperatura em um sistema no equilíbrio, simplesmente trate a energia como um reagente (em um processo endotérmico) ou como um produto (em um processo exotérmico), e preveja o sentido do deslocamento da mesma forma que você faria se um reagente ou produto real estivesse sendo adicionado ou removido.
            </Text>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://integrada.minhabiblioteca.com.br/reader/books/9788522122059/pageid/562');
                }}> https://integrada.minhabiblioteca.com.br/reader/books/9788522122059/pageid/562</Text>
            </Text>
        </View>
    )
}
export default LeChatelier;