import React from 'react'
import { Text, View } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Objetivos() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>Nosso projeto foi feito com o propósito de simplificar o estudo de diversos conteúdos de química que são estudados na universidade.</Text>
            <Text style={foStyles.txtPropriedades}>Buscamos uma alternativa com diversos conteúdos juntos em um só lugar, de livre e rápido acesso ;).</Text>
            <Text style={foStyles.txtPropriedades}>No aplicativo você pode contar com uma tabela periódica interativa, com diversas informações sobre todos os elementos químicos. Além disso, adicionamos conteúdos das outras áreas da química, de forma que estejam facilmente disponíveis e de fácil entendimento.</Text>
            <Text style={foStyles.txtPropriedades}>Cada área é separada por um card na tela inicial, sinta-se livre para navegar por todos eles e descobrir coisas novas ou relembrar conteúdos importantes.</Text>
            <Text style={foStyles.txtPropriedades}>Na área "Quem somos?" você pode encontrar informações sobre a gente e como nos contatar. Bons estudos 😉</Text>
        </View>
    );
}
export default Objetivos;