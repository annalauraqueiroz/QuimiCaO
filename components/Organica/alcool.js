import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Alcool() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
            O álcool é uma função orgânica que engloba os compostos com a semelhança estrutural de apresentar grupos OH ligado a um carbono saturado, ou seja, a um carbono que só faz ligações simples. 
            </Text>
            <Text style={foStyles.txtPropriedades}>
            A fórmula geral de um álcool é dada pela figura abaixo em que R podem ser átomos de hidrogênio ou então uma ramificação.
            </Text>
            <Image source={require("../../assets/images/Organica/FuncoesOrganicas/alcool.png")} style={foStyles.img} loading="lazy" />

            <Text style={foStyles.subtitulo}>Propriedades Físicas</Text>
            <Text style={foStyles.txtPropriedades}>
                A propriedade física mais importante dos alcoóis é a polaridade dos grupos -OH. Por causa da grande diferença de eletronegatividade entre o oxigênio e o carbono (3,5 - 2,5 = 1,0) e entre o oxigênio e o hidrogênio (3,5 - 2,1 = 1,4), tanto a ligação C-O como a OH dos alcoóis são covalentes polares, e os alcoóis são moléculas polares, conforme ilustrado no metanol na figura abaixo.
            </Text>

            <Image source={require("../../assets/images/Organica/FuncoesOrganicas/alcool_img2.png")} style={[foStyles.img2, {height: 180}]} loading="lazy" />
            <Text style={foStyles.txtLegenda}>
                Figura 1: Polaridade das ligações C-O-H no metanol. (a) O carbono e o hidrogênio têm cargas parciais positivas, e o oxigênio, carga parcial negativa. (b) Mapa de densidade de elétron mostrando a carga parcial negativa (vermelho) em torno do oxigênio e uma carga parcial positiva (azul) em torno do hidrogênio do grupo OH.
            </Text>

            <Text style={foStyles.txtPropriedades}>
                {`\n`}Os alcoóis têm pontos de ebulição mais altos que os alcanos, alcenos e alcinos de massa molecular semelhante porque as moléculas de álcool se associam entre si no estado líquido através da ligação de hidrogênio. A força da ligação de hidrogênio entre as moléculas de álcool é de aproximadamente 2 a 5 kcal/mol, o que significa que é necessária uma energia adicional na separação entre os alcoóis devido à existência das ligações de hidrogênio intermoleculares.
                 </Text>
            <Text style={foStyles.txtPropriedades}>
            Por causa do aumento das forças de dispersão de London entre moléculas maiores, os pontos de ebulição de todos os tipos de compostos, incluindo alcoóis, aumentam à medida que aumenta a massa molecular. 
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Alcoóis são muito mais solúveis em água do que os hidrocarbonetos da massa molecular semelhante (Tabela abaixo), pois as moléculas de álcool interagem com as moléculas de água por meio da ligação de hidrogênio. Metanol, etanol e I-propanol são solúveis em água em todas as proporções. À medida que aumenta a massa molecular, a solubilidade dos alcoóis torna-se mais parecida com a de hidrocarbonetos de massa molecular semelhante.
            </Text>
            <Text style={foStyles.txtPropriedades}>
            Alcoóis de massa molecular mais alta são muito menos solúveis em água porque o tamanho da porção hidrocarboneto de suas moléculas (que diminui a solubilidade em água) torna-se muito grande em relação ao tamanho do grupo —OH (o que aumenta a solubilidade em água).  
            </Text>
            <Image source={require("../../assets/images/Organica/FuncoesOrganicas/alcool_img3.png")} style={[foStyles.img2,{height:150}]} loading="lazy" />
            <Text style={foStyles.subtitulo}>Nomenclatura</Text>

            <Text style={foStyles.txtPropriedades}>Para dar nome aos álcoois, de acordo, com as regras da IUPAC (União Internacional da Química Pura e Aplicada), devemos proceder como nos casos dos hidrocarbonetos, só que empregando o sufixo ol. </Text>
            <Text style={foStyles.txtNomenclatura}>Prefixo + infixo + ol </Text>
            <Text style={foStyles.txtPropriedades}>Prefixo = número de carbonos da cadeia principal </Text>
            <Text style={foStyles.txtPropriedades}>Infixo = tipo de ligação, no caso, dos álcoois, ligação simples </Text>

            <Text style={[foStyles.subtitulo,{fontSize:29}]}>Aplicações de alguns tipos de álcoois</Text>
            <Text style={foStyles.txtPropriedades}>Atualmente, compostos com a função orgânica álcool estão presentes em diferentes aplicações no nosso dia-a-dia. O etanol por exemplo pode ser utilizado como combustível automotivo e também está presente nas bebidas alcoólicas. </Text>
            
            <Text style={[foStyles.subtitulo]}>Etanol</Text>
            <Text style={foStyles.txtPropriedades}>O etanol, como o próprio nome diz é o álcool que apresenta dois átomos de carbono em sua estrutura:</Text>
            <Text style={[foStyles.txtPropriedades,{alignSelf:'center'}]}>CH3-CH2-OH</Text>
            <Text style={foStyles.txtPropriedades}>Além de ser utilizado como combustível e estar presente nas bebidas alcoólicas, o etanol apresenta outras aplicações como por exemplo: solvente em perfumes, loções, desodorantes e medicamentos e em produtos de uso doméstico como o álcool em gel. </Text>
            <Text style={foStyles.txtPropriedades}>O etanol também é conhecido como álcool etílico. </Text>

            <Text style={[foStyles.subtitulo]}>Metanol</Text>
            <Text style={foStyles.txtPropriedades}>O metanol é um álcool muito importante em laboratórios, indústrias e também como combustível. Ele é obtido do petróleo e do carvão mineral por meio de transformações químicas realizadas nas indústrias. Também pode ser obtido de outras maneiras.</Text>
            <Text style={[foStyles.txtPropriedades]}>Sua aplicação principal se dá como solvente, na fabricação de plásticos, no preparo de vitaminas e também em hormônios.</Text>
            <Text style={foStyles.txtPropriedades}>Importante ressaltar que a ingestão desse tipo de álcool pode levar à morte por ser extremamente tóxico. </Text>
            <Text style={[foStyles.subtitulo]}>Álcool propílico (propanol)</Text>
            <Text style={foStyles.txtPropriedades}>O propanol é utilizado como solvente na indústria farmacêutica para formação de resinas. Em geral, é formado naturalmente por processos de fermentação. </Text>
            <Text style={[foStyles.subtitulo]}>Colesterol</Text>
            <Text style={foStyles.txtPropriedades}>O colesterol é um esteroide presente nas membranas celulares, sendo um álcool policíclico com uma cadeia longa e por isso, é insolúvel em água e no sangue. Para ser transportado no organismo deve se ligar à proteínas hidrossolúveis.  </Text>


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://vaiquimica.com.br/funcao-organica-alcool/');
                }}> https://vaiquimica.com.br/funcao-organica-alcool/</Text>
            </Text>
        </View>
    )
}
export default Alcool;