import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function Equipamentos() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>Durante as aulas no Laboratório você terá contato com diversos equipamentos e vidrarias. Para isso, temos essa seção para facilitar na identificação de todos esses.</Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>É muito importante estar atento aos procedimentos para que nenhum equipamento seja quebrado ou desregulado. Alguns, inclusive, se manuseados de forma incorreta podem colocar sua vida em risco.
                    </Text>
                </View>
            </View>
            <Text style={foStyles.subtitulo}>VIDRARIAS</Text>
            <Text style={foStyles.txtPropriedades}>Tubo de ensaio: utilizado para realização de reações químicas em pequena escala, principalmente testes qualitativos. Podem ser aquecidos em movimentos circulares diretamente
                sob a chama do Bico de Bunsen. Tubos de ensaio devem ser aquecidos de forma que a extremidade aberta não esteja virada para uma pessoa.</Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/tubo.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Tubo de ensaio de laboratório</Text>

            <Text style={foStyles.txtPropriedades}>Béquer: utilizado para dissolver uma substância em outra, preparar soluções em geral, aquecer
                líquidos, dissolver substâncias sólidas e realizar reações.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/bequer.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Béquer</Text>

            <Text style={foStyles.txtPropriedades}>Erlenmeyer: devido ao seu gargalo estreito, é utilizado para dissolver substâncias, agitar
                soluções e aquecer líquidos sobre a tela de amianto. Integra várias montagens como filtrações,
                destilações e titulações.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/erlenmeyer.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Erlenmeyer</Text>

            <Text style={foStyles.txtPropriedades}>Kitassato: frasco com saída lateral, utilizados em "filtrações a vácuo", ou seja, nas quais é
                provocado um vácuo parcial dentro dos recipiente para acelerar o processo de filtração.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/kitassato.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Kitassato</Text>

            <Text style={foStyles.txtPropriedades}>Funil comum: utilizado em filtrações simples, com o auxílio de um papel de filtro, e na
                transferência de líquidos de um recipiente para outro.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/funil.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Funil comum</Text>


            <Text style={foStyles.txtPropriedades}>Balão de fundo chato: utilizado para aquecer brandamente líquidos ou soluções, realizar
                reações com desprendimentos de gás e armazenar líquidos ou soluções.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/balaochato.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Balão de fundo chato</Text>

            <Text style={foStyles.txtPropriedades}>Balão de fundo redondo: utilizado para aquecer líquidos ou soluções e realizar reações em
                geral. Também utilizado em sistemas de refluxo e evaporação a vácuo, acoplado ao Rotavapor.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/balaoredondo.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Balão de fundo redondo</Text>

            <Text style={foStyles.txtPropriedades}>Balão volumétrico: utilizado para preparar e diluir soluções com volumes precisos e prefixados.
                Não pode ser aquecido, pois possui grande precisão de medida. Equipamento calibrado.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/balaovolumetrico.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Balão volumétrico</Text>

            <Text style={foStyles.txtPropriedades}>Proveta: utilizada para medir volumes de líquidos sem grande precisão.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/proveta.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Proveta</Text>

            <Text style={foStyles.txtPropriedades}>Vidro de relógio: utilizado normalmente na pesagem e no transporte de substâncias químicas.
                É também utilizado para cobrir, por exemplo, cápsula de porcela de modo a proteger os sólidos
                e evitar perda de reagentes.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/vidroderelogio.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Vidro de relógio</Text>

            <Text style={foStyles.txtPropriedades}>Pipeta graduada: utilizada para medida de volumes variáveis de líquidos com boa precisão
                dentro de uma determinada escala. Não pode ser aquecida. Equipamento calibrado.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/pipetagraduada.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Pipeta graduada</Text>

            <Text style={foStyles.txtPropriedades}>Pipeta volumétrica: utilizada para medir, com grande precisão, um volume fixo de líquidos. Não
                pode ser aquecida. Equipamento calibrado.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/pipetavolumetrica.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Pipeta volumétrica</Text>

            <Text style={foStyles.txtPropriedades}>Bureta: utilizada para medida precisa de volume de líquidos. Permite o escoamento controlado
                de líquido através da torneira. Equipamento utilizado em titulações. Não pode ser aquecida.
                Equipamento calibrado.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/bureta.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Bureta</Text>

            <Text style={foStyles.txtPropriedades}>Funil de separação/decantação: utilizado para separar líquidos imiscíveis e na extração
                líquido-líquido. Também é conhecido como funil de bromo.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/funilseparacao.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Funil de separação/decantação</Text>

            <Text style={foStyles.txtPropriedades}>Condensador: utilizado para condensar os vapores produzidos no processo de destilação ou
                aquecimento sob refluxo. Existem condensadores de Liebig ou de tubo reto, de bolas e de
                serpentina.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/condensador.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Condensador</Text>

            <Text style={foStyles.txtPropriedades}>Bastão de vidro/baqueta: utilizado para agitação de soluções e de líquidos, na dissolução de
                sólidos, no auxílio para transferência de líquidos de um recipiente para outro, etc.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/bastao.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Bastão de vidro/baqueta</Text>

            <Text style={foStyles.txtPropriedades}>Placa de Petri: utilizada para secagem de substâncias. É um recipiente raso com tampa. Em
                Biologia são utilizadas para desenvolvimento de culturas de fungos ou bactérias.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/placadepetri.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Placa de Petri</Text>

            <Text style={foStyles.txtPropriedades}>Tubo de Thiele: utilizado na determinação do ponto de fusão das substâncias. Existem
                equipamentos eletrônicos para este fim.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/tubodethiele.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Tubo de Thiele</Text>

            <Text style={foStyles.txtPropriedades}>Dessecador: utilizado para guardar substâncias em atmosfera com baixa umidade. Contém
                substâncias higroscópicas, ou seja, que absorvem a umidade do meio.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/dessecador.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Dessecador</Text>

            <Text style={foStyles.subtitulo}>PORCELANA
            </Text>
            <Text style={foStyles.txtPropriedades}>Funil de Büchner: utilizado em filtrações a vácuo em conjunto com o kitassato.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/funildebuchner.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Funil de Büchner</Text>

            <Text style={foStyles.txtPropriedades}>Cadinho: utilizado para calcinações de substâncias, no aquecimento e fusão de sólidos a altas
                temperaturas. Pode também ser constituído de ferro, prata, platina, entre outros.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/cadinho.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Cadinho</Text>

            <Text style={foStyles.txtPropriedades}>Almofariz e pistilo: utilizado para trituração e pulverização de sólidos. Pode também ser
                constituído de ágata.
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/almofariz.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Almofariz e pistilo</Text>

            <Text style={foStyles.subtitulo}>UTENSÍLIOS GERAIS
            </Text>
            <Text style={foStyles.txtPropriedades}>Tela de amianto: tela metálica (de aço), com o centro recoberto em amianto ou cerâmica, utilizada para distribuir uniformemente o calor recebido da chama do bico de Bunsen para todo o recipiente.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/teladeamianto.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Tela de amianto</Text>

            <Text style={foStyles.txtPropriedades}>Argola: utilizado para suporte de funil de vidro em montagens de filtração, decantação,
                etc.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/argola.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Argola</Text>

            <Text style={foStyles.txtPropriedades}>Garra metálica: utilizada para fixar os diversos equipamentos, mantendo a montagem estável.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/garra.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Garra metálica</Text>

            <Text style={foStyles.txtPropriedades}>Pinça de madeira: utilizada para segurar tubos de ensaio.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/pinca.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Pinça de madeira</Text>

            <Text style={foStyles.txtPropriedades}>Suporte para tubos de ensaio: utilizado para sustentação de tubos de ensaio.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/suportetubos.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Suporte para tubos de ensaio</Text>

            <Text style={foStyles.txtPropriedades}>Tripé: utilizado para dar sustentação à tela de amianto ou ao triângulo de porcelana.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/tripe.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Tripé</Text>

            <Text style={foStyles.txtPropriedades}>Suporte universal: utilizado para dar sustentação aos materiais de laboratório.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/suporte.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Suporte universal</Text>

            <Text style={foStyles.txtPropriedades}>Pinça metálica: utilizado para segurar objetos aquecidos.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/pincametalica.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Pinça metálica</Text>

            <Text style={foStyles.txtPropriedades}>Pisseta ou frasco lavador: utilizado para lavagem de diversos materiais. Normalmente contém
                água destilada, mas outros solventes podem também ser armazenados.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/pisseta.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Pisseta ou frasco lavador</Text>

            <Text style={foStyles.txtPropriedades}>Espátula: utilizada para transferência de substâncias sólidas.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/espatula.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Espátula</Text>

            <Text style={foStyles.txtPropriedades}>Pêra: utilizado para encher pipetas por sucção, principalmente no caso de líquidos voláteis, irritantes ou tóxicos
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/pera.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Pêra</Text>

            <Text style={foStyles.subtitulo}>EQUIPAMENTOS
            </Text>
            <Text style={foStyles.txtPropriedades}>Agitador magnético: utilizado para agitar soluções e líquidos. Podem ser só de agitação e/ou com aquecimento.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/agitador.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Agitador magnético</Text>

            <Text style={foStyles.txtPropriedades}>Manta aquecedora: utilizado para aquecimento de líquidos inflamáveis contidos em um balão defundo redondo.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/manta.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Manta aquecedora</Text>

            <Text style={foStyles.txtPropriedades}>Balança: utilizado para pesagem.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/balanca.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Balança</Text>

            <Text style={foStyles.txtPropriedades}>Centrífuga: utilizado para separação de misturas imiscíveis do tipo sólido-líquido, quando o sólido se encontra finamente disperso no líquido
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/centrifuga.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Centrífuga</Text>

            <Text style={foStyles.txtPropriedades}>Estufa: utilizado para secagem de materiais em geral, principalmente vidrarias.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/estufa.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Estufa</Text>

            <Text style={foStyles.txtPropriedades}>Capela: utilizada para manusear substâncias gasosas, tóxicas, irritantes, etc.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/capela.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Capela</Text>

            <Text style={foStyles.txtPropriedades}>Bomba de vácuo: utilizada para reduzir a pressão no interior de um recipiente.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/bomba.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Bomba de vácuo</Text>

            <Text style={foStyles.txtPropriedades}>Bico de Bunsen: é utilizado como fonte de calor destinada ao aquecimento de materiais não
                inflamáveis. Possui como combustível normalmente o G.L.P (butano e propano) e como
                comburente o gás oxigênio do ar atmosférico que em proporção otimizada permite obter uma
                chama de alto poder energético.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Laboratorio/bulsen.png")} style={[foStyles.img2, { height: 60 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>Bico de Bunsen</Text>


            <Text style={foStyles.txtPropriedades}>Referências bibliográficas:{`\n`}
            TRINDADE, Diamantino Fernandes; OLIVEIRA, Fausto Pinto de; BANUTH, Gilda Siqueira Lopes; BISPO, Jurandyr Gutierrez. Química básica experimental. 4. ed. São Paulo: Ícone, 2010.
              
            </Text>
        </View>
    );
}
export default Equipamentos;