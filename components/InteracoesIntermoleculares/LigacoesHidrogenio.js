import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function LigacoesHidrogenio() {
    return (
        <View style={foStyles.principal}>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Responsável por fazer icebergs flutuarem.
                    </Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>Uma ligação de hidrogênio é a atração entre um átomo de hidrogênio ligado a um átomo altamente eletronegativo (ge- ralmente F, O ou N) e um átomo pequeno eletronegativo em outra molécula ou grupo químico próximo. Assim, ligações H-F, H-O ou H-N em uma molécula podem formar ligações de hidrogênio com um átomo de F, O ou N em outra molécula. </Text>
            <Text style={foStyles.txtPropriedades}>As ligações de hidrogênio podem ser consideradas um tipo especial de atração dipolo-dipolo. Como o N, Oe F são muito eletronegativos, uma ligação entre o hidrogê- nio e qualquer um desses elementos é bastante polar, com o hidrogênio na extremidade positiva (lembre-se de que o +à direita do símbolo de dipolo representa a extremidade positiva do dipolo):</Text>
            <Text style={foStyles.txtPropriedades}>Alguns exemplos de moléculas que interagem por ligações de hidrogênio são: ácido fluorídrico (HF), amônia (NH3) e água (H2O).</Text>
           
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/InteracoesIntermoleculares/exemplolighidrogenio.png")} style={[foStyles.img2, { height: 75 }]} loading="lazy" />
            </View>
           
            <Text style={foStyles.txtPropriedades}>Como a ligação de hidrogênio ocorre em moléculas cuja diferença de eletronegatividade entre os átomos é muito grande, trata-se de uma força intermolecular de alta intensidade (maior que a dipolo-dipolo e a dipolo induzido).</Text>
            <Text style={foStyles.txtPropriedades}>Uma consequência notável das ligações de hidrogênio é vista na densidade da água em estado sólido (gelo) e líquido. Na maior parte das substâncias, as moléculas dos sólidos estão mais densamente compactadas do que as moléculas dos líquidos, fazendo com que a fase sólida seja mais densa que a fase líquida. Por outro lado, a densidade do gelo a 0 °C (0,917 g/mL) é menor do que a da água em estado líquido a 0 °C (1,00 g/mL), de modo que o gelo flutua na água em estado líquido.</Text>

            <Text style={foStyles.txtPropriedades}>Referências bibliográficas:{`\n`}
                BROWN, Theodore L.; LEMAY, H. Eugene; BURSTEN, B. E.; MURPHY, C. J.; WOODWARD, P. M.; STOLTZFUS, M. W. Química: A Ciência Central. 13. ed. rev. São Paulo: Pearson Education do Brasil, 2016. 1216 p. v. 1. ISBN 9788543005652.
                <Text onPress={() => {
                    Linking.openURL('https://integrada.minhabiblioteca.com.br/reader/books/9788522122745/pageid/300');
                }}> https://integrada.minhabiblioteca.com.br/reader/books/9788522122745/pageid/300</Text>
             <Text onPress={() => {
                    Linking.openURL('https://brasilescola.uol.com.br/o-que-e/quimica/o-que-sao-forcas-intermoleculares.htm#');
                }}> https://brasilescola.uol.com.br/o-que-e/quimica/o-que-sao-forcas-intermoleculares.htm#</Text>
            </Text>
        </View>
    );
}
export default LigacoesHidrogenio;