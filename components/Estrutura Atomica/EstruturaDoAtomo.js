import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function EstruturaDoAtomo() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                O átomo é formado por pequenas partículas, também chamadas de partículas subatômicas: elétrons, prótons e nêutrons.

                {`\n`}A maior parte da massa do átomo concentra-se no núcleo, uma pequena e densa região. O seu maior volume encontra-se na eletrosfera, local de espaços vazios, pois os elétrons orbitam ao redor do núcleo.

                {`\n`}Importante destacar que os prótons (p) possuem carga positiva, os elétrons (e), carga negativa e os nêutrons (n), não apresentam carga (neutralidade) e de acordo com a estrutura dos átomos, os prótons e os nêutrons estão concentrados no núcleo, enquanto que os elétrons estão localizados na eletrosfera, ou seja, em volta do núcleo.</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/EstruturaAtomica/estruturadoatomo.gif")} style={[foStyles.img2, { height: 200 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Elétrons</Text>
            <Text style={foStyles.txtPropriedades}>O elétron possui carga elétrica negativa (-1) e quase não possui massa, pois seu valor de 9,11 x 10-28 g e é cerca de 1840 vezes menor que a massa do núcleo. Eles são minúsculas partículas que giram muito rapidamente ao redor do núcleo atômico.</Text>
            <Text style={foStyles.txtPropriedades}>Os elétrons que se encontram nas regiões mais externas do átomo é que são responsáveis pela formação das ligações químicas, que ocorrem através da doação, recebimento ou compartilhamento de elétrons.</Text>

            <Text style={foStyles.subtitulo}>Prótons</Text>
            <Text style={foStyles.txtPropriedades}>O próton tem carga elétrica positiva (+1) de mesmo valor absoluto que a carga dos elétrons. Dessa forma, um próton e um elétron tendem a se atrair eletricamente.</Text>
            <Text style={foStyles.txtPropriedades}>Através dos prótons é possível distinguir os elementos químicos, pois cada átomo de um elemento apresenta um número definido de prótons em seu núcleo, o qual é chamado de número atômico.</Text>

            <Text style={foStyles.subtitulo}>Nêutrons</Text>
            <Text style={foStyles.txtPropriedades}>O nêutron não tem carga nenhuma, ou seja, é eletricamente neutro. Juntamente com os prótons, ele forma o núcleo atômico, que carrega toda a massa do átomo (99,9%). Tanto o próton quanto o nêutron possuem aproximadamente a massa de 1,67 x 10-24 g. Esse valor representa uma unidade de massa atômica 1 μ.</Text>
            <Text style={foStyles.txtPropriedades}>O nêutron proporciona estabilidade ao núcleo atômico, já que a força nuclear faz com que seja atraído por elétrons e prótons.</Text>
            <Text style={foStyles.txtPropriedades}>Apenas o átomo de hidrogênio não possui nêutrons, sendo constituído de apenas um elétron girando em torno de um próton.</Text>
            <Text style={foStyles.txtPropriedades}>Esse número de prótons e elétrons de um átomo em seu estado fundamental define o que chamamos de número atômico (Z)</Text>
            <Text style={foStyles.txtPropriedades}>Por exemplo, o sódio (Na) tem número atômico 11, ou seja, seu núcleo apresenta 11 prótons. Consequentemente, existem 11 elétrons na eletrosfera de um átomo desse elemento. </Text>


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.todamateria.com.br/atomo/');
                }}> https://www.todamateria.com.br/atomo/</Text>
            </Text>
        </View>
    )
}
export default EstruturaDoAtomo;