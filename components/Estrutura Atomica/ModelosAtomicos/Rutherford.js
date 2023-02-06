import React from 'react'
import { Text, Linking, View, Image } from 'react-native'
import { foStyles } from '../../../assets/styles/funcoesOrganicasStyles';

function Rutherford() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                No ano de 1911, o físico neozelandês Ernest Rutherford conduziu um experimento muito importante que mudou o modo como o átomo era visto pelos cientistas da época. Até o momento, o modelo atômico aceito era o de Thomson, que dizia que o átomo seria uma esfera positiva, não maciça, incrustada de elétrons e com carga elétrica total nula.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                O experimento em questão é demonstrado na figura abaixo, onde temos uma amostra do elemento radioativo polônio dentro de um bloco de chumbo. A radiação alfa (α) que saía do polônio passava por um pequeno orifício do bloco de chumbo e ia em direção a uma finíssima lâmina de ouro. Atrás dessa lâmina de ouro havia um anteparo fluorescente, pois foi recoberto de sulfeto de zinco, que mostraria uma luminosidade onde as partículas alfa incidissem.
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Rutherford/experimento.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Experimento de Rutherford com partículas alfa em lâmina de ouro</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                O resultado observado foi o seguinte:
            </Text>

            <Text style={foStyles.txtPropriedades}>
                1. A maioria das partículas continuou sua trajetória atravessando a lâmina de ouro;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                2. Poucas partículas atravessaram a lâmina e desviaram-se de sua trajetória;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                3. Poucas partículas foram refletidas, não atravessando a lâmina.
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Rutherford/trajetoria.png")} style={[foStyles.img2, { height: 150 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Trajetória das partículas alfa no experimento de Rutherford</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                Cada um desses fatos levou Rutherford à conclusão de que o modelo de Thomson estava incorreto:
            </Text>
            <Text style={foStyles.txtPropriedades}>
                1. O fato de a grande maioria das partículas alfa atravessar a lâmina de ouro indica que a maior parte do átomo trata-se, na verdade, de espaços vazios;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                2. O fato de poucas partículas que atravessaram a lâmina de ouro terem sofrido um desvio na sua trajetória indica que elas se aproximavam de alguma região do átomo que tivesse a mesma carga que elas, isto é, carga positiva, sendo assim repelidas;
            </Text>
            <Text style={foStyles.txtPropriedades}>
                3. As poucas partículas que foram rebatidas pela lâmina de ouro indicavam que o átomo possui uma região maciça que impedia essa passagem, com carga igual, isto é, positiva. As partículas refletidas bateriam de frente com essa região.
            </Text>

            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Rutherford/modelo.png")} style={[foStyles.img2, {height:200}]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Explicação do experimento de Rutherford e modelo do átomo</Text>
                </View>
            </View>


            <View style={foStyles.curiosidade}>
                <Image source={require("../../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade}/>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Modelo atômico de Rutherford: O átomo possui uma região central chamada de núcleo atômico, onde fica praticamente toda a massa do átomo e que apresenta carga positiva, e uma região denominada de eletrosfera, onde os elétrons ficam girando ao redor do núcleo.</Text>
                </View>
           </View>

           <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Rutherford/modeloatomo.png")} style={[foStyles.img2, { height: 150 }]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Trajetória das partículas alfa no experimento de Rutherford</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>
            Esse modelo de Rutherford ficou conhecido como sistema planetário ou sistema solar, porque o Sol seria o núcleo, enquanto os planetas seriam os elétrons que ficam girando ao redor.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Alguns anos mais tarde a terceira partícula subatômica (nêutron) foi descoberta e alterou-se um pouco o modelo de Rutherford. O núcleo atômico era composto pelos prótons (partículas positivas) e nêutrons (partículas neutras), compondo quase que a massa total do átomo:
            </Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../../assets/images/EstruturaAtomica/ModelosAtomicos/Rutherford/atomo.png")} style={[foStyles.img2, {height:200}]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Átomo com núcleo formado por prótons e nêutrons com elétrons girando na eletrosfera</Text>
                </View>
            </View>


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/quimica-geral/modelo-atomico-rutherford.htm');
                }}> https://www.manualdaquimica.com/quimica-geral/modelo-atomico-rutherford.htm</Text>
            </Text>
        </View>
    )
}
export default Rutherford;