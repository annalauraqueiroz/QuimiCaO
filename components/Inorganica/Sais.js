import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Sais() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>Segundo a teoria eletrolítica de Arrhenius, que considera o comportamento das substâncias quando dissolvidas em água, a função inorgânica dos sais pode ser definida da seguinte forma:
            </Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>Sal é toda substância que, em solução aquosa, sofre dissociação, liberando pelo menos um cátion diferente do H+ e um ânion diferente do OH-.
            </Text>
            <Text style={foStyles.txtPropriedades}>Exemplos: </Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>NaCl(s) → Na+(aq) + Cl-(aq)</Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>CaSO4(s) → Ca2+(aq) + SO42-(aq)</Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>Ca3(PO4)2(s) → 3 Ca2+(aq) + 2 PO43-(aq)</Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>(NH4)3PO4(s) → 3 NH4+(aq) + 1 PO43-(aq)</Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>Mg3(BO3)2(s) → 3 Mg 2+(aq) + 2 BO33-(aq)</Text>

            <Text style={foStyles.txtPropriedades}> Existem também sais que podem liberar os íons H+ e OH-, mas eles não são os únicos. Por exemplo, se o sal liberar em meio aquoso o íon H+, ele irá liberar também outro cátion. Por outro lado, se ele liberar o íon OH-, esse sal também liberará outro ânion. Um exemplo é o fosfato de cálcio tribásico (Ca3(OH)3PO4) que contém o cátion Ca2+ e os ânions OH- e PO43-.</Text>
            <Text style={foStyles.txtPropriedades}> Uma das maneiras principais em que os sais são formados é a partir da reação entre um ácido e uma base. Esse tipo de reação é chamado de neutralização, pois o cátion H+ do ácido reage com o ânion OH- da base e forma a água, neutralizando o meio. Ao mesmo tempo, o cátion fornecido pela base une-se ao ânion fornecido pelo ácido e forma um sal.
            </Text>

            <Text style={foStyles.txtPropriedades}>Exemplos: </Text>
            <Text style={[foStyles.txtPropriedades]}>Ácido + Base → Sal + Água</Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>HNO3(aq)+ KOH(aq) → KNO3(aq)+ H2O(l) (Nitrato de potássio)</Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>2 HCl(aq) + Ca(OH)2(aq) → CaCl2(aq) + 2 H2O(l) (Cloreto de cálcio)</Text>
            <Text style={[foStyles.txtPropriedades, { alignSelf: 'center' }]}>H2SO4(aq) + 2 NaOH(aq) → Na2SO4(aq) + 2 H2O(l) (Sulfato de sódio)</Text>

            <Text style={foStyles.subtitulo}>Propriedades características dos sais inorgânicos</Text>
            <Text style={foStyles.txtPropriedades}>● Altos pontos de fusão e de ebulição: Visto que a força eletrostática que une os íons desses compostos é bem intensa, exige-se uma maior quantidade de energia para rompê-la e assim fazer com que a substância mude de estado físico, o que representa mais tempo no fogo. Isso pode ser visto no caso do próprio sal de cozinha, que possui ponto de fusão igual a 801 ºC e ponto de ebulição igual a 1413 ºC.</Text>
            <Text style={foStyles.txtPropriedades}>● Sólidos: Visto que possuem retículos cristalinos com formatos bem definidos, os sais inorgânicos são sólidos em condições de temperatura e pressão normais. </Text>
            <Text style={foStyles.txtPropriedades}>A grande maioria são sólidos cristalinos, como o próprio NaCl, porque a organização dos seus átomos é regular. Porém, existem alguns que são sólidos amorfos, cujos átomos não possuem uma organização regular, como é caso do vidro que é formado pelo aquecimento de uma mistura que leva óxido de silício. Outros sais amorfos são o BeF2 e o Cu2C2.</Text>
            <Text style={foStyles.txtPropriedades}>● Condutores de corrente elétrica: Isso ocorre quando estão fundidos (no estado líquido) ou em meio aquoso, pois ocorre a liberação de seus íons, que são os responsáveis pela condução da eletricidade. No estado sólido, eles não são condutores porque a estrutura rígida do retículo cristalino não permite a livre movimentação de íons.</Text>
            <Text style={foStyles.txtPropriedades}>● Solubilidade variável: O melhor solvente dos sais é a água, pois tanto os sais como a água são polares; mas existem outros fatores além da polaridade que afeta a solubilidade deles nos materiais, como a estrutura cristalina. Os compostos carbonatos, por exemplo, tais como o carbonato de cálcio (CaCO3), de estrôncio (SrCO3) e de bário (BaCO3), são praticamente insolúveis em água.</Text>
            <Text style={foStyles.txtPropriedades}>● Elevada dureza: Isso significa que eles são bastante resistentes ao risco;</Text>
            <Text style={foStyles.txtPropriedades}>● Baixa tenacidade: Quer dizer que os sais possuem baixa resistência a impacto ou choque mecânico, sendo sólidos quebradiços, porque, com a pressão, os íons de mesmo sinal repelem-se e o aglomerado iônico é destruído.</Text>


            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>Os nomes dos sais são formados pela mudança de sufixos que provém do ácido que originou o ânion participante do sal.</Text>
            <Text style={foStyles.txtNomenclatura}>Nome do ânion + de + nome do cátion</Text>
            <Text style={foStyles.txtPropriedades}>Sufixo do ácido          Sufixo do ânion
            </Text>
            <Text style={foStyles.txtPropriedades}>
                -idrico                                  -eto</Text>
            <Text style={foStyles.txtPropriedades}>
                -ico                                       -ato</Text>
            <Text style={foStyles.txtPropriedades}>
                -oso                                      -ito</Text>
            <Text style={foStyles.txtPropriedades}>Exemplos: </Text>
            <Text style={[foStyles.txtPropriedades]}>KCl: este sal é derivado do ácido clorídrico, de acordo com a tabela acima o sufixo do ácido é –idrico, portanto o sufixo do ânion será –eto.</Text>




            <Text style={foStyles.txtPropriedades}>Referências:{`\n`}
                <Text onPress={() => {
                    Linking.openURL('https://brasilescola.uol.com.br/quimica/nomenclatura-dos-sais.htm');
                }}>https://brasilescola.uol.com.br/quimica/nomenclatura-dos-sais.htm</Text>
            </Text>
            <Text style={foStyles.txtPropriedades}>
                <Text onPress={() => {
                    Linking.openURL('https://www.preparaenem.com/quimica/propriedades-dos-sais-inorganicos.htm');
                }}>https://www.preparaenem.com/quimica/propriedades-dos-sais-inorganicos.htm</Text>
            </Text>
            <Text style={foStyles.txtPropriedades}>
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-inorganica/sais.htm');
                }}>https://www.manualdaquimica.com/quimica-inorganica/sais.htm</Text>
            </Text>
        </View>
    );
}
export default Sais;