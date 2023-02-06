import React from 'react'
import { Text, Image, View } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Cetona() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.subtitulo}>O que são cetonas? </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A cetona mais conhecida é a utilizada para remover esmalte de unhas, as acetonas
                        (propanona). Além disso, elas também são utilizadas na produção de anidrido acético e medicamentos, como os estimulantes do sistema nervoso central, na fabricação de resinas e como solventes.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                O grupo funcional de uma cetona é um grupo carbonila ligado a dois átomos de carbono.</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>O grupo carbonila é um dos mais importantes grupos funcionais em química orgânica, pelo fato de estar presente em aldeídos, cetonas e ácidos carboxílicos e seus derivados, assim como em carboidratos. Suas propriedades químicas são simples, e um entendimento de suas reações características nos conduz facilmente à compreensão de uma ampla variedade de reações orgânicas e bioquímicas. A acetona é a cetona mais simples.</Text>
                </View>
            </View>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/cetona/propanona.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>A cetona também é usada para a extração de óleos vegetais de sementes. As plantas que são utilizadas nesse procedimento são a soja, o girassol e o amendoim. As cetonas também podem ser encontradas em frutos e flores (odor da violeta), geralmente estão em estado líquido e possuem um cheio agradável, sendo muitas vezes utilizadas na fabricação de perfumes e alimentos</Text>
            <Text style={foStyles.subtitulo}>Propriedades físicas</Text>
            <Text style={foStyles.txtPropriedades}>O oxigênio é mais eletronegativo que o carbono. Portanto, uma dupla ligação carbono-oxigênio é polar: o oxigênio com uma carga negativa parcial e o carbono com uma carga positiva parcial.{`\n`}
                Em cetonas líquidas, a atração intermolecular ocorre entre a carga parcial positiva no carbono carbonílico de uma molécula e a carga parcial negativa no oxigênio carbonílico de outra molécula. Não há a possibilidade de ligação de hidrogênio forte entre moléculas de cetona, o que explica por que esses compostos têm pontos de ebulição menores que os alcoóis e os ácidos carboxílicos, compostos nos quais ocorrem as ligações de hidrogênio.
                {`\n`}Pelo fato de o átomo de oxigênio de cada carbonila ser um aceptor de ligações de hidrogênio, as cetonas de baixa massa molecular são mais solúveis em água do que em solventes apolares de comparável massa molecular.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/cetona/polaridadecarbonila.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>{`\n`}A acetona é infinitamente solúvel em água. À medida que a porção hidrocarbônica da molécula aumenta em tamanho, as cetonas tornam-se menos solúveis em água.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/cetona/estrutura.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>{`\n`}A maioria das cetonas apresenta odores fortes. Os odores das cetonas são geralmente agradáveis, e várias são usadas em perfumes e como agentes flavorizantes. </Text>

            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A estrutura da nomenclatura do grupo da cetona é:</Text>
            <Text style={foStyles.txtNomenclatura}>Prefixo+ infixo + ona</Text>
            <Text style={foStyles.txtPropriedades}>O prefixo tem relação com a quantidade de carbonos na cadeia e o infixo com o tipo de ligação entre os carbonos da cadeia.{`\n`}
                Exemplo:
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/cetona/exemplo1.png")} style={[foStyles.img2, { height: 80 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Temos acima a estrutura de uma cetona de cadeia normal e saturada (apenas ligações simples entre os carbonos). Para nomeá-la, devemos fazer os seguintes passos:</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}- 1º Passo: numerar a cadeia para determinar a quantidade de carbonos e numerar o carbono da carbonila. Essa numeração deve iniciar sempre a partir do carbono mais próximo da carbonila.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/cetona/numeracaocadeia.png")} style={[foStyles.img2, { height: 80 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>{`\n`}- 2º Passo: determinar o prefixo referente ao número de carbono. Como a cadeia apresenta cinco carbonos, o prefixo para essa quantidade é pent.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}- 3º Passo: determinar o infixo. Como a cadeia apresenta só ligações simples entre os carbonos, o infixo referente a essas ligações é o an.</Text>


        </View>
    )

}
export default Cetona;