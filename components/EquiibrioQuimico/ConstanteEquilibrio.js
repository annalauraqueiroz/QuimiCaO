import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ConstanteEquilibrio() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                O equilíbrio químico pode ser descrito em termos de considerações cinéticas ou
                termodinâmicas.</Text>
            <Text style={foStyles.txtPropriedades}>
                Cineticamente, como é definido o equilíbrio químico? O equilíbrio é um estado
                dinâmico, em que cada espécie participante da reação se forma exatamente na mesma taxa em
                que é consumida. Ou seja, as reações direta e inversa se processam simultaneamente com a
                mesma velocidade.
                Considerando uma reação química genérica reversível do tipo:</Text>
            <Text style={foStyles.txtPropriedades}>aA + bB ⇌ cC + dD</Text>
            <Text style={foStyles.txtPropriedades}>onde a, b, c e d são os coeficientes estequiométricos referentes aos reagentes A e B e produtos
                C e D, respectivamente. De acordo com a “Lei da Ação das Massas”, a velocidade da reação é proporcional às concentrações em mol/L dos reagentes elevadas aos seus coeficientes estequiométricos.</Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A “Lei da Ação das Massas” foi proposta pelos cientistas noruegueses G. M.
                        Guldenberg e P. Waage e apresentada, pela primeira vez, em 1864. Essa lei se
                        constitui no princípio básico para o estudo quantitativo de um sistema em
                        equilíbrio. É aplicável a qualquer reação reversível, tanto na direção direta
                        quanto na inversa.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Para o equilíbrio considerado, a velocidade da reação direta, vd, pode ser expressa por:</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EquilibrioQuimico/vd.png")} style={[foStyles.img2, { height: 75 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>enquanto que, a velocidade da reação inversa, vi
                , é escrita como:</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EquilibrioQuimico/viEquacao.png")} style={[foStyles.img2, { height: 75 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Nessas duas equações de velocidade, kd e ki são constantes de proporcionalidade que
                dependem, porém, de fatores externos como temperatura e pressão.</Text>
            <Text style={foStyles.txtPropriedades}>O equilíbrio químico é alcançado quando as velocidades das reações direta e inversa
                em um processo reativo tornam-se iguais:</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EquilibrioQuimico/vivdEquacao.png")} style={[foStyles.img2, { height: 30 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Desta igualdade, utilizando as expressões das velocidades das reações direta e inversa, dadas pela lei da ação das massas, e rearranjando os termos dos lados direito e esquerdo desta equação, podemos escrever</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EquilibrioQuimico/keq.png")} style={[foStyles.img2, { height: 75 }]} loading="lazy" />
                </View>
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A constante Keq introduzida é a constante de equilíbrio da reação. As concentrações são as medidas após o equilíbrio ter sido estabelecido.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Explicitamente, a constante de equilíbrio é definida em termos das concentrações das espécies
                no equilíbrio, como uma razão direta das concentrações dos produtos e inversa das
                concentrações dos reagentes, tendo os respectivos coeficientes estequiométricos como suas
                potências. Implicitamente, as constantes de equilíbrio são funções da temperatura e pressão utilizadas no experimento.</Text>
                <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Termodinamicamente o equilíbrio químico é definido como um estado de máxima estabilidade termodinâmica para o qual um sistema químico tende espontaneamente,
à temperatura e pressão fixas.</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www2.ufjf.br/quimicaead//files/2013/05/FQAnalitica_Aula2.pdff');
                }}> https://www2.ufjf.br/quimicaead//files/2013/05/FQAnalitica_Aula2.pdf</Text>
            </Text>
        </View>
    )
}
export default ConstanteEquilibrio;