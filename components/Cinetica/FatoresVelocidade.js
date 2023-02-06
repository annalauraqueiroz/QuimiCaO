import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function FatoresVelocidade() {
    return (
        <View style={foStyles.principal}>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A Panela de Pressão é um exemplo muito comum sobre como a pressão pode afetar a velocidade da reação.</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>Existem alguns fatores afetam a velocidade com que determinada reação ocorre, entre eles estão: </Text>
            <Text style={foStyles.subtitulo}>Estado físico dos reagentes</Text>
            <Text style={foStyles.txtPropriedades}>Os reagentes devem se aproximar para reagir. Quanto mais facilmente as moléculas dos reagentes colidem umas com as outras, mais rapidamente elas reagem. De modo geral, as reações podem ser classificadas como homogêneas, envolvendo apenas gases ou líquidos, ou como heterogêneas, nas quais os reagentes se encontram em fases diferentes. Sob condições heterogêneas, uma reação é limitada pela área de contato dos reagentes. </Text>
            <Text style={foStyles.txtPropriedades}>Assim, reações heterogêneas que envolvem sólidos tendem a ocorrer mais rapidamente se a área superficial do sólido aumenta. Por exemplo, um medicamento na forma de um pó fino se dissolve no estômago e entra na corrente sanguínea mais rapidamente do que o mesmo medicamento na forma de comprimido. </Text>
            
            <Text style={foStyles.subtitulo}> Concentração dos reagentes:</Text>
            <Text style={foStyles.txtPropriedades}>A maioria das reações químicas ocorre mais rapidamente se a concentração de um ou mais reagentes aumenta. Por exemplo, a palha de aço queima lentamente no ar, que contém 20% de O2, mas se incendeia rapidamente em oxigênio puro.</Text>
            <Text style={foStyles.txtPropriedades}>Com o aumento da concentração dos reagentes, a frequência com que as moléculas de reagente colidem aumenta, levando ao aumento da velocidade.</Text>
            
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Cinetica/concentracao.png")} style={[foStyles.img2, { height: 150 }]} loading="lazy" />
            </View>

            <Text style={foStyles.subtitulo}>Temperatura da reação</Text>
            <Text style={foStyles.txtPropriedades}>A velocidade das reações geralmente aumenta à medida que a temperatura aumenta. Por exemplo, as reações bacterianas que fazem com que o leite estrague ocorrem mais rapidamente à temperatura ambiente do que à temperatura mais baixa do interior de uma geladeira. </Text>
            <Text style={foStyles.txtPropriedades}>O aumento da temperatura eleva a energia cinética das moléculas, assim à medida que as moléculas se movem com maior velocidade, elas colidem com mais frequência e energia, levando a velocidades de reação mais altas. </Text>
            
            <Text style={foStyles.subtitulo}>Presença de um catalisador </Text>
            <Text style={foStyles.txtPropriedades}>Os catalisadores são agentes que aumentam a velocidade das reações sem que eles mesmos sejam consumidos. Eles afetam os tipos de colisão (e, portanto, alteram o mecanismo) que levam à reação. </Text>
            <Text style={foStyles.txtPropriedades}>Os catalisadores desempenham muitos papéis cruciais nos organismos vivos, incluindo nos seres humanos. </Text>
            
            <Text style={foStyles.subtitulo}>Superfície de contato</Text>
            <Text style={foStyles.txtPropriedades}>Um aumento da superfície de contato aumenta a velocidade da reação. </Text>
            <Text style={foStyles.txtPropriedades}>Um exemplo é quando dissolvemos um comprimido de sonrisal triturado e ele se dissolve mais rapidamente do que se estivesse inteiro, isto acontece porque aumentamos a superfície de contato que reage com a água.</Text>
            
            <Text style={foStyles.subtitulo}>Pressão</Text>
            <Text style={foStyles.txtPropriedades}>Quando se aumenta a pressão de um sistema gasoso, aumenta-se a velocidade da reação, pois com a diminuição do volume no segundo recipiente, haverá um aumento da pressão intensificando as colisões das moléculas e em consequência ocorrerá um aumento na velocidade da reação.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Cinetica/pressao.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            
            <Text style={foStyles.txtPropriedades}>Em nível molecular, a velocidade das reações depende da frequência das colisões entre as moléculas. Quanto maior for a frequência das colisões, maior será a velocidade da reação. No entanto, para que uma colisão leve a uma reação, ela deve ocorrer com energia suficiente para quebrar ligações e com orientação adequada para que novas ligações sejam formadas nos locais apropriados. </Text>
            


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://brasilescola.uol.com.br/quimica/cinetica-quimica.htm');
                }}> https://brasilescola.uol.com.br/quimica/cinetica-quimica.htm</Text>
            </Text>
        </View>
    )
}
export default FatoresVelocidade;