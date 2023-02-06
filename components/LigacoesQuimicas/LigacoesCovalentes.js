import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function LigacoesCovalentes() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}> A ligação covalente é um tipo de ligação química que ocorre entre átomos de hidrogênio, ametais e semimetais, com a finalidade de ficarem estáveis. A estabilidade eletrônica é alcançada quando o átomo fica com oito elétrons na sua camada de valência (última camada eletrônica), ficando com a configuração de um gás nobre, sendo que a única exceção é o hidrogênio, que fica estável com apenas dois elétrons.</Text>
            <Text style={foStyles.txtPropriedades}> Portanto, todos os átomos dos elementos mencionados (hidrogênio, ametais e semimetais) possuem a tendência de receber elétrons para ficarem estáveis. Visto que não é possível que todos recebam elétrons, senão pelo menos um não ficaria estável, então os átomos envolvidos na ligação covalente compartilham um ou mais pares de elétrons.</Text>
            <Text style={foStyles.txtPropriedades}> Veja como isso ocorre:</Text>
            <Text style={foStyles.txtPropriedades}> Uma molécula de cloreto de hidrogênio (HCl) é formada por uma ligação covalente entre um átomo de hidrogênio e um átomo de cloro.</Text>
            <Text style={foStyles.txtPropriedades}> Conforme se pode ver abaixo, o átomo do hidrogênio possui somente um elétron na sua camada eletrônica, precisando receber mais um elétron para ficar estável:</Text>


            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesCovalentes/hidrogenio.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Átomo de hidrogênio</Text>

            <Text style={foStyles.txtPropriedades}> Por outro lado, o cloro possui 17 elétrons no estado fundamental, sendo que, na sua camada de valência, ele tem sete elétrons. Isso significa que ele precisa receber mais um elétron para ficar estável:</Text>



            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesCovalentes/cloro.png")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Átomo de cloro</Text>


            <Text style={foStyles.txtPropriedades}> Assim, visto que tanto o hidrogênio quanto o cloro precisam receber um elétron, eles compartilham um par de elétrons, ficando ambos estáveis</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesCovalentes/molecula.png")} style={[foStyles.img2, { height: 200 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}> Veja que se formou uma molécula. Isso sempre acontece nas ligações covalentes, ou seja, formam-se unidades isoladas e de grandeza limitada. Por isso, as ligações covalentes também são chamadas de moleculares.</Text>
            <Text style={foStyles.txtPropriedades}> Esse tipo de ligação pode ocorrer entre átomos diferentes, como no exemplo do HCl, ou entre átomos de um mesmo elemento, como os exemplos abaixo. Ao analisá-los, observe que essa maneira de representar a ligação, em que se representam os elétrons da camada eletrônica por bolinhas ou “x”, é conhecida como fórmula eletrônica de Lewis.</Text>
            <Text style={foStyles.txtPropriedades}> Outra forma de representar esse tipo de ligação mostrada abaixo é a fórmula estrutural plana, em que cada par de elétrons compartilhados é simbolizado por um traço:</Text>
            <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesCovalentes/ligacoes.png")} style={[foStyles.img2, { height: 420 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.subtitulo}>Propriedades dos compostos Covalentes e Moleculares</Text>
            <Text style={foStyles.txtPropriedades}> A análise das propriedades físicas e químicas dos compostos que realizam ligações covalentes (por compartilhamento de elétrons) nos mostra que existem grandes diferenças entre esses materiais. Mas, antes de vermos essas características em si, vejamos qual é a diferença entre substâncias moleculares e covalentes.</Text>
            <Text style={foStyles.txtPropriedades}> As substâncias moleculares são aquelas que se formam quando átomos se ligam por meio de ligações covalentes, originando moléculas de número determinado.</Text>
            <Text style={foStyles.txtPropriedades}> Entretanto, a ligação covalente pode originar também compostos em uma estrutura de rede com um número muito grande e indeterminado de átomos, que são macromoléculas. Tais substâncias são denominadas de compostos covalentes ou sólidos de rede covalente. Alguns exemplos desses compostos são: diamante (C), grafita (C), dióxido de silício (SiO2) e Carbeto de silício (SiC).</Text>
            <Text style={foStyles.txtPropriedades}> Agora, vejamos as suas principais propriedades:</Text>
            <Text style={foStyles.subtitulo}>Estado Físico em temperatura ambiente </Text>

            <Text style={foStyles.txtPropriedades}> Nas condições ambientes, os compostos moleculares e covalentes são encontrados nos três estados físicos (sólido, líquido e gasoso).</Text>
            <Text style={foStyles.txtPropriedades}> Exemplos:</Text>
            <Text style={foStyles.txtPropriedades}> ● Sólido: açúcar (sacarose), sílica (areia), diamante, grafita;</Text>
            <Text style={foStyles.txtPropriedades}> ● Líquido: água, acetona, etanol;</Text>
            <Text style={foStyles.txtPropriedades}> ● Gasoso: Sulfeto de hidrogênio, gás cloro, gás bromo, gás hidrogênio.</Text>
            <Text style={foStyles.subtitulo}>Ponto de Fusão e Ebulição </Text>

            <Text style={foStyles.txtPropriedades}> Em geral, os pontos de fusão e ebulição dessas substâncias são menores que os das substâncias iônicas.
                As substâncias covalentes apresentam as temperaturas de ebulição mais elevadas que as moleculares, sempre superiores a 1000ºC. Isso ocorre porque como suas moléculas estão unidas mais intensamente, formando as redes cristalinas, é preciso fornecer mais energia para fazê-las mudar de estado.
            </Text>
            <Text style={foStyles.txtPropriedades}> Dois fatores interferem nos pontos de ebulição e fusão dos compostos covalentes e moleculares: a massa molar e a força intermolecular.
            </Text>
            <Text style={foStyles.txtPropriedades}> Quanto maior a massa molar, maior a inércia da molécula e, consequentemente, maior será o ponto de ebulição e de fusão. Se as massas molares forem aproximadas, olhamos as forças intermoleculares. A força intermolecular de maior intensidade é a da ligação de hidrogênio, levando a um maior ponto de ebulição e fusão. A intermediária é a dipolo permanente e a mais fraca, que leva a um menor ponto de ebulição e fusão, é a dipolo induzido.
            </Text>

            <Text style={foStyles.subtitulo}>Corrente elétrica </Text>
            <Text style={foStyles.txtPropriedades}> Em suas formas puras, tanto líquidos como sólidos não conduzem corrente elétrica.
            </Text>
            <Text style={foStyles.txtPropriedades}> Uma exceção é a grafita, que conduz corrente elétrica na forma sólida, porque seus elétrons das ligações duplas fazem ressonância e, por isso, possuem certa mobilidade.
            </Text>
            <Text style={foStyles.subtitulo}>Solubilidade </Text>
            <Text style={foStyles.txtPropriedades}> Polares se dissolvem em polares e apolares se dissolvem em apolares.
            </Text>
            <Text style={foStyles.subtitulo}>Tenacidade </Text>
            <Text style={foStyles.txtPropriedades}> A resistência das substâncias covalentes ao impacto ou choque mecânico é baixa. Em geral, são sólidos quebradiços, como mostra o caso do vidro, que é formado por silicatos de sódio e de cálcio.
            </Text>

            <Text style={foStyles.subtitulo}>Dureza</Text>
            <Text style={foStyles.txtPropriedades}> Em geral, possuem elevada dureza. Com exceção da grafita, porque seus átomos de carbono encontram-se ligados a outros três átomos de carbono, formando placas hexagonais com certa mobilidade, fazendo com que ela seja macia. Devido a isso, ela é até mesmo usada como lubrificante.
            </Text>
            <Text style={foStyles.subtitulo}>Ligações pelo modelo do orbital molecular</Text>
            <Text style={foStyles.txtPropriedades}> Uma ligação A = B forma-se pela interpenetração (mistura) de um orbital semicheio do átomo A com um orbital semicheio do átomo B, que possuem elétrons de spins contrários.
            </Text>
            <Text style={foStyles.txtPropriedades}>Desta interpenetração, resulta um orbital molecular contendo um par eletrônico compartilhado.
            </Text>

            <Text style={foStyles.subtitulo}>Ligação Sigma (σ) e Pi (π)</Text>
            <Text style={foStyles.txtPropriedades}>A interpenetração entre dois orbitais atômicos, resultando num obital molecular, pode se dar de forma linear, quando eles pertencem a um mesmo eixo (ligação sigma) ou pode se dar de forma paralela, quando eles pertencem a eixos paralelos (ligação pi).
            </Text>
            <Text style={foStyles.txtPropriedades}>A ligação sigma se estabelece quando dois átomos se ligam por uma ligação simples, uma ligação dupla ou uma ligação tripla.
            </Text>
            <Text style={foStyles.txtPropriedades}>A ligação pi se estabelece quando dois átomos se ligam por uma ligação dupla ou uma tripla.
            </Text>
            <Text style={foStyles.txtPropriedades}>As ligações pi são dependentes das ligações sigma. Isto quer dizer que uma ou duas ligações pi sempre estão acompanhadas de uma ligação sigma.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Temos, então:
                        {`\n`}Ligação simples = uma ligação sigma
                        {`\n`}Ligação dupla = uma ligação sigma e uma ligação pi
                        {`\n`}Ligação tripla = duas ligações pi e uma sigma
                    </Text>
                </View>
            </View>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/LigacoesQuimicas/LigacoesCovalentes/formacaoligacoes.gif")} style={[foStyles.img2, { height: 160 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Formação de ligações sigma e pi</Text>


            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://brasilescola.uol.com.br/quimica/propriedades-dos-compostos-covalentes-moleculares.htm');
                }}> https://brasilescola.uol.com.br/quimica/propriedades-dos-compostos-covalentes-moleculares.htm</Text>
            </Text>
        </View>
    );
}
export default LigacoesCovalentes;