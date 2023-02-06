import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Alcinos() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                Os alcinos são hidrocarbonetos de cadeia aberta, insaturados e de baixa densidade. São compostos orgânicos artificiais, obtidos por meio da reação entre água e carboreto de cálcio ou por desidrogenação de um alceno.</Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>O grupo funcional alcino é formado por uma vasta diversidade de moléculas, porém a mais utilizada comercialmente é o etino, também conhecido como acetileno. Ele é aplicado na produção de borrachas sintéticas, produtos têxteis, polímeros, além de ser usado como reagente para obtenção de outros produtos químicos e aplicado diretamente como combustível para máquinas de solda, lâmpadas e maçaricos.</Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Propriedades físicas</Text>
            <Text style={foStyles.txtPropriedades}>● São transparentes e inodoros.</Text>
            <Text style={foStyles.txtPropriedades}>● O ponto de fusão é diretamente proporcional ao tamanho do composto, ou seja, alcinos de cadeias maiores terão ponto de fusão maior.
            </Text>
            <Text style={foStyles.txtPropriedades}>● Insolúveis em água, mas solubilizam-se em dispersantes orgânicos, como éter etílico e acetona.
            </Text>
            <Text style={foStyles.txtPropriedades}>● Alcinos terminais, aqueles que têm a tripla ligação nos carbonos que ficam na extremidade da cadeia, são ácidos de caráter fraco
            </Text>
            <Text style={foStyles.txtPropriedades}>● São compostos no geral com densidade menor que 1,0 g/m³.
            </Text>
            <Text style={foStyles.txtPropriedades}>● Em condições normais de temperatura e pressão, alcinos com cadeias de até 4 carbonos, exceto o 2-butino, apresentam-se em estado gasoso; alcinos com cadeias de 5 a 14 carbonos são líquidos; e os demais são compostos sólidos.
            </Text>
            
            <Text style={foStyles.subtitulo}>Aplicação dos alcinos</Text>
            <Text style={foStyles.txtPropriedades}>O acetileno, primeiro composto do grupo alcino, é o mais utilizado comercialmente, diretamente como combustível gasoso para maçaricos, máquinas de solda, lamparinas. Ele é utilizado também como reagente para obtenção de outros compostos, como tetracloreto de acetileno, produto da reação de dupla halogenação do etino com cloro.
            </Text>
            <Text style={foStyles.txtPropriedades}>Ou ele ainda pode ser aplicado como matéria-prima na fabricação de fibras têxteis, polímeros e borrachas sintéticas.
            </Text>

            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura desses compostos segue a mesma regra estabelecida para os alcanos, com a única diferença de que, visto que possui uma ligação tripla, ela deve ser indicada pelo infixo "in", no lugar do “an" usado nos alcanos.</Text>
            <Text style={foStyles.txtNomenclatura}>PREFIXO + IN + O </Text>
            <Text style={foStyles.txtPropriedades}>O prefixo é referente à quantidade de carbonos na cadeia, sendo:</Text>
            <Text style={foStyles.txtPropriedades}>1 C = met                    4C = but                     7 C = hept
                2 C=    et                     5 C = pent                   8C = oct{`\n`}
                3 C = prop                   6 C = hex                     9 C = non</Text>


            <Text style={foStyles.txtPropriedades}>Referências:{`\n`}
                <Text onPress={() => {
                    Linking.openURL('https://mundoeducacao.uol.com.br/quimica/alcinos.htm#:~:text=Propriedades%20dos%20alcinos&text=Transparentes%20e%20inodoros%20(n%C3%A3o%20possuem,como%20%C3%A9ter%20et%C3%ADlico%20e%20acetona.');
                }}>https://mundoeducacao.uol.com.br/quimica/alcinos.htm#</Text>
            </Text>

        </View>
    )

}
export default Alcinos;