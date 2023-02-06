import FuncoesOrganicas from './Organica/FuncoesOrganicas.js'
import ComposicaoDoAtomo from '../components/Estrutura Atomica/ComposicaodoAtomo.js'
import Isomeria from './Organica/Isomeria.js';
import ReacoesQuimicas from './Organica/ReacoesQuimicas.js';
import TiposDeAtomos from '../components/Estrutura Atomica/TiposDeAtomos.js';
import EstruturaDoAtomo from '../components/Estrutura Atomica/EstruturaDoAtomo.js';
import NumerosQuanticos from '../components/Estrutura Atomica/NumerosQuanticos.js';
import ModelosAtomicos from './EstruturaAtomica/ModelosAtomicos.js';
import LigacoesIonicas from '../components/LigacoesQuimicas/LigacoesIonicas.js';
import LigacoesCovalentes from '../components/LigacoesQuimicas/LigacoesCovalentes.js';
import LigacoesMetalicas from '../components/LigacoesQuimicas/LigacoesMetalicas.js';
import EquilibrioQuimico from '../components/EquiibrioQuimico/EquilibrioQuimico.js';
import ConstanteEquilibrio from '../components/EquiibrioQuimico/ConstanteEquilibrio.js';
import LeChatelier from '../components/EquiibrioQuimico/LeChatelier.js';
import Classificacao from '../components/SolucoesEMisturas/Classificacao.js';
import Coeficiente from '../components/SolucoesEMisturas/Coeficiente.js';
import PPM from '../components/SolucoesEMisturas/PPM.js';
import SolucaoTampao from '../components/SolucoesEMisturas/SolucaoTampao.js';
import FuncoesInorganicas from './Inorganica/FuncoesInorganicas.js';
import PH from '../components/Inorganica/PH.js';
import Objetivos from '../components/SobreoApp/Objetivos.js';
import QuemSomos from '../components/SobreoApp/QuemSomos.js';
import ForcasDeLondon from '../components/InteracoesIntermoleculares/ForcasDeLondon.js';
import ForcasIonDipolo from '../components/InteracoesIntermoleculares/ForcasIonDipolo.js';
import ForcasDipoloDipolo from '../components/InteracoesIntermoleculares/ForcasDipoloDipolo.js';
import LigacoesHidrogenio from '../components/InteracoesIntermoleculares/LigacoesHidrogenio.js';
import OQueSao from '../components/InteracoesIntermoleculares/OQueSao.js';
import FatoresVelocidade from '../components/Cinetica/FatoresVelocidade';
import CineticaQuimica from '../components/Cinetica/CineticaQuimica.js';
import Velocidade from '../components/Cinetica/Velocidade.js';
import Equipamentos from '../components/Laboratorio/Equipamentos.js';
import EPIS from '../components/Laboratorio/EPIS.js';

