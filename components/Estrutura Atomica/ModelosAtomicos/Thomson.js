import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../../assets/styles/funcoesOrganicasStyles';

function Thomson() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                O modelo atômico aceito por quase todo o século XIX foi o proposto por Dalton, que basicamente se tratava de uma esfera maciça e indivisível.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Entretanto, esse modelo não explicava as características elétricas da matéria, que já eram conhecidas desde a época do filósofo e matemático grego Tales de Mileto (640-546 a.C.). Ele demonstrou que o atrito de um pedaço de âmbar (resina fossilizada) com seda ou lã fazia com que eles ficassem eletricamente carregados, tanto que dois pedaços de âmbar atritados repeliam-se e, por outro lado, eles atraíam a seda ou lã. A palavra âmbar em grego é elektron e daí que veio o uso da palavra “eletricidade”.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Benjamin Franklin (1706-1790) chamou essas cargas elétricas opostas de carga positiva e carga negativa. Ele também realizou experimentos envolvendo eletricidade, como um que ficou bastante famoso em razão do perigo envolvido, quando ele colocou uma chave em uma pipa e um raio durante uma tempestade foi atraído pela chave.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Além disso, no início do século XIX, os cientistas já realizavam várias experiências envolvendo eletricidade, como a eletrólise (passagem de corrente elétrica por um sistema líquido) feita por Faraday e a pilha elétrica criada por Volta, em que havia condução de corrente elétrica por metais.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Assim, para explicar esses fenômenos, o cientista Joseph John Thomson (1856-1940) realizou vários experimentos envolvendo um dispositivo chamado de ampola de Crookes ou tubo de raios catódicos. Esse dispositivo foi criado pelo físico inglês Willian Crookes (1832-1919), sendo feito de um tubo de vidro vedado, com um gás sob baixa pressão (atmosfera rarefeita), em que ele aplicava uma tensão. Isso era feito porque dentro do tubo haviam dois eletrodos, ou seja, de um lado tinha um fio de metal ligado ao polo positivo de uma fonte de alta tensão, que ficou sendo chamado de ânodo, e do outro havia outro metal, chamado de cátodo, que estava ligado ao polo negativo. É interessante que a palavra eletrodo significa “caminho para a eletricidade”.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Quando a alta tensão era ligada, podiam-se observar raios saindo do cátodo e indo em direção ao ânodo. Esses raios foram chamados, então, de raios catódicos.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                J. J. Thomson observou que essas cargas elétricas tinham massa, pois, colocando-se uma ventoinha entre os dois eletrodos, quando os raios catódicos passavam, eles movimentavam a ventoinha. Além disso, como se pode ver na imagem abaixo, quando se colocava um campo elétrico produzido por placas eletrizadas, esses raios sofriam um desvio e eram atraídos pelo polo positivo do campo elétrico. Isso comprovou que os raios catódicos eram um feixe de partículas negativas:
            </Text>

            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Thomson/experimento.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Experimento de Thomson com tubo de raios catódicos</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Essa não era uma propriedade somente para um tipo de gás, mas para qualquer gás que fosse usado no tubo, o resultado desse experimento era sempre o mesmo. Portanto, essas partículas negativas, que foram chamadas de elétrons, eram parte constituinte dos átomos de toda matéria, ou seja, dos átomos de qualquer elemento químico.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                Desse modo, Thomson propôs um novo modelo atômico, que continuava esférico como o de Dalton, porém, que explicava a natureza elétrica da matéria. Para Thomson, o átomo não seria indivisível, como Dalton propôs, mas sim divisível, ou seja, ele possuiria partículas menores de carga negativa, os elétrons, que ficavam distribuídos aleatoriamente sobre uma esfera carregada positivamente. A esfera tinha que ser positiva para neutralizar as cargas negativas dos elétrons, tendo em vista que o átomo é eletricamente neutro.
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Thomson/modeloatomo.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Modelo para o átomo de Thomson</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Esse modelo ficou conhecido como modelo do pudim de passas. A analogia entre o pudim de passas e o modelo atômico de Thomson é igual à do panetone abaixo, em que as uvas passas ficam distribuídas aleatoriamente e incrustadas na massa, sendo que a carga positiva do átomo corresponde a essa massa e os elétrons correspondem às uvas passas.
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/thomson.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Analogia entre o modelo atômico de Thomson e um panetone com uvas passas</Text>
                </View>
            </View>


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-geral/modelo-atomico-thomson.htm');
                }}> https://www.manualdaquimica.com/quimica-geral/modelo-atomico-thomson.htm</Text>
            </Text>
        </View>
    )
}
export default Thomson;