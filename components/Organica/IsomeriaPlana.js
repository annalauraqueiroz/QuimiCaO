import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function IsomeriaPlana() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                A isomeria plana ou constitucional considera a fórmula estrutural plana das moléculas, não importando o arranjo que os átomos ocupam no espaço. Nesse tipo de isomeria, é considerada a forma como os átomos estão ligados, podendo ser de cinco tipos diferentes: cadeia, posição, função, compensação e tautomeria.
            </Text>
            <Text style={foStyles.subtitulo}>Isomeria plana de cadeia</Text>
            <Text style={foStyles.txtPropriedades}>A isomeria plana de cadeia ocorre quando os átomos se unem formando compostos diferentes, com idêntica fórmula molecular e mesma função química, mas possuindo alguma diferença na cadeia carbônica. No exemplo abaixo, os dois compostos são hidrocarbonetos que se diferenciam por possuírem cadeia aberta e cadeia cíclica.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/Isomeria/isomerosdecadeia.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>O isomerismo de cadeia também ocorre em relação à insaturação, à presença de ramificações e à existência de heteroátomos.</Text>
            <Text style={foStyles.subtitulo}>Isomeria plana de posição</Text>
            <Text style={foStyles.txtPropriedades}>A isomeria plana de posição se manifesta quando os compostos mantêm algum componente da molécula em localizações diferentes na cadeia. Esse componente pode ser uma ligação múltipla (insaturação), o heteroátomo, o grupo funcional ou a ramificação.
            </Text>
            <Text style={foStyles.txtPropriedades}>No exemplo abaixo, as três moléculas pertencem ao grupo funcional álcool, mas possuem o grupamento hidroxila (-OH) unido a diferentes átomos de carbono da cadeia.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/Isomeria/isomerosdeposicao.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>

            <Text style={foStyles.subtitulo}>Isomeria plana de função</Text>
            <Text style={foStyles.txtPropriedades}>A isomeria plana de função se dá quando os compostos possuem a mesma fórmula molecular, mas pertencem a funções químicas distintas.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/Isomeria/isomerosdefuncao.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.subtitulo}>Isomeria plana de compensação</Text>
            <Text style={foStyles.txtPropriedades}>A isomeria plana de compensação é uma situação particular da isomeria de posição e ocorre quando a cadeia contém um heteroátomo que ocupa diferentes posições nos isômeros. A isomeria de compensação também é conhecida como metameria.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/Isomeria/isomeriadecompensacao.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.subtitulo}>Tautomeria</Text>
            <Text style={foStyles.txtPropriedades}>A tautomeria é um caso particular da isomeria de função e ocorre pela coexistência de isômeros de funções químicas distintas em um mesmo sistema, estabelecendo um equilíbrio químico dinâmico. Por isso, é conhecida como isomeria dinâmica.
            </Text>
            <Text style={foStyles.txtPropriedades}>Esse caso ocorre em apenas dois sistemas: entre uma cetona e um enol, em um equilíbrio denominado equilíbrio cetoenólico, e entre um aldeído e um enol, em um equilíbrio aldoenólico.
            </Text>
            <Text style={foStyles.txtPropriedades}>A imagem a seguir mostra um exemplo do equilíbrio cetoenólico, em que uma molécula pertencente ao grupo cetona está em equilíbrio com seu isômero, que pertence ao grupo dos enóis â€• grupo funcional –OH unido a carbono sp2.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/Isomeria/tautomeria.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-organica/isomeria.htm#');
                }}> https://www.manualdaquimica.com/quimica-organica/isomeria.htm#</Text>
            </Text>


        </View>
    )

}
export default IsomeriaPlana;