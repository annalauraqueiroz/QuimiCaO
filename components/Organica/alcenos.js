import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Alcenos() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                Os alcenos são hidrocarbonetos acíclicos e insaturados, ou seja, são compostos orgânicos cujas moléculas são formadas apenas por átomos de hidrogênio e carbono, de cadeia aberta e que possuem uma dupla ligação entre dois de seus carbonos.</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Esses compostos são mais reativos que os alcanos, pois a ligação pi (da dupla ligação) é mais fácil de ser rompida, realizando principalmente reações de adição.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Uma dessas reações é a hidratação do eteno, que produz o etanol, sendo muito usada em países em que o cultivo da cana-de-açúcar ou do milho não é economicamente viável:
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/alcenos/hidratacaoeteno.png")} style={[foStyles.img2, { height: 80 }]} loading="lazy" />
            </View>

           <Text style={foStyles.txtPropriedades}>Os alcenos são também chamados de alquenos, hidrocarbonetos etilênicos (porque o menor alceno é o eteno, ou etileno, e todos os outros derivam dele) e de olefinas (porque todos os alcenos de cinco carbonos ou mais são substâncias oleosas).</Text>
           <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Os alcenos raramente ocorrem na natureza, sendo geralmente obtidos pelo craqueamento de alcanos de cadeia longa provenientes do refino do petróleo.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Na natureza, ele é produzido por diversas frutas, sendo o responsável por seu amadurecimento. É por isso que se pegarmos um cacho de bananas verdes e colocarmos em um recipiente fechado ou cobri-lo com um jornal, como se “aprisionássemos” o gás eteno, as bananas amadurecerão mais rápido.</Text>
           
            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura desses compostos segue a mesma regra estabelecida para os alcanos, com a única diferença de que, visto que possui uma ligação dupla, ela deve ser indicada pelo infixo “en", no lugar do “an" usado nos alcanos.</Text>
            <Text style={foStyles.txtNomenclatura}>PREFIXO + EN + O </Text>
            <Text style={foStyles.txtPropriedades}>O prefixo é referente à quantidade de carbonos na cadeia, sendo:</Text>
            <Text style={foStyles.txtPropriedades}>1 C = met                    4C = but                     7 C = hept
                2 C=    et                     5 C = pent                   8C = oct{`\n`}
                3 C = prop                   6 C = hex                     9 C = non</Text>



            <Text style={foStyles.txtPropriedades}>Referências:{`\n`}
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-organica/alcenos.htm');
                }}>https://www.manualdaquimica.com/quimica-organica/alcenos.htm</Text>
            </Text>

        </View>
    )

}
export default Alcenos;