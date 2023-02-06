import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Acidos() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>São compostos covalentes que compartilham elétrons. Em meio aquoso, esse composto se
                ioniza, ou seja, forma íons (cátions e ânions). As substâncias denominadas ácidas sempre liberam íons de hidrogênio, segundo a teoria ácido-base de Arrhenius. Todo ácido tem, no início de sua molécula, o átomo de hidrogênio.</Text>

            <Text style={foStyles.subtitulo}>Características dos ácidos</Text>

            <Text style={foStyles.txtPropriedades}> Suas características são:</Text>

            <Text style={foStyles.txtPropriedades}> ● possuem sabor azedo ou ácido (por exemplo, o limão);</Text>
            <Text style={foStyles.txtPropriedades}> ● conduzem corrente elétrica em solução aquosa;</Text>
            <Text style={foStyles.txtPropriedades}> ● apresentam, em sua fórmula, um ou mais átomos de hidrogênio; </Text>
            <Text style={foStyles.txtPropriedades}> ● reagem com as bases, formando sais e água; </Text>
            <Text style={foStyles.txtPropriedades}> ● são voláteis, em sua maioria</Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Um exemplo de ácido é o HCl, que em contato com a água, libera H+ (cátion) e Cl- (ânion), ou seja, sofre ionização.</Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Classificação dos ácidos</Text>
            <Text style={foStyles.txtPropriedades}>Os ácidos são classificados de várias maneiras. Podem ser classificados de acordo com o
                número de elementos químicos. Assim, os ácidos são:</Text>
            <Text style={foStyles.txtPropriedades}>● Binários: possuem 2 elementos químicos em sua molécula (exemplo: HCl – ácido clorí-drico).</Text>
            <Text style={foStyles.txtPropriedades}>● Ternários: possuem 3 elementos químicos em sua molécula (exemplo: H2SO4 – ácido nitroso).</Text>
            <Text style={foStyles.txtPropriedades}>● Quaternários: possuem 4 elementos químicos em sua molécula (exemplo: HCNO – ácido ciânico)</Text>

            <Text style={foStyles.txtPropriedades}>Outra maneira de classificação é pela presença ou ausência de oxigênio em sua molécula:</Text>
            <Text style={foStyles.txtPropriedades}>● Hidrácidos: quando não apresentam oxigênio em sua molécula (exemplo: HCl, HBr). </Text>
            <Text style={foStyles.txtPropriedades}>● Oxiácidos: quando apresentam oxigênio em sua molécula (exemplo: H2SO4). </Text>

            <Text style={foStyles.txtPropriedades}>Também é possível separá-los pelo número de hidrogênios ionizáveis: </Text>
            <Text style={foStyles.txtPropriedades}>● Monoácidos: libera um hidrogênio ionizável (exemplo: HCl).  </Text>
            <Text style={foStyles.txtPropriedades}>● Diácidos: libera dois hidrogênios ionizáveis (exemplo: H2SO4). </Text>
            <Text style={foStyles.txtPropriedades}>● Triácido: libera três oxigênios ionizáveis (exemplo: H3SO4).  </Text>
            <Text style={foStyles.txtPropriedades}>● Tetrácido: libera quatro hidrogênios ionizáveis (exemplo: H4P2O7). </Text>

            <Text style={foStyles.subtitulo}>Grau de ionização ou força de um ácido</Text>
            <Text style={foStyles.txtPropriedades}>A ionização determina a força de uma substância: quanto mais íons formados, mais forte será
                essa substância. Em solução aquosa, os ácidos que liberam grandes quantidades de H+ são denominados fortes e os que liberam uma quantidade reduzida são chamados de ácidos fracos.</Text>
            <Text style={foStyles.txtPropriedades}>A força de um ácido está relacionada a sua ionização:</Text>
            <Text style={foStyles.txtPropriedades}>● Ácidos fortes: possuem grau de ionização maior que 50%. </Text>
            <Text style={foStyles.txtPropriedades}>● Ácidos moderados: possuem grau de ionização entre 5% e 50%.  </Text>
            <Text style={foStyles.txtPropriedades}>● Ácidos fracos: possuem grau de ionização igual ou menor que 5%  </Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>São considerados fortes os hidrácidos: HCl, HBr E HI; moderados o hidrácido HF e fracos
                        todos os demais hidrácidos.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Para os oxiácidos, podemos calcular a diferença entre os átomos de oxigênio e de hidrogênio
                ionizáveis presentes na molécula. Para os seguintes resultados: </Text>
            <Text style={foStyles.txtPropriedades}>0 = Ácido fraco. </Text>
            <Text style={foStyles.txtPropriedades}>1 = Ácido moderado.  </Text>
            <Text style={foStyles.txtPropriedades}>2 = Ácido forte  </Text>
            <Text style={foStyles.txtPropriedades}>3 = Ácido muito forte.  </Text>
            <Text style={foStyles.txtPropriedades}>Exemplo: Para o HClO4 temos 1 hidrogênio e 4 oxigênios. 4 – 1 = 3 Então, o HClO4 é um ácido muito forte.  </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Exceções: H3PO4 é um ácido moderado</Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>Para nomear os ácidos, é preciso ter em mãos a tabela de ânions, apresentada abaixo:</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Inorganica/TabelaAnions.png")} style={[foStyles.img2, { height: 450 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Tabela de ânions</Text>
            <Text style={foStyles.txtPropriedades}>Iniciamos o nome utilizando a palavra “ácido” e em seguida, o nome do ânion, trocando a terminação conforme a tabela abaixo:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Inorganica/TabelaAnions2.png")} style={[foStyles.img2, { height: 110 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Nomenclatura das terminações</Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Não esqueça: Dissociar significa separar. Na dissociação iônica ocorre a separação dos íons existentes uma substância. Ionizar significa formar íons.</Text>
                </View>
            </View>
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
export default Acidos;