const Subtopicos = [
    {
        id: 1,
        disciplina: "SobreOAPP",
        titulo: "Objetivos",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "OBJETIVOS",
                imgBackground: require("../assets/images/Sobre/sobre.png"),
                componente: <Objetivos/>
            }
        }


    },
    {
        id: 2,
        disciplina: "SobreOAPP",
        titulo: "Quem somos?",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "QUEM SOMOS?",
                imgBackground: require("../assets/images/Sobre/sobre.png"),
                componente: <QuemSomos/>
            }
        }


    },
    {
        id: 3,
        disciplina: "QuimicaOrganica",
        titulo: "Funções Orgânicas",
        img: require("../assets/images/Organica/mainMolecule.png"),
        isList: true,
        conteudo:
        {
            texto: "As funções orgânicas são determinadas pelas estruturas e agrupam compostos orgânicos com características semelhantes. Esses compostos são formados por átomos de carbono, motivo pelo qual também são chamados de compostos carbônicos. As semelhanças dos compostos orgânicos são resultado de grupos funcionais, que as caracterizam e nomeiam as substâncias de forma específica.",
            cards: FuncoesOrganicas
        },

    },
    {
        id: 4,
        disciplina: "QuimicaOrganica",
        titulo: "Isomeria",
        isList: true,
        img: require("../assets/images/Organica//Isomeria/isomeriabg.png"),
        conteudo: {
            texto: ` Isomeria é um fenômeno que ocorre quando compostos químicos diferentes são formados pela combinação entre iguais quantidades dos mesmos átomos. 
                    Compostos com essas características são chamados de isômeros. O termo “isômero” significa “partes iguais”, derivando das palavras gregas iso = igual e mero = partes.
                    Como os isômeros são substâncias químicas diferentes, apesar de possuírem idêntica fórmula molecular, mantêm propriedades físicas e químicas distintas, em razão das próprias diferenças estruturais.
                    A isomeria ocorre com frequência em compostos orgânicos, pois como o átomo de carbono forma quatro ligações, sua capacidade de formar diferentes compostos é elevada.\nA isomeria é dividida em dois grupos: isomeria plana e isomeria espacial:`,
            cards: Isomeria
        }
    },
    {
        id: 5,
        disciplina: "QuimicaOrganica",
        titulo: "Reações Químicas",
        isList: true,
        img: require("../assets/images/Organica/reacoesquimicasbg.png"),
        conteudo: {
            texto: `    As reações orgânicas são importantes para a produção dos inúmeros compostos orgânicos usados atualmente em alimentos, medicamentos, cosméticos, utensílios domésticos, brinquedos, automóveis, combustíveis e assim por diante.
        Essas reações são muito variadas, mas geralmente podem ser classificadas em:`,
            cards: ReacoesQuimicas
        }
    },
    {
        id: 7,
        disciplina: "EstruturaAtomica",
        titulo: "Composição do átomo",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "COMPOSIÇÃO DO ÁTOMO",
                imgBackground: require("../assets/images/EstruturaAtomica/AtomoBg.png"),
                componente: <ComposicaoDoAtomo />
            }
        }
    },
    {
        id: 8,
        disciplina: "EstruturaAtomica",
        titulo: "Tipos de átomos",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "TIPOS DE ÁTOMOS",
                imgBackground: require("../assets/images/EstruturaAtomica/AtomoBg.png"),
                componente: <TiposDeAtomos/>
            }
        }
    },
    {
        id: 9,
        disciplina: "EstruturaAtomica",
        titulo: "Estrutura do átomo",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "ESTRUTURA DO ÁTOMO",
                imgBackground: require("../assets/images/EstruturaAtomica/AtomoBg.png"),
                componente: <EstruturaDoAtomo/>
            }
        }
    },
    {
        id: 10,
        disciplina: "EstruturaAtomica",
        titulo: "Números Quânticos",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "NÚMEROS QUÂNTICOS",
                imgBackground: require("../assets/images/EstruturaAtomica/AtomoBg.png"),
                componente: <NumerosQuanticos/>
            }
        }
    },
    {
        id: 11,
        disciplina: "EstruturaAtomica",
        titulo: "Modelos Atômicos",
        img: require("../assets/images/EstruturaAtomica/atomo.png"),
        isList: true,
        conteudo:
        {
            texto: `Visto que não é possível visualizar um átomo isoladamente, os cientistas, com o passar do tempo, criaram modelos atômicos, ou seja, imagens que servem para explicar a constituição, propriedades e comportamento dos átomos. Esses modelos explicam o que diz a teoria, mas isso não quer dizer que fisicamente o átomo seja igual ao seu modelo. Na verdade, essa série de descobertas da estrutura atômica até se chegar aos modelos aceitos hoje ficou conhecida como a evolução do modelo atômico.\n
            São quatro as principais teorias atômicas estudadas nessa evolução.`,
            cards: ModelosAtomicos
        },
    },
    {
        id: 12,
        disciplina: "LigacoesQuimicas",
        titulo: "Ligações Iônicas",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "LIGAÇÕES IÔNICAS",
                imgBackground: require("../assets/images/LigacoesQuimicas/ligacoesionicas.png"),
                componente: <LigacoesIonicas/>
            }
        }
    },
    {
        id: 13,
        disciplina: "LigacoesQuimicas",
        titulo: "Ligaçoes covalentes",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "LIGAÇÕES COVALENTES",
                imgBackground: require("../assets/images/LigacoesQuimicas/ligacoescovalentes.png"),
                componente: <LigacoesCovalentes/>
            }
        }
    },
    {
        id: 14,
        disciplina: "LigacoesQuimicas",
        titulo: "Ligaçoes metálicas",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "LIGAÇÕES METÁLICAS",
                imgBackground: require("../assets/images/LigacoesQuimicas/ligacoesmetalicas.png"),
                componente: <LigacoesMetalicas/>
            }
        }
    },
    {
        id: 15,
        disciplina: "EquilibrioQuimico",
        titulo: "Equilíbrio Químico",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "EQUILÍBRIO QUÍMICO",
                imgBackground: require("../assets/images/EquilibrioQuimico/equilibrioquimico.png"),
                componente: <EquilibrioQuimico/>
            }
        }
    },
    {
        id: 16,
        disciplina: "EquilibrioQuimico",
        titulo: "Constante de Equilíbrio",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "A CONSTANTE DE EQUILIBRIO",
                imgBackground: require("../assets/images/EquilibrioQuimico/equilibrioquimico.png"),
                componente: <ConstanteEquilibrio/>
            }
        }
    },
    {
        id: 17,
        disciplina: "EquilibrioQuimico",
        titulo: "Princípio de Le Chatelier",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "PRINCÍPIO DE LE CHATELIER",
                imgBackground: require("../assets/images/EquilibrioQuimico/equilibrioquimico.png"),
                componente: <LeChatelier/>
            }
        }
    },
    {
        id: 18,
        disciplina: "EquilibrioQuimico",
        titulo: "Solução-Tampão",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "SOLUÇÃO-TAMPÃO",
                imgBackground: require("../assets/images/SolucoesEMisturas/tampao.png"),
                componente: <SolucaoTampao/>
            }
        }
    },
    {
        id: 19,
        disciplina: "SolucoeseMisturas",
        titulo: "Classificação das Soluções",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "CLASSIFICAÇÃO DAS SOLUÇÕES",
                imgBackground: require("../assets/images/SolucoesEMisturas/solucoes.png"),
                componente: <Classificacao/>
            }
        }
    },
    {
        id: 20,
        disciplina: "SolucoeseMisturas",
        titulo: "Coeficiente de Solubilidade ",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "COEFICIENTE DE SOLUBILIDADE",
                imgBackground: require("../assets/images/SolucoesEMisturas/solucoes.png"),
                componente: <Coeficiente/>
            }
        }
    },
    {
        id: 21,
        disciplina: "SolucoeseMisturas",
        titulo: "Partes por milhão",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "PARTES POR MILHÃO",
                imgBackground: require("../assets/images/SolucoesEMisturas/solucoes.png"),
                componente: <PPM/>
            }
        }
    },
    {
        id: 22,
        disciplina: "SolucoeseMisturas",
        titulo: "Solução-tampão",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "SOLUÇÃO-TAMPÃO",
                imgBackground: require("../assets/images/SolucoesEMisturas/tampao.png"),
                componente: <SolucaoTampao/>
            }
        }
    },
    
    {
        id: 23,
        disciplina: "FuncoesInorganicas",
        titulo: "Funções Inorgânicas",
        isList: true,
        img: require("../assets/images/Inorganica/funcoesInorganicas.png"),
        conteudo: {
            texto: `    Os compostos inorgânicos possuem estruturas moleculares muito simples e não apresentam cadeias de carbono. A maioria desses compostos é formada por ligações entre metais e hidrogênios combinados como os metais ou os não metais.
        As funções inorgânicas são quatro: ácidos, bases, sais e óxidos. `,
            cards: FuncoesInorganicas
        }
    },
    
    {
        id: 24,
        disciplina: "FuncoesInorganicas",
        titulo: "Potencial hidrogeniônico (pH)",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "PH",
                imgBackground: require("../assets/images/Inorganica/ph.png"),
                componente: <PH/>
            }
        }
    },
    
    {
        id: 25,
        disciplina: "InteracoesIntermoleculares",
        titulo: "O que são?",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "O QUE SÃO",
                imgBackground: require("../assets/images/InteracoesIntermoleculares/interacoes.png"),
                componente: <OQueSao/>
            }
        }
    },
    {
        id: 26,
        disciplina: "InteracoesIntermoleculares",
        titulo: "Forças de London ou Forças dipolo induzido-dipolo induzido",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "FORÇAS DE LONDON",
                imgBackground: require("../assets/images/InteracoesIntermoleculares/interacoes.png"),
                componente: <ForcasDeLondon/>
            }
        }
    },
    {
        id: 27,
        disciplina: "InteracoesIntermoleculares",
        titulo: "Forças íon-dipolo",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "FORÇAS ÍON-DIPOLO",
                imgBackground: require("../assets/images/InteracoesIntermoleculares/interacoes.png"),
                componente: <ForcasIonDipolo/>
            }
        }
    },
    {
        id: 28,
        disciplina: "InteracoesIntermoleculares",
        titulo: "Forças dipolo-dipolo",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "FORÇAS DIPOLO-DIPOLO",
                imgBackground: require("../assets/images/InteracoesIntermoleculares/interacoes.png"),
                componente: <ForcasDipoloDipolo/>
            }
        }
    },
    {
        id: 29,
        disciplina: "InteracoesIntermoleculares",
        titulo: "Ligações de hidrogênio",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "LIGAÇÕES DE HIDROGÊNIO",
                imgBackground: require("../assets/images/InteracoesIntermoleculares/interacoes.png"),
                componente: <LigacoesHidrogenio/>
            }
        }
    },
    {
        id: 30,
        disciplina: "CineticaQuimica",
        titulo: "O estudo da velocidade das reações",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "CINÉTICA QUÍMICA",
                imgBackground: require("../assets/images/Cinetica/cinetica.png"),
                componente: <CineticaQuimica/>
            }
        }
    },
    {
        id: 31,
        disciplina: "CineticaQuimica",
        titulo: "Fatores Que Afetam a Velocidade da Reação",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "FATORES QUE AFETAM A VELOCIDADE DAS REAÇÕES",
                imgBackground: require("../assets/images/Cinetica/cinetica.png"),
                componente: <FatoresVelocidade/>
            }
        }
    },
    {
        id: 32,
        disciplina: "CineticaQuimica",
        titulo: "Velocidade das Reações",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "VELOCIDADE DAS REAÇÕES",
                imgBackground: require("../assets/images/Cinetica/cinetica.png"),
                componente: <Velocidade/>
            }
        }
    },
    
    {
        id: 33,
        disciplina: "Laboratorio",
        titulo: "Equipamentos e Funções",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "EQUIPAMENTOS E FUNÇÕES",
                imgBackground: require("../assets/images/Laboratorio/laboratorio.png"),
                componente: <Equipamentos/>
            }
        }
    },
    
    {
        id: 34,
        disciplina: "Laboratorio",
        titulo: "EPIs",
        isList: false,
        conteudo:
        {
            cards: {
                titulo: "EPIS",
                imgBackground: require("../assets/images/Laboratorio/laboratorio.png"),
                componente: <EPIS/>
            }
        }
    },
]
export default Subtopicos;