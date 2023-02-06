import React from 'react'
import { Text, Linking, View } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function TiposDeAtomos() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.txtPropriedades}>
                Os isótopos, isóbaros e isótonos são classificações dos átomos dos elementos químicos presenta na tabela periódica, de acordo com a quantidade de prótons, elétrons e nêutrons presentes em cada um deles.

                {`\n`}Assim, os isótopos são elementos que apresentam mesmo número de prótons, os isóbaros possuem mesmo número de massa, enquanto que os isótonos possuem mesmo número de nêutrons.

                {`\n`}Importante destacar que os prótons (p) possuem carga positiva, os elétrons (e), carga negativa e os nêutrons (n), não apresentam carga (neutralidade) e de acordo com a estrutura dos átomos, os prótons e os nêutrons estão concentrados no núcleo, enquanto que os elétrons estão localizados na eletrosfera, ou seja, em volta do núcleo.</Text>

            <Text style={foStyles.subtitulo}>Isótopos</Text>
            <Text style={foStyles.txtPropriedades}>Os isótopos (isotopia) são átomos de um mesmo elemento químico os quais apresentam o mesmo número atômico (Z) e diferentes números de massa (A).</Text>

            <Text style={foStyles.subtitulo}>Isóbaros</Text>
            <Text style={foStyles.txtPropriedades}>Os isóbaros (isobaria) são átomos de distintos elementos químicos os quais apresentam o mesmo número de massa (A) e diferentes números atômicos (Z).</Text>


            <Text style={foStyles.subtitulo}>Isótonos</Text>
            <Text style={foStyles.txtPropriedades}>Os isótonos (isotonia) são átomos de elementos químicos distintos os quais apresentam diferentes números atômicos (Z), diferentes números de massa (A) e o mesmo número de nêutrons.</Text>
            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://www.todamateria.com.br/isotopos-isobaros-e-isotonos/');
                }}> https://www.todamateria.com.br/isotopos-isobaros-e-isotonos/</Text>
            </Text>
        </View>
    )
}
export default TiposDeAtomos;