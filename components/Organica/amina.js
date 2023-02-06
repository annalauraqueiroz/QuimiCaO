import React from 'react'
import { Text, Image, View, Linking} from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Amina() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
            As aminas são bases orgânicas, que são obtidas a partir da substituição de um, dois ou três átomos de hidrogênio da amônia (NH3) por cadeias carbônicas. Portanto, o grupo funcional das aminas pode ser um dos três abaixo:</Text>
            <Text style={foStyles.txtPropriedades}>
            ● Aminas primárias: 1 hidrogênio substituído;</Text>
            <Text style={foStyles.txtPropriedades}>
            ● Aminas secundárias: 2 hidrogênios substituídos;</Text>
            <Text style={foStyles.txtPropriedades}>
            ● Aminas terciárias: 3 hidrogênios substituídos</Text>
            
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/amina/amina.png")} style={[foStyles.img2, { height: 55 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
            Grupo funcional das aminas</Text>

            
            <Text style={foStyles.subtitulo}>Propriedades físicas</Text>
            <Text style={foStyles.txtPropriedades}>As aminas possuem caráter básico porque elas derivam da amônia e seu átomo de nitrogênio possui um par de elétrons não compartilhados, sendo possível, portanto, oferecer esse par de elétrons (segundo a teoria eletrônica de Gilbert Newton Lewis, uma base é toda espécie química capaz de oferecer um par de elétrons). Além disso, o par de elétrons possibilita que as aminas também possam receber um próton H+ (segundo a teoria protônica de Brønsted-Lowry, base é toda espécie química capaz de receber um próton H+).</Text>
            <Text style={foStyles.txtPropriedades}>A metilamina e a etilamina têm o cheiro parecido com o da amônia, as demais aminas possuem cheiro de peixe, que pode ser eliminado com caldo de limão. Inclusive, uma das aminas responsáveis pelo cheiro do próprio peixe é a trimetilamina.</Text>
            <Text style={foStyles.txtPropriedades}>As aminas aromáticas são tóxicas e letais.</Text>
            

            <Text style={foStyles.subtitulo}>Aplicação das aminas</Text>
            <Text style={foStyles.txtPropriedades}>No cotidiano, esse grupo funcional é encontrado nas moléculas de muitas substâncias estimulantes e em drogas, tais como a cafeína, a nicotina, anfetaminas (um de seus derivados é o ecstasy), a cocaína e o crack.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/amina/caffe.png")} style={[foStyles.img2, { height: 150 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>As vitaminas fundamentais para a manutenção da vida são também aminas, daí o seu nome: “vital + amina”. Mas nem todas as vitaminas são aminas. Nos alimentos e no nosso organismo existem também os aminoácidos, que são compostos com o grupo amino e também com o grupo carboxila.</Text>
            <Text style={foStyles.txtPropriedades}>Também estão presentes em anestésicos, antibióticos, um exemplo é a penicilina, e em antidepressivos, como a fluoxetina.</Text>
           
            <Text style={foStyles.txtPropriedades}>As aminas são usadas na síntese de compostos orgânicos, na produção de certos tipos de sabões e na vulcanização da borracha. As aminas aromáticas são muito usadas na fabricação de corantes (como a anilina, que é a benzenoamina) e de explosivos.</Text>
           
            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura oficial das aminas primárias segue a seguinte regra estabelecida pela IUPAC:</Text>
            <Text style={foStyles.txtNomenclatura}>PREFIXO + INFIXO + AMINA</Text>
            <Text style={foStyles.txtPropriedades}>O prefixo é o que indica a quantidade de carbonos na cadeia principal. 
            </Text>
            <Text style={foStyles.txtPropriedades}>O infixo é o tipo de ligação entre os carbonos, sendo an para simples, en para dupla e in para tripla.{`\n`}
            </Text>
            
            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-organica/aminas.htm');
                }}> https://www.manualdaquimica.com/quimica-organica/aminas.htm</Text>
            </Text>

        </View>
    )

}
export default Amina;