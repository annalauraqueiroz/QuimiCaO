import React from 'react'
import { Text, Image, View, Linking} from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Aldeido() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
            Aldeídos são uma função orgânica caracterizada pela presença de grupo carbonila (C=O) na extremidade de uma cadeia carbônica. O carbono da carbonila deve possuir um ligante hidrogênio, formando o grupamento aldoxila (-CHO), típico de aldeídos.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/aldeido/aldeido.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>
            Os aldeídos são espécies reativas, polares e inflamáveis. Uma das suas principais características são seus aromas, que variam em função do tamanho da cadeia carbônica. Aldeídos de cadeia curta possuem cheiro irritante. Conforme aumenta-se o número de carbonos na cadeia, os aromas se tornam mais adocicados e agradáveis.</Text>
            
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Em razão dessa característica, aldeídos são utilizados no desenvolvimento de perfumes e produtos aromáticos. Também são utilizados na síntese de polímeros bem como na fabricação de produtos químicos, fármacos, fungicidas e agentes de conservação.</Text>
                </View>
            </View>
            
            
            <Text style={foStyles.subtitulo}>Propriedades físicas</Text>
            <Text style={foStyles.txtPropriedades}>Aldeídos queimam com facilidade e têm caráter polar. Suas propriedades se alteram levemente com o aumento da cadeia carbônica, como o odor e o estado físico. Aldeídos de cadeia curta costumam apresentar odor irritante, que se torna mais agradável com o aumento de átomos da cadeia. Aldeídos podem ser sólidos, líquidos ou gasosos, a depender do número de carbonos.</Text>
            <Text style={foStyles.txtPropriedades}>Aldeídos são muito reativos, sofrendo diversos tipos de reações químicas, inclusive reações de polimerização, originado polímeros de condensação.</Text>
           
            <Text style={foStyles.subtitulo}>Aplicação dos aldeídos</Text>
            <Text style={foStyles.txtPropriedades}>Os aldeídos têm inúmeras aplicações industriais. Alguns deles são usados como agentes de preservação e conservação, por isso são empregados em processos de curtimento e embalsamento. Também participam da composição de fungicidas e inseticidas para plantas.</Text>
            <Text style={foStyles.txtPropriedades}>Aldeídos estão envolvidos na produção de alguns polímeros, como a baquelite (material rígido que compõe o cabo de panelas e frigideiras), formada pela reação química entre o formaldeído (aldeído) e um fenol, dando origem a uma estrutura polimérica tridimensional. A fórmica é um material laminado usado para revestimentos de móveis e que deriva da reação de aldeídos.</Text>
            <Text style={foStyles.txtPropriedades}>Alguns tipos de aldeído são utilizados na fabricação de revestimentos, adesivos, solventes, perfumes e agentes flavorizantes. Aldeídos também participam de diversos processos industriais, podendo atuar como intermediários da síntese de fármacos.</Text>
            <Text style={foStyles.txtPropriedades}>Alguns aldeídos podem ocorrer de forma espontânea na natureza e se manifestam no sabor e odor de amêndoas, no óleo de amêndoas, no óleo de canela (cinamaldeído) etc. Aldeídos também estão presentes nos organismos animais, na forma de vitaminas, hormônios e carboidratos.</Text>
            
            <Text style={foStyles.subtitulo}>Quais são os principais aldeídos?</Text>
            <Text style={foStyles.txtPropriedades}>Metanal (HCHO): é um dos aldeídos mais comuns, também é conhecido como formaldeído ou, mais popularmente, como formol. Essa substância é empregada como monômero em síntese de polímeros, agente desinfetante, germicida, fungicida e em processos industriais e farmacêuticos.</Text>
            <Text style={foStyles.txtPropriedades}>Etanal (CH3CHO) ou acetaldeído (nome comum): é um aldeído de cadeia curta usado na síntese de solventes químicos, perfumes, flavorizantes e corantes.</Text>
            <Text style={foStyles.txtPropriedades}>Benzaldeído (C6H5CHO): é um aldeído aromático utilizado na indústria de alimentos e bebidas como agente flavorizante e na síntese de corantes e perfumes. Essa substância está presente nas amêndoas.</Text>
            <Text style={foStyles.txtPropriedades}>Vanilina (C8H8O3): é aldeído aromático extraído da semente da baunilha e é um aldeído extensamente empregado como agente aromatizante em alimentos, bebidas, cosméticos e produtos farmacêuticos.</Text>
            <Text style={foStyles.txtPropriedades}>Retinal: é uma das formas de apresentação da vitamina A e está envolvido nos processos químicos relacionados à visão.</Text>
           
            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura para os aldeídos segue as regras da Iupac (International Union of Pure and Applied Chemistry)</Text>
            <Text style={foStyles.txtNomenclatura}>PREFIXO + INFIXO + AL</Text>
            <Text style={foStyles.txtPropriedades}>O prefixo é o que indica a quantidade de carbonos na cadeia principal.
                Caso tenha mais de um grupo carboxila na cadeia, isso pode ser indicado pelos sufixos di, tri, tetra, etc. 
            </Text>
            <Text style={foStyles.txtPropriedades}>O infixo é de acordo com o tipo de ligação, sendo "an" para Alcanos, "en" para alcenos, "in" para alcinos.
            </Text>
            
            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-organica/aldeidos.htm');
                }}> https://www.manualdaquimica.com/quimica-organica/aldeidos.htm</Text>
            </Text>

        </View>
    )

}
export default Aldeido;