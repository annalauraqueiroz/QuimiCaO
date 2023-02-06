
import IsomeriaEspacial from '../../components/Organica/IsomeriaEspacial.js'
import ReacoesAdicao from '../../components/Organica/ReacoesAdicao.js';
import ReacoesSubstituicao from '../../components/Organica/ReacoesSubstituicao';
import ReacoesEliminacao from '../../components/Organica/ReacoesEliminacao.js';
import ReacoesOxidacao from '../../components/Organica/ReacoesOxidacao.js'

const ReacoesQuimicas = [
    {
        id: 1,
        titulo:"Reações de adição",
        imgBackground: require("../../assets/images/Organica/ReacoesQuimicas/adicao2.png"),
        img: require("../../assets/images/Organica/ReacoesQuimicas/adicao.png"),
        componente: <ReacoesAdicao/>
    },
    {
        id: 2,
        titulo:"Reações de substituição",
        imgBackground: require("../../assets/images/Organica/ReacoesQuimicas/substituicao2.png"),
        img: require('../../assets/images/Organica/ReacoesQuimicas/substituicao.png'),
        componente: <ReacoesSubstituicao/>
    },
    {
        id: 3,
        titulo:"Reações de eliminação",
        imgBackground: require("../../assets/images/Organica/ReacoesQuimicas/eliminacao2.png"),
        img: require('../../assets/images/Organica/ReacoesQuimicas/eliminacao.png'),
        componente: <ReacoesEliminacao/>
    },
    {
        id: 5,
        titulo:"Reações de oxidação",
        imgBackground: require("../../assets/images/Organica/ReacoesQuimicas/oxidacao2.png"),
        img: require('../../assets/images/Organica/ReacoesQuimicas/oxidacao.png'),
        componente: <ReacoesOxidacao/>
    },

]
export default ReacoesQuimicas;