import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Classificacao() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.subtitulo}> Definição</Text>
            <Text style={foStyles.txtPropriedades}> Soluções são misturas homogêneas que apresentam uma única fase. Por exemplo, determinada massa de cloreto de sódio, ao ser completamente diluída em certo volume de água, forma uma solução.</Text>
            <Text style={foStyles.subtitulo}> Componentes</Text>
            <Text style={foStyles.txtPropriedades}> 1. SOLUTO: é aquele que está presente em menor proporção, em massa.</Text>
            <Text style={foStyles.txtPropriedades}> 2. SOLVENTE: é aquele que está presente em maior proporção, em massa.</Text>
           
            <Text style={foStyles.txtPropriedades}> Sendo que a mistura homogênea entre soluto e solvente recebe o nome de solução. Nem toda solução apresentará a água como solvente, conforme pode se observar abaixo:</Text>
            <Text style={foStyles.txtPropriedades}> ● Ao misturarmos 1g de cloreto de sódio (NaCl) em 1 litro de HO, teremos uma solução, na qual o NaCl é o soluto e a água é o solvente</Text>
            <Text style={foStyles.txtPropriedades}> ● O álcool comercial comprado em supermercados trata-se de uma mistura homogênea entre álcool e água, geralmente constituída de 92% de álcool e 8% de água. Nesse caso, o álcool é o solvente e a água é o soluto.</Text>

            <Text style={foStyles.subtitulo}> Classificações</Text>
            <Text style={foStyles.txtPropriedades}> Uma solução pode ser classificada a partir de várias de suas propriedades, sendo de maior importância as classificações abaixo:</Text>
            <Text style={foStyles.txtPropriedades}> 1. Quanto ao estado físico: Poderemos ter uma solução em qualquer estado físico da matéria sendo assim:</Text>
            <Text style={foStyles.txtPropriedades}>a. Soluções Sólidas: recebem o nome de ligas, e geralmente tratam-se de uma mistura homogênea entre metais.Por exemplo, o ouro 18 quilates é uma mistura constituída por ouro, cobre e prata. Já o bronze é uma mistura dos metais zinco e estanho.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}b. Soluções Líquidas: podem ser de três naturezas distintas:</Text>
            <Text style={foStyles.txtPropriedades}>i. Sólidos dissolvidos em líquidos: por exemplo, água do mar é uma solução que apresenta vários solutos, entre eles, cloreto de sódio, cloreto de magnésio (MgCl) e bicarbonatos (HCO).</Text>
            <Text style={foStyles.txtPropriedades}>ii. Líquidos dissolvidos em líquidos: por exemplo, temos o combustível denominado gasolina, que é uma mistura de hidrocarbonetos derivados do petróleo, e álcool, em uma proporção aproximada de 80% para 20%.</Text>
            <Text style={foStyles.txtPropriedades}>iii. Gases dissolvidos em líquidos: por exemplo, em um aquário deve-se diluir gás oxigênio (O) na água, sendo este gás o responsável pela respiração dos peixes. Sendo assim, caso o aquário não permaneça aberto, é necessário injetar-se regularmente este gás por meio de um cilindro.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`}c. Soluções Gasosas: são aquelas constituídas apenas por gases, sendo que toda mistura entre gases apresenta uma única fase, sendo, portanto, uma solução. Por exemplo, o ar atmosférico é uma mistura constituída por 78% de gás nitrogênio (N), 21% gás oxigênio e 1% de outros gases.</Text>
            <Text style={foStyles.txtPropriedades}>{`\n`} 2. Quanto à natureza das partículas dispersas: De acordo com a natureza do soluto, podemos ter dois tipos de soluções:</Text>
            <Text style={foStyles.txtPropriedades}>a. Soluções Iônicas: são aquelas que apresentam íons dissolvidos. São chamadas também de soluções eletrolíticas, pois conduzem corrente elétricas. Por exemplo, ao diluirmos 1g de sal de cozinha (NaCl) em água, teremos uma solução que apresenta os íons Na e Cl dissolvidos, de acordo com o esquema abaixo:</Text>
           
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/solucoes-ionicas.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>

            <Text style={foStyles.txtPropriedades}>b. Soluções moleculares: são aquelas formadas por moléculas dissolvidas. São também chamadas de não eletrolíticas, pois não conduzem corrente elétrica. Por exemplo, ao repetirmos o procedimento anterior, mas desta vez utilizando o açúcar (CHO) ao invés do sal, perceberemos (de acordo com a equação abaixo) que não há separação do soluto, portanto, trata-se de uma solução constituída por moléculas dissolvidas, molecular.</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/SolucoesEMisturas/solucoes-mol.png")} style={[foStyles.img2, { height: 45 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>{`\n`} 3. Quanto à proporção entre soluto e solvente: De acordo com as quantidades em massa de soluto 
            e solvente presente na solução, poderemos ter quatro possibilidades de classificação. Para compreendê-las, precisamos conhecer o conceito de 
            coeficiente de solubilidade (CS). O CS representa a quantidade máxima de determinado soluto que poderemos dissolver em 100 g de água, em temperatura ambiente. 
            Assim, afirmar que CS NaCl = 37g/100g de HO, significa que a cada 100g de água poderemos dissolver em temperatura ambiente, o máximo de 37g de NaCl. 
            Agora, poderemos compreender as classificações mais simples possíveis para uma solução quanto à proporção entre soluto e solvente.</Text>
          
            <Text style={foStyles.txtPropriedades}>a. Soluções insaturadas: são aquelas que possuem uma concentração de soluto menor do que a de uma solução saturada.</Text>
            <Text style={foStyles.txtPropriedades}>b. Soluções saturadas: são aquelas formadas pelo máximo de soluto permitido, em relação ao seu coeficiente de solubilidade. Por exemplo, uma solução constituída por 37g de NaCl em 100g HO.</Text>
            <Text style={foStyles.txtPropriedades}>c. Soluções supersaturadas: são aquelas em que a concentração do soluto é maior do que a da solução saturada.</Text>
          


     

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.infoescola.com/quimica/classificacao-de-solucoes/');
                }}> https://www.infoescola.com/quimica/classificacao-de-solucoes/</Text>
            </Text>
        </View>
    );
}
export default Classificacao;