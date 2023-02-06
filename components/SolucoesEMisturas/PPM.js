import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function PPM() {
    return (
        <View style={foStyles.principal}>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>A concentração em ppm é muito usada para medir gases poluentes no ar e metais pesados na água.</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}> Quando a concentração de uma solução (principalmente líquidas e gasosas) é dada em valores extremamente pequenos, costuma-se utilizar a unidade parte por milhão (ppm).</Text>
            <Text style={foStyles.txtPropriedades}> A concentração de soluções químicas refere-se à quantidade de soluto que existe em uma quantidade padrão de solução ou em uma quantidade padrão de solvente. Assim, a concentração em partes por milhão pode ser definida da seguinte maneira:</Text>
            <Text style={foStyles.txtPropriedades}> ● Partes por milhão (ppm): Indica quantas partes de soluto (em massa ou em volume) existem em um milhão (1 000 000 ou 10) de partes da solução (também em massa ou em volume).</Text>

            <Text style={foStyles.txtPropriedades}> Visto que a quantidade de soluto é extremamente pequena, nos cálculos que utilizam a fórmula acima, o volume ou a massa da solução serão considerados exatamente os mesmos do solvente, ou seja, se soubermos que uma solução aquosa de permanganato de potássio (KmnO4(aq)) tem concentração de 70 ppm, isso significa que existem 70 g de permanganato em 1 milhão de gramas da solução ou de água, conforme mostra a fórmula:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/ppm1.png")} style={[foStyles.img2, { height: 70 }]} loading="lazy" />
            </View>

            <Text style={foStyles.txtPropriedades}> Podemos fazer o cálculo usando as seguintes relações:</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 g do soluto__ 1 t de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 mg do soluto__ 1 kg de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 μg do soluto__ 1 g de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> Relações similares podem ser feitas com as unidades de volume:</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 L do soluto__ 1000 m3 de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 mL do soluto__ 1 m3 de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 μL do soluto__ 1 L de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 mL do soluto__ 1000 L de solvente (solução)</Text>

            <Text style={foStyles.txtPropriedades}> Também podemos relacionar massa e volume em soluções, por exemplo, que são formadas por um soluto sólido dissolvido em um solvente líquido:</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 g do soluto__ 1000 L de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 mg do soluto__ 1 L de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> ● 1 ppm = 1 μL do soluto__ 1 mL de solvente (solução)</Text>
            <Text style={foStyles.txtPropriedades}> Assim como ppm significa “partes por milhão”, ppb significa “partes por bilhão”, e ppt é “partes por trilhão”:</Text>
            <Text style={foStyles.txtPropriedades}>Essas concentrações tão pequenas são aplicadas principalmente quando se trabalha com dados referentes à poluição do ar e da água. Veja abaixo uma tabela que mostra os principais gases-estufa presentes na atmosfera terrestre e a sua abundância (dados de 1998):</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/gases.png")} style={[foStyles.img2, { height: 220 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Tabela com abundância de gases-estufa na atmosfera</Text>
                <Text style={foStyles.txtPropriedades}>Esse é um exemplo que mostra que o uso desse tipo de concentração é importante tanto para estabelecer um limite máximo para esse e outros poluentes quanto para monitorá-los. Também pode ser usado em cosméticos e produtos de limpeza e higiene pessoal para mostrar a quantidade de seus constituintes.</Text>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/fisico-quimica/partes-por-milhao-ppm.htm');
                }}> https://www.manualdaquimica.com/fisico-quimica/partes-por-milhao-ppm.htm</Text>
            </Text>
        </View>
    );
}
export default PPM;