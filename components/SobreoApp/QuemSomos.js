import React from 'react'
import { Text, View, Image } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function QuemSomos() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>Somos duas estudantes de Engenharia Química na Universidade Federal de Alfenas</Text>
           <View style={foStyles.images}>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Sobre/anna.png")} style={[foStyles.img2, { height: 130 }]} loading="lazy" />
                </View>
                <View style={foStyles.viewtxtCuriosidade}>
                    <Image source={require("../../assets/images/Sobre/carol.png")} style={[foStyles.img2, { height: 130 }]} loading="lazy" />
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>Caso queira entrar em contato para alguma sugestão ou para informar algum problema encontrado, envie um e-mail para:</Text>
            <Text style={foStyles.txtPropriedades}>anna.queiroz@sou.unifal-mg.edu.br ou</Text>
            <Text style={foStyles.txtPropriedades}>maria.marcassa@sou.unifal-mg.edu.br</Text>
        </View>
    );
}
export default QuemSomos;