
import Acidos from '../../components/Inorganica/Acidos.js'
import Bases from '../../components/Inorganica/Bases.js';
import Oxidos from '../../components/Inorganica/Oxidos.js';
import Sais from '../../components/Inorganica/Sais.js';

const FuncoesInorganicas = [
    {
        id: 1,
        titulo:"ÁCIDOS",
        imgBackground: require("../../assets/images/Inorganica/acido2.png"),
        img: require('../../assets/images/Inorganica/acido.png'),
        componente: <Acidos/>
    },
    {
        id: 2,
        titulo:"BASES",
        imgBackground: require("../../assets/images/Inorganica/base2.png"),
        img: require('../../assets/images/Inorganica/base.png'),
        componente: <Bases/>
    },
    {
        id: 3,
        titulo:"SAIS",
        imgBackground: require("../../assets/images/Inorganica/sais2.png"),
        img: require('../../assets/images/Inorganica/sais.png'),
        componente: <Sais/>
    },
    {
        id: 4,
        titulo:"ÓXIDOS",
        imgBackground: require("../../assets/images/Inorganica/oxido2.png"),
        img: require('../../assets/images/Inorganica/oxido.png'),
        componente: <Oxidos/>
    },

]
export default FuncoesInorganicas;