import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Fenol() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                Há mais de 150 anos, os químicos orgânicos perceberam que existia outra classe de hidrocarbonetos com propriedades bem diferentes. Pelo fato de alguns desses novos hidrocarbonetos apresentarem um odor agradável, foram denominados compostos aromáticos. Hoje sabemos que nem todos os compostos aromáticos têm essa característica. Alguns, sim, apresentam um odor agradável, alguns são inodoros, e outros têm odores bem desagradáveis.
                {`\n`}  Uma definição mais apropriada é que composto aromático é todo aquele que apresenta um ou mais anéis benzênicos. Usamos o termo areno para descrever hidrocarbonetos aromáticos. Um grupo derivado pela remoção de um H do areno é chamado grupo arila, e seu símbolo é Ar-.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>O benzeno, o hidrocarboneto aromático mais simples, foi descoberto em 1825 por Michael Faraday (1791-1867). Sua estrutura apresentava um problema imediato aos químicos da época pois possuia poucos hidrogênios em sua cadeia, quando comparado com o hexano e cicloexano. </Text>
                </View>

            </View>
            <Text style={foStyles.subtitulo}>O que são fenóis?</Text>
            <Text style={foStyles.txtPropriedades}>
                O grupo funcional fenol é um grupo hidroxila ligado a um anel benzênico.
                Os fenóis são muito comuns na natureza. O fenol e os cresóis isoméricos (o-, m-ep-cre sol) são encontrados no alcatrão de hulha. O timol e a vanilina são importantes constituintes das vagens de tomilho e baunilha, respectivamente. O uruxiol é o principal constituinte do óleo irritante da hera venenosa e pode causar uma grave dermatite de contato em indivíduos sensíveis.
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Organica/FuncoesOrganicas/fenol/baunilha.png")} style={[foStyles.img2]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>A verdadeira baunilha é uma especiaria caríssima, feita das vagens da planta Vanilla planifolia</Text>
                </View>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Organica/FuncoesOrganicas/fenol/estruturabaunilha.png")} style={[foStyles.img2]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Estrutura orgânica da Vanilla</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>{`\n`}O hidroxibenzeno é o fenol mais importante por ser o que mais possui aplicações. Em solução, ele foi o primeiro composto comercializado como antisséptico, principalmente de hospitais e de instrumentos cirúrgicos. Mas foi substituído por ser corrosivo e tóxico.
                O fenol comum é matéria-prima para a produção de outros fenóis usados como antissépticos, fungicidas e desinfetantes, como os cresóis mostrados abaixo:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/fenol/cresois.png")} style={[foStyles.img2]} loading="lazy" />
                <Text style={foStyles.txtLegenda}>Fórmulas estruturais dos cresóis</Text>
            </View>
            <Text style={foStyles.subtitulo}>Acidez dos fenóis</Text>
            <Text style={foStyles.txtPropriedades}>Os fenóis são ácidos fracos, com valores de pK em torno de 10. A maioria dos fenóis é insolúvel em água, mas reage com bases fortes, tais como NaOH e KOH, formando sais solúveis em água.</Text>
            <Text style={foStyles.txtPropriedades}> A maior parte dos fenóis é de ácidos tão fracos que não reagem com bases fracas como bicarbonato de sódio, isto é, não se dissolvem em bicarbonato de sódio aquoso. Uma importante reação para sistemas vivos, alimentos e outros materiais que contêm ligações duplas carbono-carbono é a auto-oxidação - isto é, a oxidação que requer oxigênio e nenhum outro reagente. Se você abrir uma garrafa de óleo de cozinha que ficou armazenada por muito tempo, poderá ouvir o som sibilante do ar entrando na garrafa. Isso ocorre porque o consumo de oxigênio por auto-oxidação do óleo gera uma pressão negativa no interior da garrafa.</Text>
            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura dos fenois geralmente segue a seguinte regra:</Text>
            <Text style={foStyles.txtNomenclatura}>localização do grupo OH + hidróxi + nome do aromático</Text>
            <Text style={foStyles.txtPropriedades}>Exemplos:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/fenol/nomenclaturafenol.webp")} style={[foStyles.img2, { height: 650 }]} loading="lazy" />
                <Text style={foStyles.txtLegenda}>Fórmulas estruturais dos cresóis</Text>
            </View>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-organica/fenois.htm');
                }}> https://www.manualdaquimica.com/quimica-organica/fenois.htm</Text>
            </Text>
        </View>
    );
}
export default Fenol;