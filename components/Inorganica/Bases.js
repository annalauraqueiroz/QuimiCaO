import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Bases() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>São substâncias ou compostos que, na água, liberam o ânion OH–(hidroxila). Ocorre, agora, dis-Dissociar significa separar. Na dissocia-ção iônica ocorre a separação dos íons existentes uma substância. Ionizar signi-fica formar íons.
                sociação ou separação de íons. Toda base possui o grupo hidroxila em sua estrutura.</Text>

            <Text style={foStyles.subtitulo}>Características das bases</Text>

            <Text style={foStyles.txtPropriedades}> Suas características são:</Text>

            <Text style={foStyles.txtPropriedades}> ● possuem sabor adstringente, pois diminuem a salivação;</Text>
            <Text style={foStyles.txtPropriedades}> ● apresentam um grupo hidroxila OH–ânion; </Text>
            <Text style={foStyles.txtPropriedades}> ● conduzem corrente elétrica em solução aquosa;</Text>
            <Text style={foStyles.txtPropriedades}> ● reagem com os ácidos, formando um sal e água</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Inorganica/eqBase.png")} style={[foStyles.img2, { height: 70 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Hidróxido de sódio, em contato com a água, se dissocia liberando o cátion Na+ e o ânion OH–.</Text>


            <Text style={foStyles.subtitulo}>Classificação das bases</Text>
            <Text style={foStyles.txtPropriedades}>As bases são classificadas de várias maneiras. Por exemplo, de acordo com o número de hidroxilas (OH–):</Text>
            <Text style={foStyles.txtPropriedades}>● Monobase: libera uma hidroxila (exemplo: NaOH).</Text>
            <Text style={foStyles.txtPropriedades}>● Dibase: libera duas hidroxilas (exemplo: FeOH)2. </Text>
            <Text style={foStyles.txtPropriedades}>● Tribase: possui três hidroxilas (exemplo: Al(OH)3.</Text>
            <Text style={foStyles.txtPropriedades}>● Tetrabase: possui quatro hidroxilas (exemplo: Pb(OH)4.)</Text>

            <Text style={foStyles.txtPropriedades}>Outro modo de classificar as bases é por meio do grau de ionização:</Text>
            <Text style={foStyles.txtPropriedades}>● Bases fortes: Possuem grau de ionização maior que 50% (exemplos: NaOH, KOH, Ca(OH)2).
                São bases formadas pelos metais das famílias 1 e 2 ou metais alcalinos e alcalinos terrosos. </Text>
            <Text style={foStyles.txtPropriedades}>● Bases fracas: Possuem grau de ionização igual ou menor a 5% (exemplos: AgOH, CuOH,
                NH4OH). São formadas por todas as demais bases, compostas pelos metais das outras famílias e o NH4.
            </Text>

            <Text style={foStyles.txtPropriedades}>As bases também podem ser classificadas por sua capacidade de se dissolver em água, chamada de Grau de solubilidade. </Text>
            <Text style={foStyles.txtPropriedades}>● Bases solúveis: substância de fácil ionização e alta capacidade de se dissolver em água. São
                bases formadas por metais alcalinos (Família 1) e o hidróxido de amônio (exemplos: LiOH, NaOH NH4OH).  </Text>
            <Text style={foStyles.txtPropriedades}>● Bases parcialmente solúveis: são as bases formadas por metais alcalinos terrosos (Família 2).
                Por exemplo: Ca (OH)2 – hidróxido de cálcio; Mg (OH)2 – hidróxido de magnésio. </Text>
            <Text style={foStyles.txtPropriedades}>● Bases insolúveis: substâncias que não se dissolvem em água. São bases formadas pelos demais
                metais de famílias não mencionadas nos demais tipos. Por exemplo: Fe(OH)2 – hidróxido de ferro II; Al(OH)3 – hidróxido de alumínio </Text>


            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>Para nomear as bases, utilizamos a palavra hidróxido seguida do nome do cátion, de acordo com a tabela abaixo</Text>

            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Inorganica/monovalente.png")} style={[foStyles.img2, { height: 300 }]} loading="lazy" />
                </View>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Inorganica/bivalente.png")} style={[foStyles.img2, { height: 300 }]} loading="lazy" />
                </View>
            </View>

            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Inorganica/trivalente.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
                </View>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Inorganica/tetravalente.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Alguns exemplos:</Text>
            <Text style={foStyles.txtPropriedades}>● NaOH = hidróxido de sódio</Text>
            <Text style={foStyles.txtPropriedades}>● Mg(OH)2 = hidróxido de magnésio.</Text>
            <Text style={foStyles.txtPropriedades}>● NH4OH = hidróxido de amônio</Text>
            <Text style={foStyles.txtPropriedades}>● Al(OH)3 = hidróxido de alumínio (amoníaco).</Text>

            <Text style={foStyles.txtPropriedades}>Referência Bibliográfica</Text>
            <Text style={foStyles.txtPropriedades}>
                SILVA, Elaine L.; BARP, Ediana. Química geral e inorgânica:  princípios básicos, estudo da matéria e estequiometria 1ª edição 2014
                . Editora Saraiva, 2014. E-book.
                ISBN 9788536531175. Disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://integrada.minhabiblioteca.com.br/reader/books/9788536531175/pageid/66');
                }}> https://integrada.minhabiblioteca.com.br/#/books/9788536531175/. Acesso em: 31 jan. 2023</Text>
            </Text>
        </View>
    );
}
export default Bases;