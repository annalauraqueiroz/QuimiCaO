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
                title : "Funções Orgânicas",
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
                }
                ]
            },
        
    },
    {
        id:4,
        disciplina:"QuimicaOrganica",
        titulo:"Nomenclatura de compostos orgânicos",
        conteudo: 
            {
                title : "Funções Orgânicas",
                texto : "As funções orgânicas são determinadas pelas estruturas e agrupam compostos orgânicos com características semelhantes. Esses compostos são formados por átomos de carbono, motivo pelo qual também são chamados de compostos carbônicos. As semelhanças dos compostos orgânicos são resultado de grupos funcionais, que as caracterizam e nomeiam as substâncias de forma específica."
            },
    },
    {
        id:5,
        disciplina:"QuimicaOrganica",
        titulo:"Isomeria"
    },
    {
        id:6,
        disciplina:"QuimicaOrganica",
        titulo:"Reações Químicas"
    }
]
export default Subtopicos;