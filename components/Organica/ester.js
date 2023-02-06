import React from 'react'
import { Text, Image, View } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Ester() {
        return (
                <View style={foStyles.principal}>
                        <Text style={foStyles.txtPropriedades}>
                                Éster é uma função orgânica que pode ser identificada pela presença de um grupo R–COO-R’, sendo R o radical orgânico.
                        </Text>
                        <View style={foStyles.curiosidade}>
                                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                                <View style={foStyles.viewtxtCuriosidade}>
                                        <Text style={foStyles.txtCuriosidade}>Os ésteres possuem diversas aplicações, entre elas podemos citar:{`\n`}
                                                - Aromatizantes e essências artificiais usados em balas, bolachas e outros alimentos industrializados e também no setor de perfumaria e cosméticos
                                                {`\n`}- Na fabricação de fármacos como a aspirina.
                                                {`\n`}- Na fabricação de biocombustível.
                                                {`\n`}- Na fabricação de produtos de limpeza por reação de saponificação, tendo-se como produto sabão e glicerol.</Text>
                                </View>
                        </View>
                        <Text style={foStyles.subtitulo}>Estrutura dos ésteres</Text>
                        <Text style={foStyles.txtPropriedades}>A estrutura de um éster é composta por dois oxigênios ligados a um mesmo carbono, um deles realizando dupla ligação e outro se ligando a um radical orgânico. Veja a imagem a seguir, considerando R como radical orgânico</Text>
                        <View style={foStyles.viewtxtCuriosidade}>
                                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/ester.png")} style={[foStyles.img2]} loading="lazy" />
                        </View>
                        <Text style={foStyles.txtPropriedades}>{`\n`}   Os ésteres podem ser classificados de acordo com os aspectos físicos das substâncias a que dão origem. Ésteres provenientes da reação de esterificação, ou seja, formados por um ácido carboxílico e um álcool, são denominados essências de frutas, isso porque eles são as substâncias que dão aroma e sabor às frutas, usados também como aromatizantes artificiais.</Text>
                        <Text style={foStyles.txtPropriedades}>{`\n`}   Os triglicerídeos, ou triésteres, são os ésteres classificados como lipídios, eles são lipossolúveis, ou seja, não possuem afinidade com a água. Eles podem ser formados por organismos vivos, como um produto da junção de ácido graxo e glicerol. </Text>
                        <Text style={foStyles.txtPropriedades}>{`\n`}   E temos as ceras, formadas por ácidos graxos com mais de 10 carbonos (nessa classificação só teremos um grupo -COOH na cadeia). As ceras são produzidas por organismos vegetais e animais e funcionam como um revestimento para desacelerar a perda de água.</Text>
                        <Text style={foStyles.subtitulo}>Obtenção dos ésteres</Text>
                        <Text style={foStyles.txtPropriedades}>Os ésteres são obtidos por meio de reações de substituição. Uma das reações mais importantes de obtenção do éster é a esterificação, que acontece entre um álcool e um ácido carboxílico, em que o hidrogênio da carboxila é substituído pelo radical orgânico proveniente do álcool. Essa reação é catalisada por ácidos fortes, e, apesar de não acontecer com 100% de aproveitamento, os produtos principais são moléculas de água e éster. Veja:</Text>
                        <View style={foStyles.viewtxtCuriosidade}>
                                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/ester/esterificacao.png")} style={[foStyles.img2]} loading="lazy" />
                        </View>
                        <Text style={foStyles.txtPropriedades}>É também possível obter-se um éster reagindo cloretos ácidos com álcool — uma reação perigosa por ser extremamente exotérmica e pelos cloretos ácidos serem substâncias corrosivas e propensas a sofrer hidrólise. Veja:</Text>
                        <View style={foStyles.viewtxtCuriosidade}>
                                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/ester/subhidrogenio.png")} style={[foStyles.img2]} loading="lazy" />
                        </View>
                        <Text style={foStyles.txtPropriedades}>Outra possível forma de obter-se ésteres é por meio da substituição do hidrogênio de uma hidroxila de um álcool ou fenol por um grupo acila (R-C=O) de um anidrido (ácido carboxílico desidratado). É a reação que acontece para a formação de aspirina, fármaco usado para tratamento de dor, febre e inflamações.</Text>
                        <View style={foStyles.viewtxtCuriosidade}>
                                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/ester/cloretoealcool.png")} style={[foStyles.img2]} loading="lazy" />
                        </View>


                        <Text style={foStyles.subtitulo}>Nomenclatura</Text>
                        <Text style={foStyles.txtPropriedades}>A nomenclatura dos fenois geralmente segue a seguinte regra:</Text>
                        <Text style={foStyles.txtNomenclatura}>(nomenclatura do hidrocarboneto)+ato de (nome do substituinte com terminação ila)</Text>
                        <Text style={foStyles.txtPropriedades}>Exemplos:</Text>
                        <View style={foStyles.viewtxtCuriosidade}>
                                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/ester/nomenclatura.png")} style={[foStyles.img2, { height: 450 }]} loading="lazy" />
                        </View>
                        <Text style={foStyles.txtPropriedades}>Devido ao fato de serem derivados de ácidos carboxílicos, existe uma nomenclatura usual (não oficial) para os ésteres, que se refere ao nome usual do ácido, mudando-se apenas a terminação ico por ato. Veja os exemplos a seguir:</Text>
                        <View style={foStyles.viewtxtCuriosidade}>
                                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/ester/nomenclatura2.png")} style={[foStyles.img2, { height: 320 }]} loading="lazy" />
                        </View>
                        <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                                <Text onPress={() => {
                                        Linking.openURL('https://brasilescola.uol.com.br/quimica/nomenclatura-dos-Esteres.htm');
                                }}> https://brasilescola.uol.com.br/quimica/nomenclatura-dos-Esteres.htm</Text>
                        </Text>
                </View>
        )
}
export default Ester;