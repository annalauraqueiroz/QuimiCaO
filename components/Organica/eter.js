import React from 'react'
import { Text, Image, View } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Eter() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                Éteres são compostos orgânicos caracterizados pela presença de um átomo de oxigênio (O) ligado a dois radicais monovalentes alquila, ou seja, hidrocarbonetos (grupos orgânicos).
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Organica/FuncoesOrganicas/eter/eter.png")} style={[foStyles.img2, { height: 80 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Os éteres são compostos incolores, de cheiro agradável e pouco solúvel em água, em condições ambientes podem se apresentar na fase sólida, líquida ou gasosa. Os de massa molecular mais elevada estão no estado sólido, os que apresentam dois e três carbonos na molécula são gasosos e os seguintes são líquidos que são extremamente voláteis.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Éteres são usados como solventes de óleos, gorduras, resinas e na fabricação de seda artificial. Dentre as variadas aplicações dos éteres se destaca sua utilização na medicina que é muito importante, sendo usado como anestésico e na preparação de medicamentos.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                O éter etílico (éter comum) pertence à classe de éteres, é um líquido incolor muito volátil (ferve a 35° C), produz frio intenso ao evaporar em contato com a pele e seus vapores são três vezes mais pesados que o ar. Sua utilização é feita em pacientes, é um poderoso anestésico inalatório porque relaxa os músculos, mas possui as desvantagens de causar irritação no trato respiratório e a possibilidade de provocar explosões em ambientes fechados. Sendo assim, ele está em desuso, apesar de ter sido usado durante quase um século.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>   O éter etílico dissolve graxas, óleos e resinas, por isso é usado na indústria como solvente de óleos e tintas.
                    </Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura oficial para os Éteres segue uma regra fixa estabelecida pela União Internacional de Química Pura e Aplicada (IUPAC). Observe o funcionamento das normas:</Text>
            <Text style={foStyles.txtNomenclatura}>prefixo + OXI + radical.</Text>
            <Text style={foStyles.txtPropriedades}>O prefixo que indica o número de carbonos do menor radical</Text>
            <Text style={foStyles.txtPropriedades}>Exemplo: metoxi-propano</Text>
  


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://mundoeducacao.uol.com.br/quimica/eteres.htm');
                }}> https://mundoeducacao.uol.com.br/quimica/eteres.htm</Text>
            </Text>
        </View>
    )

}
export default Eter;