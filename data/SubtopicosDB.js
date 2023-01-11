const Subtopicos = [
    {
        id: 1,
        disciplina: "FuncoesInorganicas",
        titulo: "Principais funções inorgânicas",


    },
    {
        id: 2,
        disciplina: "FuncoesInorganicas",
        titulo: "Teoria Ácido-Base"

    },
    {
        id:3,
        disciplina:"QuimicaOrganica",
        titulo:"Funções Orgânicas",
        conteudo: 
            {
                texto : "As funções orgânicas são determinadas pelas estruturas e agrupam compostos orgânicos com características semelhantes. Esses compostos são formados por átomos de carbono, motivo pelo qual também são chamados de compostos carbônicos. As semelhanças dos compostos orgânicos são resultado de grupos funcionais, que as caracterizam e nomeiam as substâncias de forma específica.",
                list : true,
                cards: [
                {
                    idItem: 1,
                    titulo: "Alcanos",
                    img: require('../assets/images/Organica/FuncoesOrganicas/alcano.png')
                },
                {
                    idItem: 2,
                    titulo: "Alcenos",
                    img: require('../assets/images/Organica/FuncoesOrganicas/alceno.png')
                },
                {
                    idItem: 3,
                    titulo: "Alcinos",
                    img: require('../assets/images/Organica/FuncoesOrganicas/alcino.png')
                },
                {
                    idItem: 4,
                    titulo: "Alcóois",
                    img: require('../assets/images/Organica/FuncoesOrganicas/alcool.png')
                },
                {
                    idItem: 5,
                    titulo: "Fenol",
                    img: require('../assets/images/Organica/FuncoesOrganicas/fenol.png')
                },
                {
                    idItem: 6,
                    titulo: "Éster",
                    img: require('../assets/images/Organica/FuncoesOrganicas/ester.png')
                },
                {
                    idItem: 7,
                    titulo: "Éter",
                    img: require('../assets/images/Organica/FuncoesOrganicas/eter.png')
                },
                {
                    idItem: 8,
                    titulo: "Ácido Carboxílico",
                    img: require('../assets/images/Organica/FuncoesOrganicas/acCarboxilico.png')
                },
                {
                    idItem: 9,
                    titulo: "Cetona",
                    img: require('../assets/images/Organica/FuncoesOrganicas/cetona.png')
                },
                {
                    idItem: 10,
                    titulo: "Aldeído",
                    img: require('../assets/images/Organica/FuncoesOrganicas/aldeido.png')
                },
                {
                    idItem: 11,
                    titulo: "Amida",
                    img: require('../assets/images/Organica/FuncoesOrganicas/amida.png')
                },
                {
                    idItem: 12,
                    titulo: "Amina",
                    img: require('../assets/images/Organica/FuncoesOrganicas/amina.png')
                },
                {
                    idItem: 13,
                    titulo: "Anidrido",
                    img: require('../assets/images/Organica/FuncoesOrganicas/anidrido.png')
                },
                {
                    idItem: 14,
                    titulo: "Haletos",
                    img: require('../assets/images/Organica/FuncoesOrganicas/haleto.png')
                },
                ]
            },
        
    },
    {
        id:4,
        disciplina:"QuimicaOrganica",
        titulo:"Isomeria",
        conteudo:{
            texto:` Isomeria é um fenômeno que ocorre quando compostos químicos diferentes são formados pela combinação entre iguais quantidades dos mesmos átomos. 
    Compostos com essas características são chamados de isômeros. O termo “isômero” significa “partes iguais”, derivando das palavras gregas iso = igual e mero = partes.
    Como os isômeros são substâncias químicas diferentes, apesar de possuírem idêntica fórmula molecular, mantêm propriedades físicas e químicas distintas, em razão das próprias diferenças estruturais.
    A isomeria ocorre com frequência em compostos orgânicos, pois como o átomo de carbono forma quatro ligações, sua capacidade de formar diferentes compostos é elevada.`,
            list: true,
            cards: [
                {
                    idItem: 1,
                    titulo: "Isomeria plana",
                },
                {
                    idItem: 2,
                    titulo: "Isomeria espacial",
                },
            ]
        }
    },
    {
        id:5,
        disciplina:"QuimicaOrganica",
        titulo:"Reações Químicas",
        conteudo:{
            texto: `    As reações orgânicas são importantes para a produção dos inúmeros compostos orgânicos usados atualmente em alimentos, medicamentos, cosméticos, utensílios domésticos, brinquedos, automóveis, combustíveis e assim por diante.
        Essas reações são muito variadas, mas geralmente podem ser classificadas em:`,
            cards:[
                {
                    idItem: 1,
                    titulo: "Adição",
                },
                {
                    idItem: 2,
                    titulo: "Substituição",
                },
                {
                    idItem: 3,
                    titulo: "Eliminação",
                },
                {
                    idItem: 4,
                    titulo: "Oxidação",
                },
                {
                    idItem: 5,
                    titulo: "Esterificação",
                },
                {
                    idItem: 6,
                    titulo: "Combustão",
                },
            ]
        }
    },
    {
        id:7,
        disciplina:"EstruturaAtomica",
        titulo:"Composição do átomo"
    },
    {
        id:8,
        disciplina:"EstruturaAtomica",
        titulo:"Número de Massa"
    },
    {
        id:9,
        disciplina:"EstruturaAtomica",
        titulo:"Número Atômico"
    },
    {
        id:10,
        disciplina:"EstruturaAtomica",
        titulo:"Número Quântico"
    },
    {
        id:11,
        disciplina:"EstruturaAtomica",
        titulo:"Modelo Atômico"
    },
    {
        id:12,
        disciplina:"LigacoesQuimicas",
        titulo:"Ligações Iônicas"
    },
    {
        id:13,
        disciplina:"LigacoesQuimicas",
        titulo:"Ligaçoes covalentes"
    },
    {
        id:14,
        disciplina:"LigacoesQuimicas",
        titulo:"Ligaçoes metálicas"
    },
    {
        id:15,
        disciplina:"EquilibrioQuimico",
        titulo:"Condições para equilíbrio "
    },
    {
        id:16,
        disciplina:"EquilibrioQuimico",
        titulo:"Constante de Equilíbrio (Kp, kc, ka)"
    },
    {
        id:17,
        disciplina:"EquilibrioQuimico",
        titulo:"Fatores que alteram o equilíbrio"
    },
    {
        id:18,
        disciplina:"EquilibrioQuimico",
        titulo:"Solução Tampão"
    },
    {
        id:19,
        disciplina:"SolucoeseMisturas",
        titulo:"Classificação das Soluções"
    },
    {
        id:20,
        disciplina:"SolucoeseMisturas",
        titulo:"Estado Físico da Solução"
    },
    {
        id:21,
        disciplina:"SolucoeseMisturas",
        titulo:"Coeficiente de Solubilidade "
    },
    {
        id:22,
        disciplina:"SolucoeseMisturas",
        titulo:"Concentração das Soluções"
    },
    {
        id:23,
        disciplina:"SolucoeseMisturas",
        titulo:"Natureza do Soluto"
    },
    {
        id:24,
        disciplina:"SolucoeseMisturas",
        titulo:"PPM"
    },
    {
        id:25,
        disciplina:"SolucoeseMisturas",
        titulo:"Título"
    },
    {
        id:26,
        disciplina:"SolucoeseMisturas",
        titulo:"Densidade"
    },
    {
        id:27,
        disciplina:"SolucoeseMisturas",
        titulo:"Molaridade"
    },
    {
        id:28,
        disciplina:"SolucoeseMisturas",
        titulo:"Fração Molar"
    },
    {
        id:29,
        disciplina:"SolucoeseMisturas",
        titulo:"Diluição"
    },
    {
        id:30,
        disciplina:"SolucoeseMisturas",
        titulo:"Mistura de Soluções"
    }
]
export default Subtopicos;