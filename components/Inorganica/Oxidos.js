import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Oxidos() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>São compostos binários com dois elementos, em que um deles é o oxigênio, elemento mais ele-tronegativo (exemplos: CaO, Fe2O3, H2O, CO2, CO). O composto OF2 não é considerado óxido, pois o flúor é mais eletronegativo que o oxigênio.</Text>

            <Text style={[foStyles.subtitulo, { fontSize: 30 }]}>Tipos de óxidos</Text>
            <Text style={[foStyles.subtitulo]}>Óxidos iônicos</Text>

            <Text style={foStyles.txtPropriedades}> O oxigênio possui seis elétrons na camada de valência. Por isso, ao reagir com um metal, este tende
                a doar seus elétrons para o oxigênio, originando um composto iônico (formado por ligação iônica)</Text>

            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}> Metal + oxigênio</Text>
            <Text style={foStyles.txtPropriedades}>Exemplos: Li2O, Al2O3, BaO</Text>

            <Text style={[foStyles.subtitulo]}>Óxidos moleculares</Text>

            <Text style={foStyles.txtPropriedades}> O oxigênio, ao reagir com não metais, tende a compartilhar elétrons.</Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}> Não metal + Oxigênio</Text>
            <Text style={foStyles.txtPropriedades}>Exemplos: Cl2O, CO2, N2O</Text>

            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>Para nomear os óxidos utilizamos a palavra </Text>
            <Text style={foStyles.txtNomenclatura}>óxido + de + nome do elemento químico</Text>
            <Text style={foStyles.txtPropriedades}>Exemplos:</Text>
            <Text style={foStyles.txtPropriedades}>● Na2O = óxido sódio</Text>
            <Text style={foStyles.txtPropriedades}>● CaO = óxido de cálcio</Text>
            <Text style={foStyles.txtPropriedades}>● Li2O = óxido de lítio</Text>

            <Text style={foStyles.txtPropriedades}>Usamos os prefixos di, para dois oxigênios no composto, tri para três, e assim sucessivamente. </Text>
            <Text style={foStyles.txtPropriedades}>● CO2 = dióxido de carbono </Text>
            <Text style={foStyles.txtPropriedades}>● SO3 = trióxido de enxofre. </Text>
            <Text style={foStyles.txtPropriedades}>● N2O4 = tetróxido de nitrogênio ou tetróxido de dinitrogênio </Text>
            <Text style={foStyles.txtPropriedades}>● P2O5 = pentóxido de fósforo ou pentóxido de difósforo </Text>

            <Text style={foStyles.txtPropriedades}>Os metais que apresentam número de oxidação variável podem ser escritos da
                seguinte forma: </Text>
            <Text style={foStyles.txtPropriedades}>● FeO = óxido ferroso ou óxido de ferro II </Text>
            <Text style={foStyles.txtPropriedades}>● Fe2O3 = óxido férrico ou óxido de ferro III  </Text>
            <Text style={foStyles.txtPropriedades}>Nesses casos, o nome do elemento químico apresenta a terminação:</Text>
            <Text style={foStyles.txtPropriedades}>● oso: se for um cátion de carga menor </Text>
            <Text style={foStyles.txtPropriedades}>● ico: se for um cátion de carga maior. </Text>

            <Text style={[foStyles.subtitulo, { fontSize: 30 }]}>Classificação dos óxidos</Text>
            <Text style={[foStyles.subtitulo]}>Óxidos básicos</Text>
            <Text style={foStyles.txtPropriedades}>São óxidos que, ao reagirem com a água, formam uma base.</Text>
            <Text style={foStyles.txtPropriedades}>Esses óxidos neutralizam os ácidos: ao reagirem com compostos ácidos, produzem sal e água.</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Inorganica/oxidoBasico.png")} style={[foStyles.img2, { height: 70 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Os óxidos básicos são formados por metais com nox +1, +2 e +3. São óxidos iônicos, sólidos.
                São solúveis em água quando formados pelos metais das Famílias 1 (metais alcalinos) e 2 (metais alcalinos terrosos) e pouco solúveis quando formados pelos outros metais.</Text>

            <Text style={[foStyles.subtitulo]}>Óxidos ácidos</Text>
            <Text style={foStyles.txtPropriedades}>São óxidos que ao reagirem com a água formam um ácido. Por sua vez, ao reagirem com uma
                base, produzem sal e água, neutralizando o composto.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Inorganica/oxidoacido.png")} style={[foStyles.img2, { height: 70 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Os óxidos ácidos são formados por não metais ou metais com nox elevado, são óxidos molecu-lares e não são solúveis em água</Text>

            <Text style={[foStyles.subtitulo]}>Óxidos neutros</Text>
            <Text style={foStyles.txtPropriedades}>Esses óxidos não reagem com as bases, com os ácidos ou com a água. São todos compostos covalentes. São eles: </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}>CO – monóxido de carbono </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}>NO – monóxido de nitrogênio ou óxido nítrico </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}>N2O – monóxido de nitrogênio ou óxido nitroso </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}>H2O – óxido de hidrogênio ou simplesmente água</Text>
            
            <Text style={[foStyles.subtitulo]}>Óxidos anfóteros</Text>
            <Text style={foStyles.txtPropriedades}>São óxidos com caráter ácido e básico ao mesmo tempo. Na presença de um ácido, se compor-tam como uma base; na presença de uma base, se comportam como um ácido, neutralizando o meio. </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}> Óxido anfótero + ácido → sal + água </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}>Óxido anfótero + base →  sal + água</Text>
            <Text style={foStyles.txtPropriedades}>Esses óxidos são sólidos, insolúveis em água e formados por ligações moleculares. </Text>
           
            <Text style={[foStyles.subtitulo]}>Óxidos mistos</Text>
            <Text style={foStyles.txtPropriedades}>São formados por dois óxidos de um mesmo elemento</Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}> Pb3O4 → 2 PbO + PbO2 </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}>Fe3O4 → FeO + Fe2O3</Text>
            
            <Text style={[foStyles.subtitulo]}>Peróxidos</Text>
            <Text style={foStyles.txtPropriedades}>Nos peróxidos o oxigênio está ligado a metais das Famílias 1 ou 2 e por outro oxigênio. Esses
óxidos ao reagirem com água produzem peróxido de oxigênio. </Text>
            <Text style={[foStyles.txtPropriedades, {alignSelf:'center'}]}> Na2O2 + 2 H2O → 2 NaOH + H2O2 </Text>
            <Text style={foStyles.txtPropriedades}>Para nomeá-los, utilizamos a palavra peróxido seguida do nome do elemento químico, conforme alguns exemplos abaixo:
            </Text>
            <Text style={foStyles.txtPropriedades}>H2O2 – peróxido de hidrogênio
            </Text>
            <Text style={foStyles.txtPropriedades}>Na2O2 – peróxido de sódio 
            </Text>
            <Text style={foStyles.txtPropriedades}>CaO2 – peróxido de cálcio 
            </Text>

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
export default Oxidos;