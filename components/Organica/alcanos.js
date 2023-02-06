import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Alcanos() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                Os alcanos são hidrocarbonetos acíclicos e saturados, ou seja, são compostos formados apenas por átomos de carbono e hidrogênio, de cadeia aberta e com somente ligações simples entre seus carbonos.</Text>
            <Text style={foStyles.txtPropriedades}>Os alcanos também são chamados de parafinas ou hidrocarbonetos parafínicos, sendo que essa palavra vem do latim parum, que significa “pouca ou pequena”, e affinis, que é “afinidade”, isto é, “pouca afinidade”. Isso acontece porque esses compostos são pouco reativos em decorrência do fato de suas moléculas serem apolares. Como consequência disso, as suas reações ocorrem com dificuldade, dessa forma, altas temperaturas, catalisadores, luz ultravioleta, entre outros, fazem-se necessários.</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A parafina é um produto muito utilizado na produção de velas, que são constituídas fundamentalmente por uma mistura de vários alcanos.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>O principal alcano utilizado no cotidiano é o metano, que é também chamado de gás natural (localizado em jazidas de petróleo), gás dos pântanos (pode ser obtido nas regiões pantanosas pela fermentação da celulose), biogás (é usado como combustível) e gasolixo (pode ser obtido também no lixo, pela decomposição anaeróbica do material orgânico).</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/alcanos/pantano.png")} style={[foStyles.img2, { height: 150 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>O metano é considerado o principal alcano e ele pode ser obtido nos pântanos</Text>
            <Text style={foStyles.txtPropriedades}>Além do metano, todos os alcanos são combustíveis, por isso muitos deles são usados em nosso cotidiano. Por exemplo, os derivados de petróleo, como a gasolina e o óleo diesel, contêm uma mistura de alcanos, e o isqueiro possui o butano como gás combustível.</Text>
           
            <Text style={foStyles.subtitulo}>Propriedades físicas</Text>
            <Text style={foStyles.txtPropriedades}>Os alcanos são pouco reativos, ou seja, não reagem com quase nenhuma substância. Por este motivo, são chamados também de parafinas ou parafínicos. Em latin  para affinis significa pouca afinidade.</Text>
            <Text style={foStyles.txtPropriedades}>Não são muito reativos porque as ligações entre C – H e C – C são muito estáveis e difíceis de serem quebradas. São mais utilizados para a queima, por isso são usados como combustíveis, para o fornecimento de energia.</Text>
            <Text style={foStyles.txtPropriedades}>São insolúveis em água e menos densos que a água. Os alcanos de até quatro carbonos são gases à temperatura ambiente (25°C). De cinco a dezessete carbonos são líquidos, e os demais sólidos. </Text>
            
            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura é dada por:</Text>
            <Text style={foStyles.txtNomenclatura}>PREFIXO + AN + O </Text>
            <Text style={foStyles.txtPropriedades}>O prefixo é referente à quantidade de carbonos na cadeia, sendo:</Text>
            <Text style={foStyles.txtPropriedades}>1 C = met                    4C = but                     7 C = hept
                2 C=    et                     5 C = pent                   8C = oct{`\n`}
                3 C = prop                   6 C = hex                     9 C = non</Text>



            <Text style={foStyles.txtPropriedades}>Referências:{`\n`}
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-organica/alcanos.htm');
                }}>https://www.manualdaquimica.com/quimica-organica/alcanos.htm</Text>
            </Text>
            <Text style={foStyles.txtPropriedades}>
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-organica/alcanos.htm');
                }}>https://www.soquimica.com.br/conteudos/em/funcoesorganicas/p1.php</Text>
            </Text>

        </View>
    )

}
export default Alcanos;