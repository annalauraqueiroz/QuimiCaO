import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function EPIS() {
    return (
        <View style={foStyles.principal}>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Compre EPIs de qualidade, pois você usará em todos os laboratório de química.
                    </Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Em um laboratório químico é necessário que se adotem algumas medidas de precauções para
                as operações a serem realizadas. Atividades práticas realizadas em laboratórios apresentam
                riscos e estão sujeitas a acidentes, porém muitos acidentes podem ser evitados se o
                profissional que exerce suas funções neste local, tiver conhecimento sobre as normas de segurança e colocá-las em prática. </Text>

            <Text style={foStyles.txtPropriedades}>Portanto, Com o intuito de conscientizar os estudantes sobre a importância do uso das normas de segurança no laboratório químico trazemos os principais EPIs (Equipamento de Proteção Individual):</Text>
            <Text style={foStyles.subtitulo}>Jaleco</Text>
            <Text style={foStyles.txtPropriedades}>Protege a parte superior e inferior do corpo, como os braços, tronco, abdômen e parte
                superior das pernas. Devem ser de mangas longas, usados sempre fechados sobre as
                vestimentas pessoais (não usá-lo diretamente sobre o corpo), confeccionados em tecido de
                algodão, impermeabilizados ou não. </Text>
            <Text style={foStyles.txtPropriedades}>Os jalecos descartáveis devem ser resistentes e
                impermeáveis. Auxiliam na prevenção da contaminação de origem biológica, química e radioativa, além da exposição direta a sangue, fluídos corpóreos, borrifos, salpicos e
                derramamentos de origens diversas</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/jaleco.png")} style={[foStyles.img2, { height: 90 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Jaleco</Text>

            <Text style={foStyles.subtitulo}>Óculos de proteção</Text>
            <Text style={foStyles.txtPropriedades}>Protegem os olhos de borrifos, salpicos, gotas e impactos decorrentes da manipulação de substâncias que causam risco químico (irritantes, corrosivas etc.), risco biológico (sangue, material infectante etc.) e, risco físico (radiações UV e infravermelho etc.). </Text>
            <Text style={foStyles.txtPropriedades}>Pode ter vedação lateral, hastes ajustáveis, cinta de fixação. As lentes devem ser confeccionadas em material transparente, resistente e que não provoque distorção, podem ser de policarbonato, resina orgânica, cristal de vidro, além de receber tratamento com substâncias antiembaçantes, anti-risco e, resistentes aos produtos químicos</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/oculos.png")} style={[foStyles.img2, { height: 90 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Óculos de proteção</Text>


            <Text style={foStyles.subtitulo}>Vestimenta</Text>
            <Text style={foStyles.txtPropriedades}>Para garantir maior segurança, todos devem utilizar somente sapatos fechados, calças compridas, além de permanecerem com o cabelo preso no caso daqueles que possuem cabelo longo.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/vestimenta.png")} style={[foStyles.img2, { height: 90 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Vestimenta adequada</Text>

            <Text style={foStyles.subtitulo}>Luvas</Text>
            <Text style={foStyles.txtPropriedades}>Dificilmente será solicitado o uso de luvas nos laboratório das disciplinas da UNIFAL-Poços de Caldas, mas caso seja necessário as luvas são utilizadas como barreira de proteção, prevenindo a contaminação das mãos, protegendo dos riscos biológicos, químicos e físicos como, por exemplo, queimaduras químicas por substâncias corrosivas, inflamáveis, irritantes; calor (fornos e muflas) ou frio (materiais congelados e em Nitrogênio líquido) extremos; choques elétricos; manuseio de culturas microbiológicas, materiais biológicos (sangue, tecidos infectados etc); material radioativo.</Text>
            <Text style={foStyles.txtPropriedades}>As luvas devem ser confeccionadas com material resistente e maleável, anatômicas,
                devem ter baixa permeabilidade e compatibilizadas com as substâncias manipuladas. F</Text>
                <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/luvas.png")} style={[foStyles.img2, { height: 90 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Luvas de laboratório</Text>

        </View>
    );
}
export default EPIS;