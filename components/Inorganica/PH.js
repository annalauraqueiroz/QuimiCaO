import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function PH() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>O pH, ou potencial hidrogeniônico, é uma escala que mede a acidez e a basicidade de uma substância. A acidez de uma solução é medida pela concentração de íons de H+. Quanto maior a quantidade de íons de H+, mais ácida será a solução; ao contrário, quando essa solução tiver uma quantidade maior de íons de OH–, será básica ou alcalina.
                A escala varia de 0 a 14, em que 7 é neutro. Abaixo de 7 e quanto mais próximo de 0, a solução
                vai se tornando mais ácida; acima de 7, a solução vai se tornando cada vez mais alcalina.</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Inorganica/CaraterPH.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Escala para medir o caráter ácido e o alcalino, pH</Text>

            <Text style={foStyles.subtitulo}>A importância do pH para os seres vivos</Text>
            <Text style={foStyles.txtPropriedades}>Tanto no meio terrestre quanto no aquático, para que os seres vivos sobrevivam, é preciso
                manter o valor de pH em seus hábitats. </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Os peixes de água doce sobrevivem em rios e lagos com pH entre 6 e 8; assim, a água do aquário deve permanecer com essa faixa de pH. </Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Quando a água se torna muito ácida ou muito básica, isso provoca a morte dos peixes e de outros seres aquáticos.
                Você já deve ter ouvido falar em chuva ácida, mas o que talvez você não saiba é que a chuva
                é naturalmente ácida. A combinação dos vapores de água com o CO2 presente na atmosfera leva à formação de um ácido fraco, o H2CO3 (ácido carbônico), com pH em torno de 6.  </Text>
            <Text style={foStyles.txtPropriedades}>As indústrias e os veículos de transporte nas grandes cidades lançam, na atmosfera, com a queima de combustíveis como a gasolina o óleo diesel, poluentes como óxidos de enxofre (SO2 e SO3) e óxidos de nitrogênio (N2O, NO e NO2).
            </Text>
            <Text style={foStyles.txtPropriedades}>Esses óxidos reagem com vapores de H2O, formando ácido sulfuroso (H2SO3), ácido sulfúrico (H2SO4), ácido nítrico (HNO3) e ácido nitroso (HNO2).
            </Text>
            <Text style={foStyles.txtPropriedades}> Assim, a chuva que era levemente ácida passa a ser muito ácida, provocando o desequilíbrio do solo e da água dos rios e lagos, prejudicando os seres vivos que dependem desses ambientes, bem como danificando as lavouras, os monumentos, as edificações, enfim, prejudicando a vida humana.
            </Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Você sabia que o pH do solo pode influenciar a coloração das flores das hortênsias? Ao cultivarmos Hydragea macrophylla – uma espécie de hortênsia comum no Rio Grande do Sul, em solo ácido –, suas flores adquirem a coloração azulada; em
                        solos alcalinos, suas flores tornam-se rosadas; e, em solos neutros, podem variar de brancas a levemente esverdeadas. As hortênsias podem ser chamadas de indicadores naturais para verificação da acidez ou da alcalinidade de um solo</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>Referência Bibliográfica</Text>
            <Text style={foStyles.txtPropriedades}>
                Silva, Elaine, L. e Ediana Barp. Química geral e inorgânica:  princípios básicos, estudo da matéria e estequiometria 1ª edição 2014
                . Disponível em: Minha Biblioteca, Editora Saraiva, 2014.
                <Text onPress={() => {
                    Linking.openURL('https://integrada.minhabiblioteca.com.br/reader/books/9788536531175/pageid/66');
                }}> https://integrada.minhabiblioteca.com.br/reader/books/9788536531175/pageid/75. Acesso em: 31 jan. 2023</Text>
            </Text>
        </View>
    );
}
export default PH;