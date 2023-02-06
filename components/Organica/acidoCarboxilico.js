import React from 'react'
import { Text, Image, View, Linking} from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function AcidoCarboxilico() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                Os ácidos carboxílicos são compostos orgânicos que possuem o grupo carbonila ligado a um grupo hidroxila (OH).</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>O ácido acético (vinagre) é um dos ácidos carboxílicos mais usados no cotidiano</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Os ácidos carboxílicos são compostos orgânicos caracterizados pelo grupo carboxila (—COOH), nome e grupo que vem da junção “carbonila (—CO) + hidroxila (OH)”, ou seja, todo ácido carboxílico possui em pelo menos uma das extremidades da cadeia um carbono ligado a um oxigênio e a uma hidroxila.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/acidoCarboxilico/estrutura.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Entre os principais compostos da função dos ácidos carboxílicos utilizados no cotidiano, estão o ácido metanoico, mais conhecido como ácido fórmico, e o ácido etanoico ou ácido acético (vinagre).

                O ácido fórmico é assim chamado porque foi obtido pela primeira vez através da destilação de formigas vermelhas. Esse ácido é o principal responsável pela dor intensa e coceira sentida na picada desse inseto.{`\n`} </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/acidoCarboxilico/formigas.png")} style={[foStyles.img2, { height: 120 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>{`\n`}A dor intensa da picada das formigas vermelhas vem da ação do ácido fórmico ou ácido metanoico</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}Dentre as aplicações do ácido metanoico, destaca-se seu uso como mordente para ajudar a fixar as cores no tingimento dos tecidos, além de sua aplicação como desinfetante na Medicina.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}O ácido acético é o principal constituinte do vinagre, que é usado em temperos na cozinha, em limpezas e na preparação de perfumes, corantes, seda artificial e acetona.</Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>O vinagre é uma solução a 4% em volume de ácido etanoico ou ácido acético em média</Text>
                </View>
            </View>


            <Text style={foStyles.subtitulo}>Propriedades físicas</Text>
            <Text style={foStyles.txtPropriedades}>Visto que os ácidos carboxílicos possuem a hidroxila e o oxigênio, eles realizam ligações de hidrogênio, inclusive realizam o dobro de ligações de hidrogênio que as moléculas dos álcoois. Por esse mesmo motivo, os seus pontos de ebulição e fusão são mais elevados que os dos álcoois.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}Vale ressaltar que os ácidos metanoico e etanoico são mais densos que a água. Em relação à solubilidade, os ácidos carboxílicos que apresentam até quatro carbonos são solúveis em água, e os demais são considerados insolúveis.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}Analisando a estrutura do composto, percebemos que a solubilidade em água diminui à medida que o número de carbonos da cadeia aumenta, pois sabemos que água é um composto polar, sendo assim ela só vai dissolver substâncias polares, é o que comprova a regra “Semelhante dissolve semelhante”. Ácidos carboxílicos possuem uma parte polar (grupo carboxila) e outra apolar (cadeia carbônica).</Text>

            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Organica/FuncoesOrganicas/acidoCarboxilico/estPolar.png")} style={[foStyles.img2]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Estrutura polar de ácidos carboxílicos</Text>
                </View>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Organica/FuncoesOrganicas/acidoCarboxilico/estApolar.png")} style={[foStyles.img2]} loading="lazy" />
                    <Text style={foStyles.txtLegenda}>Estrutura apolar de ácidos carboxílicos</Text>
                </View>
            </View>


            <Text style={foStyles.txtPropriedades}>{`\n`}Quanto maior a parte apolar da cadeia mais insolúvel será o composto, é por isso que Ácidos carboxílicos com mais de 10 carbonos não se dissolvem em água.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}Ácidos carboxílicos com até quatro carbonos são líquidos incolores e solúveis em água, e aqueles com número de átomos de carbono superior a dez são sólidos insolúveis em água e classificam-se como ácidos graxos, podem ser encontrados em óleos e gorduras.</Text>

            <Text style={foStyles.subtitulo}>Nomenclatura</Text>
            <Text style={foStyles.txtPropriedades}>A nomenclatura oficial dos ácidos carboxílicos geralmente seguem a seguinte regra:</Text>
            <Text style={foStyles.txtNomenclatura}>ÁCIDO + PREFIXO + LIGAÇÃO + ÓICO</Text>
            <Text style={foStyles.txtPropriedades}>O prefixo é o que indica a quantidade de carbonos na cadeia principal. A ligação é o tipo de ligação entre os carbonos, sendo an para simples, en para dupla e in para tripla.{`\n`}
                Caso tenha mais de um grupo carboxila na cadeia, isso pode ser indicado pelos sufixos di, tri, tetra, etc. Exemplos:
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/acidoCarboxilico/nomenclatura1.png")} style={[foStyles.img2, { height: 450 }]} loading="lazy" />
            </View>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Como o carbono só pode fazer quatro ligações, o grupo carboxila sempre aparecerá no início ou no final da molécula. Portanto, não é necessário numerar a posição do grupo funcional. Já as insaturações e as ramificações precisam ser sempre numeradas. </Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Sais de ácidos carboxílicos</Text>
            <Text style={foStyles.txtPropriedades}>Sais de ácidos carboxílicos são compostos oxigenados formados a partir de ácido carboxílico e base inorgânica muito utilizados na produção de sabões.</Text>


            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/acidoCarboxilico/sabonete.gif")} style={[foStyles.img2]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>Sais de ácidos carboxílicos são compostos orgânicos oxigenados que apresentam como principal característica a presença de uma carboxila. Nessa carboxila, há substituição do hidrogênio da hidroxila (OH) por um cátion de um metal qualquer ou pelo cátion amônio (NH4+).</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/FuncoesOrganicas/acidoCarboxilico/estruturaSais.png")} style={[foStyles.img2]} loading="lazy" />
            </View>
            <Text style={foStyles.subtitulo}>Propriedades dos sais de ácidos carboxílicos</Text>
            <Text style={foStyles.txtPropriedades}>
                • São compostos iônicos, ou seja, são formados por ligações iônicas;
                {`\n`}• À temperatura ambiente, são sólidos;
                {`\n`}• São inodoros;
                {`\n`}• Por serem iônicos, apresentam pontos de fusão e de ebulição elevados. Seus pontos de fusão são tão elevados que é mais fácil transformá-los em outras substâncias químicas, por meio de uma decomposição térmica, do que fazer o sólido virar líquido;;
                {`\n`}• Apresentam uma extremidade polar e outra apolar, ou seja, quanto à polaridade, são compostos mistos;;
                {`\n`}• Quando apresentam cátions de elementos da família dos metais alcalinos ou com o amônio (NH4+), são bastante solúveis em água.;{`\n`}
            </Text>
            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://mundoeducacao.uol.com.br/quimica/os-acidos-carboxilicos.htm');
                }}> https://mundoeducacao.uol.com.br/quimica/os-acidos-carboxilicos.htm</Text>
            </Text>

        </View>
    )

}
export default AcidoCarboxilico;