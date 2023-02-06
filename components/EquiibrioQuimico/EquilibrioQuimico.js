import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function EquilibrioQuimico() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                O equilíbrio químico é um estado em que a velocidade da transformação dos reagentes
                em produtos é exatamente igual à velocidade da transformação dos produtos em reagentes.
                Nessas condições, não há transformação aparente do sistema, mas as reações direta e inversa
                se processam simultaneamente a uma mesma velocidade</Text>
            <Text style={foStyles.txtPropriedades}>
                Quando misturamos duas ou mais substâncias (reagentes) elas reagem entre si dando origem a substâncias diferentes, denominadas de produtos da reação.
                Na equação química,</Text>
            <Text style={foStyles.txtPropriedades}>A + B ➝ C + D</Text>
            <Text style={foStyles.txtPropriedades}>A e B são os reagentes que produzem os produtos C e D. Poderíamos ter, também, a reação
                inversa,</Text>
            <Text style={foStyles.txtPropriedades}>C + D ➝ A + B</Text>
            <Text style={foStyles.txtPropriedades}>onde os, agora, reagentes C e D reagem tendo como produtos as espécies A e B. As reações
                químicas são, em sua maioria, reações reversíveis que se processam em maior ou menor extensão, conforme o caso.</Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>As reações reversíveis são reações químicas nas quais os reagentes se transformam em produtos e estes podem reagir entre si de maneira a regenerar os reagentes iniciais.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Como as reações reversíveis acontecem nos dois sentidos indicados, elas tendem para
                um estado de equilíbrio, chamado de Equilíbrio Químico.</Text>
            <Text style={foStyles.txtPropriedades}>A + B ⇌ C + D</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A classificação das reações em reversíveis ou irreversíveis é convencional.
                        Cada reação é mais ou menos reversível, porém, em muitos casos, essa
                        reversibilidade é tão insignificante, que pode ser desprezada. Então, a reação é
                        considerada praticamente irreversível.</Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Como o equilíbrio é estabelecido?</Text>
            <Text style={foStyles.txtPropriedades}>A e B reagem a uma dada velocidade para formar C
                e D. À medida que as quantidades de A e B presentes no sistema reacional diminuem, uma
                vez que estes reagentes são consumidos na reação, a velocidade da reação direta entre A e B
                também diminui. No entanto, a quantidade dos produtos C e D formados gradativamente
                aumentam com o avanço da reação direta e, consequentemente, a velocidade da reação
                inversa C + D também aumenta. Para uma determinada relação entre as quantidades de A, B,
                C e D, as velocidades das duas reações serão exatamente as mesmas e, então, um equilíbrio
                dinâmico é estabelecido. Macroscopicamente, as quantidades de A, B, C e D não variam mais
                após o equilíbrio químico ter sido estabelecido.</Text>
            <Text style={foStyles.txtPropriedades}>As reações químicas tendem espontaneamente para o estado de equilíbrio. Uma vez
                que um sistema atinge o equilíbrio químico somente fatores externos são capazes de afastá-lo dessa posição. Tão logo a ação desses fatores seja interrompida, o sistema retornará, depois de
                transcorrido algum tempo, a um novo estado de equilíbrio.</Text>


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www2.ufjf.br/quimicaead//files/2013/05/FQAnalitica_Aula2.pdf');
                }}> https://www2.ufjf.br/quimicaead//files/2013/05/FQAnalitica_Aula2.pdf</Text>
            </Text>
        </View>
    )
}
export default EquilibrioQuimico;