import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function IsomeriaEspacial() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                Os isômeros espaciais possuem igual fórmula molecular e a mesma estrutura plana, mas se diferenciam pela orientação dos átomos no espaço. Os isômeros espaciais também são conhecidos como estereoisômeros. Isomeria geométrica e isomeria óptica são as duas formas de manifestação dos isômeros espaciais.
            </Text>
            <Text style={foStyles.subtitulo}>Isomeria geométrica</Text>
            <Text style={foStyles.txtPropriedades}>A isomeria geométrica ou isomeria cis-trans apenas ocorre com moléculas que possuem ligação dupla e considera a orientação dos ligantes em relação à insaturação. Para que os isômeros sejam classificados como geométricos, deve-se considerar que:</Text>
            <Text style={foStyles.txtPropriedades}>● Um único carbono não pode possuir dois ligantes idênticos;{`\n`}
                ● Os carbonos que pertencem à insaturação devem possuir ao menos um ligante igual.</Text>
            <Text style={foStyles.txtPropriedades}>Os isômeros cis são caracterizados pela localização de ligantes iguais do mesmo lado da ligação dupla, enquanto nos isômeros trans ligantes iguais se posicionam de lados opostos da dupla ligação.</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/Isomeria/cistrans.png")} style={[foStyles.img2, { height: 200 }]} loading="lazy" />
            </View>

            <Text style={foStyles.subtitulo}>Isomeria óptica</Text>
            <Text style={foStyles.txtPropriedades}>A isomeria óptica é um tipo de isomeria que ocorre com moléculas aparentemente idênticas, mas não sobreponíveis entre si, ou seja, ao tentar sobrepor duas moléculas, não há correspondência entre os átomos, pois essas moléculas são assimétricas.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Para entender esse conceito, observe suas mãos e coloque uma sobre a outra. Os dedos não correspondem. Os isômeros ópticos são imagens especulares um do outro, significando que um é reflexo do outro frente a um espelho. O par de isômeros ópticos é também conhecido como enantiômeros.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Os isômeros ópticos, ao contrário dos outros casos de isomeria, possuem as mesmas propriedades físicas e químicas, diferenciando-se apenas na questão da interação com a luz polarizada e efeitos fisiológicos.
            </Text>
            <Text style={foStyles.txtPropriedades}>Para identificar esse tipo de isomeria, deve-se considerar a assimetria da molécula, que se caracteriza pela presença de átomo de carbono unido a quatro ligantes diferentes. Esse carbono é chamado de carbono quiral ou assimétrico.
            </Text>
            <Text style={foStyles.txtPropriedades}>Os isômeros ópticos são classificados como levogiros ou dextrogiros, de acordo com a sua capacidade de desviar a luz polarizada. As espécies levogiras conseguem desviar a luz para a esquerda enquanto as espécies dextrogiras desviam a luz para a direita.
            </Text>
            <Text style={foStyles.txtPropriedades}>A ilustração abaixo mostra os isômeros da molécula alanina. Note que eles são imagens especulares um do outro e que o átomo central da molécula está unido a quatro ligantes diferentes, caracterizando um carbono assimétrico ou quiral.
            </Text>
            <Text style={foStyles.txtPropriedades}>Representação dos isômeros ópticos da molécula alanina (C3H7NO2) com ilustração indicando que ambos são imagens especulares não sobreponíveis.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/Isomeria/isomerosopticos.png")} style={[foStyles.img2, { height: 250 }]} loading="lazy" />
            </View>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-organica/isomeria.htm#');
                }}> https://www.manualdaquimica.com/quimica-organica/isomeria.htm#</Text>
            </Text>


        </View>
    )

}
export default IsomeriaEspacial;