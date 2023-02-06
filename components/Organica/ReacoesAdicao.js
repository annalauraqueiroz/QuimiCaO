import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ReacoesAdicao() {
    return (
        <View style={foStyles.principal}>
            <Text style={foStyles.subtitulo}>Como as reações de adição ocorrem?</Text>
            
            <Text style={foStyles.txtPropriedades}>
            Ocorrem com compostos insaturados, em que uma ligação pi (π) é rompida e outros átomos são adicionados à molécula em uma ligação simples.</Text>
            <Text style={foStyles.txtPropriedades}>
            Genericamente, temos:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Adicao/generica.png")} style={[foStyles.img2,{height:100}]} loading="lazy" />
            </View>
            <Text style={foStyles.txtPropriedades}>
            As principais reações de adição são: </Text>
            <Text style={foStyles.txtPropriedades}> Hidrogenação (adição do hidrogênio), halogenação (adição de halogênios), hidro-halogenação (reage com um halogenidreto (HX), isto é, um composto em que um halogênio está ligado ao hidrogênio, e os átomos desses dois elementos são adicionados à molécula) e hidratação (reage com a água, sendo que um hidrogênio e um grupo hidroxila são adicionados à molécula).</Text>
            <Text style={foStyles.txtPropriedades}>
            Abaixo temos o exemplo de uma hidrogenação: </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Adicao/hidrogenacao.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
                <Text style={foStyles.txtLegenda}>Reação de adição do hidrogênio ao propeno.</Text>
            </View>
            <Text style={foStyles.subtitulo}>Hidratação</Text>
            <Text style={foStyles.txtPropriedades}>Inicialmente temos como reagentes uma molécula da função alceno e uma molécula de água. Como produto da reação, obtivemos uma molécula do tipo álcool.</Text>
            <Text style={foStyles.txtPropriedades}>A adição de água ou a hidratação de uma molécula orgânica ocorre com a quebra de uma insaturação e na presença de ácido; assim, a molécula de água é dividida em duas partes: hidroxila e hidrogênio. Ambos se direcionam para carbonos vizinhos, que antes faziam parte da dupla ou tripla ligação. Observe o exemplo:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Adicao/hidratacao.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>
            
            <Text style={foStyles.subtitulo}>Adição de haletos de hidrogênio (hidro-halogenação)</Text>
            <Text style={foStyles.txtPropriedades}>A reação de adição de haletos de hidrogênio é a inserção de um hidrogênio e um halogênio em uma molécula orgânica insaturada, que perde a insaturação como nos demais casos de reação de adição. Vale ressaltar que, para reações com halogênios, não se usa o flúor, que é muito reativo, então os possíveis reagentes para esse tipo de adição são, em ordem de reatividade: HI, HBr, HCl.</Text>
            <Text style={foStyles.txtPropriedades}>Exemplo:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Adicao/hidrohalogenio.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>
            <Text style={foStyles.txtPropriedades}>Veja que, nesse tipo de adição, nossos reagentes são um hidro-halogênio e uma molécula da função alceno. Como produto obtivemos uma molécula do tipo haleto orgânico, mais especificamente um cloreto de etila.</Text>
            <Text style={foStyles.subtitulo}>Adição de halogênio (halogenação)</Text>
            <Text style={foStyles.txtPropriedades}>Na reação de halogenação, assim como na hidrogenação, acontece a quebra de uma insaturação, isto é, há o rompimento de uma ligação π para que haja a adição de átomos novos à molécula. Nesse caso, são adicionados halogênios, que são átomos da família 7A (I, Br, Cl, F). Todavia, para a reação de adição, não vamos considerar o flúor (F), que, por ser um átomo muito reativo, pode destruir a molécula orgânica original. Para reações de adição de halogênio, não é necessário o uso de catalisadores, pois se trata de uma reação espontânea.</Text>
            <Text style={foStyles.txtPropriedades}>Exemplo:</Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Adicao/halogenacao.png")} style={[foStyles.img2,{height:100}]} loading="lazy"/>
            </View>
            <Text style={foStyles.txtPropriedades}>No exemplo, os reagentes são uma molécula da função alceno e o cloro no estado gasoso. Como produto, temos um composto da função haleto.{`\n`}
            A halogenação de alcinos ou moléculas orgânicas com mais de uma insaturação segue o mesmo processo. Como se trata de uma reação espontânea, enquanto houver reagentes e insaturações na molécula, a reação continuará acontecendo. 
            </Text>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://mundoeducacao.uol.com.br/quimica/reacoes-de-adicao.htm');
                }}> https://mundoeducacao.uol.com.br/quimica/reacoes-de-adicao.htm</Text>
            </Text>
        </View>
    )
}
export default ReacoesAdicao;