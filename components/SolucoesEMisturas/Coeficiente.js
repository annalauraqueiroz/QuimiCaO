import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Coeficiente() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}> Denomina-se de coeficiente de solubilidade a quantidade de soluto (material que será dissolvido) que se dissolve em certa quantidade de solvente a uma determinada temperatura. Assim, quando vamos preparar uma solução, temos que levar em consideração três critérios:</Text>
            <Text style={foStyles.txtPropriedades}> ● quantidade de solvente que será utilizada.</Text>
            <Text style={foStyles.txtPropriedades}> ● temperatura do solvente;</Text>
            <Text style={foStyles.txtPropriedades}> ● quantidade de soluto que será utilizada.</Text>

            <Text style={foStyles.txtPropriedades}> Para preparar uma solução, também é importante conhecer o coeficiente de solubilidade do solvente para o soluto. Por exemplo, se desejamos preparar uma solução que apresente cloreto de sódio e água, devemos saber que o coeficiente de solubilidade da água a 20 °C é de: 36 gramas de NaCl/ 100 gramas de água.</Text>
            <Text style={foStyles.txtPropriedades}> O coeficiente de solubilidade acima indica que, se tivermos 100 gramas de água a 20 °C, ela conseguirá dissolver, no máximo, 36 gramas de NaCl. Isso quer dizer que, se adicionarmos 37 gramas de NaCl a 100 gramas de água a 20 °C, 36 gramas dissolver-se-ão e 1 grama de NaCl não se dissolverá. Por isso, a solução deverá ser preparada com apenas 36 gramas de NaCl.</Text>
            <Text style={foStyles.txtPropriedades}>Ao conhecer o coeficiente de solubilidade do solvente em relação a um determinado soluto, podemos evitar perdas ou desperdício de material. Além disso, podemos ainda saber exatamente o tipo de solução que estamos preparando.</Text>
            <Text style={foStyles.txtPropriedades}>Em relação ao coeficiente de solubilidade, as soluções podem ser classificadas em insaturadas, saturadas e supersaturadas.</Text>
           
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Quando a quantidade de soluto dissolvida em uma solução insaturada está PRÓXIMA do limite descrito pelo coeficiente de solubilidade, dizemos que a solução é concentrada. Por exemplo: utilizando o coeficiente de solubilidade do NaCl indicado anteriormente, se adicionarmos 30 gramas de NaCl em 100 gramas de água a 20 °C, estaremos preparando uma solução concentrada.</Text>
                </View>
            </View>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Quando a quantidade de soluto dissolvida em uma solução insaturada está DISTANTE do limite descrito pelo coeficiente de solubilidade (muito solvente e pouco soluto), dizemos que a solução é diluída. Por exemplo, utilizando o coeficiente de solubilidade do NaCl indicado anteriormente, se adicionarmos 10 gramas de NaCl em 100 gramas de água a 20 °C, estaremos preparando uma solução diluída.</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>Veja um exemplo de como determinar a classificação de uma solução pela análise do coeficiente de solubilidade:</Text>
          
            <Text style={[foStyles.txtPropriedades,{color: 'black'}]}>Sabendo que o coeficiente de solubilidade do KNO3 em água é de 202 gramas de KNO3/ 100 gramas de água a 90 oC, qual será a classificação de uma solução que foi preparada adicionando-se 707 gramas do KNO3 em 350 gramas de água?</Text>
            <Text style={[foStyles.txtPropriedades,{color: 'black'}]}>Analisando os dados do exercício, temos que 100 gramas de H2O dissolvem 202 gramas de KNO3. Todavia, a questão indica que serão utilizados 350 gramas de H2O, quantidade que é três vezes e meia a quantidade de água indicada no coeficiente de solubilidade (100 gramas). Assim, os 350 gramas de água dissolverão três vezes e meia a quantidade de KNO3. Multiplicando 202 por 3,5, temos o valor de 707 gramas. Como o enunciado indica que serão dissolvidos 707 gramas, a solução formada será saturada.</Text>
            <Text style={[foStyles.txtPropriedades,{color: 'black'}]}>Sempre podemos resolver um exercício sobre coeficiente de solubilidade por meio de uma regra de três. No caso anterior, para descobrir se 350 gramas de água dissolvem ou não 707 gramas de KNO3, bastava relacionar o coeficiente da seguinte forma:</Text>
           
            <Text style={[foStyles.txtPropriedades,{color: 'black', alignSelf:'center'}]}>100 gramas de H2O ------------ 202 gramas de KNO3</Text>
            <Text style={[foStyles.txtPropriedades,{color: 'black', alignSelf:'center'}]}>350 gramas de H2O ------------ x gramas de KNO3</Text>
            
            <Text style={[foStyles.txtPropriedades,{color: 'black', alignSelf:'center'}]}>100.x = 350.202</Text>
            <Text style={[foStyles.txtPropriedades,{color: 'black', alignSelf:'center'}]}>100.x = 70700</Text>
            <Text style={[foStyles.txtPropriedades,{color: 'black', alignSelf:'center'}]}>x = 707 gramas, resultando que indica que as 350 gramas de água dissolvem 707 g de KNO3, ou seja, a solução é saturada.</Text>
           


     

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.manualdaquimica.com/fisico-quimica/coeficiente-solubilidade.htm');
                }}> https://www.manualdaquimica.com/fisico-quimica/coeficiente-solubilidade.htm</Text>
            </Text>
        </View>
    );
}
export default Coeficiente;