import React from 'react'
import { Text, Image, View, Linking } from 'react-native'
import { foStyles } from '../../assets/styles/funcoesOrganicasStyles.js';

function ReacoesSubstituicao() {
    return (
        <View style={foStyles.principal}>

            <Text style={foStyles.txtPropriedades}>
                Reações de substituição são processos químicos em que uma substância orgânica é colocada em um mesmo meio (recipiente) que uma substância inorgânica, tendo como resultado a formação de substâncias diferentes, uma inorgânica e as outras orgânicas (dependendo da quantidade de carbonos no reagente).</Text>
            <Text style={foStyles.txtPropriedades}>
                Entre as substâncias orgânicas utilizadas nas reações de substituição estão alcanos, benzenos e haletos orgânicos, enquanto que as substâncias inorgânicas mais utilizadas são ácido sulfúrico (H2SO4), ácido nítrico (HNO3) e substâncias simples halogenadas (flúor-F2, cloro-Cl2, bromo-Br2 ou iodo-I2).</Text>
            <Text style={foStyles.txtPropriedades}>
                Existem algumas reações de substituição em que ambos reagentes são orgânicos. Nesses casos, geralmente, utiliza-se um haleto orgânico (radical ligado a um halogêneo) ou um cloreto de ácido (substância que apresenta um halogêneo ligado a uma carbonila – carbono que realiza uma ligação dupla com oxigênio) como segundo reagente.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                O princípio básico da reação de substituição é a troca mútua de um componente entre os reagentes. Essa troca envolve as seguintes etapas:
            </Text>
            <Text style={foStyles.txtPropriedades}>
                1ª – Quebra da ligação existente entre halogêneos, entre nitrogênio e hidroxila (no HNO3), entre oxigênio e hidroxila (no H2SO4), entre carbono e halogêneo (no haleto orgânico), entre hidrogênio e hidroxila (no H2O).
            </Text>
            <Text style={foStyles.txtPropriedades}>
                2o – Quebra da ligação entre carbono e hidrogênio (no alcano ou no benzeno).
            </Text>
            <Text style={foStyles.txtPropriedades}>
                3o – Formação de novas ligações entre átomos ou grupos que foram inicialmente separados.
            </Text>
            <Text style={foStyles.txtPropriedades}>
                A equação abaixo exemplifica uma reação de substituição:
            </Text>

            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação química que representa uma reação de substituição</Text>
            <Text style={foStyles.txtPropriedades}> É possível observar na equação acima que há o rompimento da ligação entre o carbono e um hidrogênio, bem como da ligação entre os halogêneos. Em seguida, um halogêneo liga-se ao carbono, enquanto o hidrogênio liga-se com o outro halogêneo.</Text>

            <Text style={[foStyles.subtitulo, { fontSize: 27 }]}>Reações de substituição em alcanos</Text>
            <Text style={foStyles.subtitulo}>Halogenação</Text>

            <Text style={foStyles.txtPropriedades}>Reação de substituição em que um alcano (R-CH3) reage com uma substância simples halogenada (Cl2), formando haleto orgânico (R-CH2-Cl) e hidrácido halogenado (HCl), ácido que apresenta hidrogênio ligado a um átomo de halogêneo). A formação desses produtos ocorre em decorrência da saída de um hidrogênio do alcano e de um átomo de halogêneo da substância simples halogenada.</Text>

            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Essa reação deve acontecer na presença de luz.</Text>
                </View>
            </View>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao2.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação representando a halogenação de um alcano qualquer</Text>
            <Text style={foStyles.txtPropriedades}>
                O hidrogênio interage com o átomo de halogêneo, formando um hidrácido halogenado. O outro átomo de halogêneo que restou da substância halogenada liga-se ao alcano, formando um haleto orgânico.
            </Text>
            <Text style={foStyles.subtitulo}>Nitração</Text>
            <Text style={foStyles.txtPropriedades}>
                Reação de substituição em que um alcano (R-CH3) reage com HNO3 (ou HO-NO2), formando nitrocomposto (R-CH2-NO2) e água (H-OH). A formação desses produtos ocorre em decorrência da saída de um hidrogênio do alcano e de um grupo hidroxila (OH) do ácido nítrico.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao3.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação representando a nitração de um alcano qualquer</Text>

            <Text style={foStyles.txtPropriedades}>
                O hidrogênio interage com a hidroxila, formando água, enquanto o grupo nitro (NO2) restante do ácido liga-se ao alcano formando um nitrocomposto.
            </Text>
            <Text style={foStyles.subtitulo}>Sulfonação</Text>
            <Text style={foStyles.txtPropriedades}>
                Reação de substituição em que um alcano (R-CH3) reage com H2SO4(ou HO-SO3H), formando ácido sulfônico (R-CH2-SO3H) e água (H-OH). A formação desses produtos ocorre em decorrência da saída de um hidrogênio do alcano e de um grupo hidroxila (OH) do ácido sulfúrico.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao4.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação representando a sulfonação de um alcano qualquer
            </Text>
            <Text style={foStyles.txtPropriedades}>
                O hidrogênio interage com a hidroxila, formando água, enquanto o grupo SO3H restante do ácido liga-se ao alcano formando o ácido sulfônico.
            </Text>
            <Text style={[foStyles.subtitulo, { fontSize: 27 }]}>Reações de substituição no benzeno</Text>
            <Text style={foStyles.subtitulo}>Halogenação</Text>
            <Text style={foStyles.txtPropriedades}>
                Reação de substituição em que um benzeno (C6H6) reage com uma substância simples halogenada (Cl2), formando um haleto orgânico aromático (C6H6Cl) e um hidrácido halogenado (HCl). A formação desses produtos ocorre em decorrência da saída de um hidrogênio do benzeno e de um átomo de halogêneo da substância simples halogenada.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao5.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação representando a halogenação do benzeno
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Obs.: Essa reação acontece na presença do catalisador cloreto de ferro III (FeCl3).</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                O hidrogênio interage com o átomo de halogêneo, formando hidrácido halogenado, enquanto outro átomo de halogêneo restante da substância halogenada liga-se ao benzeno, formando o haleto orgânico aromático.
            </Text>

            <Text style={foStyles.subtitulo}>Sulfonação</Text>
            <Text style={foStyles.txtPropriedades}>
                Reação de substituição em que um benzeno (C6H6) reage com o ácido sulfúrico (H2SO4), formando um ácido benzenossulfônico (C6H6 SO3H) e água (H-OH). A formação desses produtos ocorre em decorrência da saída de um hidrogênio do benzeno e de um grupo hidroxila (OH) do ácido sulfúrico.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao6.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação representando a sulfonação do benzeno
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Obs.: Essa reação ocorre na presença de calor (Δ).</Text>
                </View>
            </View>
            <Text style={foStyles.txtPropriedades}>
                O hidrogênio interage com a hidroxila, formando água, enquanto o grupo SO3H restante do ácido liga-se ao benzeno, formando o ácido benzenossulfônico.
            </Text>

            <Text style={foStyles.subtitulo}>Nitração</Text>
            <Text style={foStyles.txtPropriedades}>
                Reação de substituição em que o benzeno (C6H6) reage com o ácido nítrico (HNO3), formando nitrobenzeno (C6H6 NO2) e água (H-OH). A formação desses produtos ocorre em decorrência da saída de um hidrogênio do benzeno e de um grupo hidroxila (OH) do ácido nítrico.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao7.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação representando a nitração do benzeno
            </Text>
            <Text style={foStyles.txtPropriedades}>
                O hidrogênio interage com a hidroxila, formando água, enquanto o grupo NO2 restante do ácido liga-se ao benzeno, formando o nitrobenzeno.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Obs.: essa reação ocorre na presença de calor e do ácido sulfúrico, atuando como um catalisador.</Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Alquilação</Text>
            <Text style={foStyles.txtPropriedades}>
                Reação de substituição em que um benzeno (C6H6) reage com um haleto orgânico (R-Br), formando um benzeno ramificado (C6H6R) e um hidrácido halogenado (HBr). A formação desses produtos ocorre em decorrência da saída de um hidrogênio do benzeno e de um radical do haleto orgânico (R).
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao8.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação representando a alquilação do benzeno
            </Text>
            <Text style={foStyles.txtPropriedades}>
                O hidrogênio interage com o átomo de halogêneo, formando um hidrácido halogenado, enquanto o radical restante do haleto liga-se ao benzeno, formando um benzeno ramificado.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Obs.: Essa reação acontece na presença da substância cloreto de alumínio (AlCl3) e de aquecimento.</Text>
                </View>
            </View>

            <Text style={foStyles.subtitulo}>Acilação</Text>
            <Text style={foStyles.txtPropriedades}>
                Reação de substituição em que um benzeno (C6H6) reage com um cloreto de ácido (RCOCl) orgânico, formando uma cetona (C6H6COR) e um hidrácido halogenado (HCl). A formação desses produtos ocorre em decorrência da saída de um hidrogênio do benzeno e do halogêneo do cloreto.
            </Text>
            <View style={foStyles.viewtxtCuriosidade}>
                <Image source={require("../../assets/images/Organica/ReacoesQuimicas/Substituicao/reacao9.png")} style={[foStyles.img2, { height: 100 }]} loading="lazy" />
            </View>
            <Text style={foStyles.txtLegenda}>
                Equação representando a acilação do benzeno
            </Text>
            <Text style={foStyles.txtPropriedades}>
                O hidrogênio interage com o átomo do halogêneo, formando um hidrácido halogenado, enquanto a carbonila restante do cloreto de ácido liga-se ao benzeno, formando uma cetona.
            </Text>
            <View style={foStyles.curiosidade}>
                <Image source={require("../../assets/images/icons/curiosidade.png")} style={foStyles.imgCuriosidade} />
                <View style={foStyles.viewtxtCuriosidade}>
                    <Text style={foStyles.txtCuriosidade}>Obs.: Essa reação acontece na presença da substância cloreto de alumínio e de aquecimento.</Text>
                </View>
            </View>

            <Text style={foStyles.txtPropriedades}>Conteúdo disponível em:
                <Text onPress={() => {
                    Linking.openURL('https://brasilescola.uol.com.br/quimica/reacoes-substituicao.htm');
                }}> https://brasilescola.uol.com.br/quimica/reacoes-substituicao.htm</Text>
            </Text>
        </View>
    )
}
export default ReacoesSubstituicao;