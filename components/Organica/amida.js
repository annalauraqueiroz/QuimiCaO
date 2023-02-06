import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Amida() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                As amidas são compostos que possuem em sua estrutura um hidrogênio ligado diretamente a um grupo carbonila, que é o carbono realizando uma dupla ligação com o oxigênio. Teoricamente é como se um dos hidrogênios da amônia (NH3) fosse substituído por um grupo acila.</Text>

            <Text style={foStyles.txtPropriedades}>
                Assim, o grupo funcional das amidas é o seguinte:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/amida/amida.png")} style={[foStyles.img2, { height: 110 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Grupo funcional das amidas</Text>
            <Text style={foStyles.txtPropriedades}>Da mesma forma que as aminas são classificadas em primárias, secundárias e terciárias em função do número de substituintes do hidrogênio do grupo amino, as amidas também recebem essa classificação. As amidas primárias possuem como ligante o ‒NH2, as secundárias têm ligante ‒NHR e as terciárias tem ligante ‒NRR’.</Text>
            
            
            <Text style={foStyles.subtitulo}>Propriedades físicas</Text>
            <Text style={foStyles.txtPropriedades}>São compostos de caráter básico e polar e por esta razão em geral são solúveis em água pois realizam ligações hidrogênio. Estas ligações de hidrogênio influenciam nas características físicas das amidas, sendo que as primárias tem pontos de fusão e ebulição mais alto o que, em alguns casos, resulta num composto sólido na temperatura ambiente.</Text>
          

            <Text style={foStyles.subtitulo}>Aplicação das amidas</Text>
            <Text style={foStyles.txtPropriedades}>As amidas são muito empregadas na síntese de polímeros como é o exemplo dos náilons, que são poliamidas encadeadas e também os poliuretanos. Também são empregadas como herbicidas, repelente de insetos e medicamentos.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/amida/remedio.png")} style={[foStyles.img2, { height: 150 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>podem ser sintetizadas em laboratório pela desidratação de sais de amônio (‒NH4), hidratação de nitrilas (‒CN) ou por reações com sais derivados de ácidos.</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A uréia é uma diamida do ácido carbônico que é eliminada pela urina por ser produto final do metabolismo dos animais superiores. Se apresenta como um sólido branco, cristalino, solúvel em água e foi o primeiro composto orgânico sintetizado em laboratório. É usada industrialmente como matéria prima na fabricação de fertilizantes e adubos, fabricação de explosivos, resinas e outros compostos orgânicos.</Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura oficial das aminas primárias segue a seguinte regra estabelecida pela IUPAC:</Text>
            <Text style={foStyles.txtNomenclatura}>Prefixo + AMIDA</Text>
            <Text style={foStyles.txtPropriedades}>O prefixo é o nome do hidrocarboneto.
            </Text>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.infoescola.com/quimica/amidas/#nomenclatura-das-amidas');
                }}> https://www.infoescola.com/quimica/amidas/#nomenclatura-das-amidas</Text>
            </Text>

        </View>
    )

}
export default Amida;