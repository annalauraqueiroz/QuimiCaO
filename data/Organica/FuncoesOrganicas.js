import Alcool from '../../components/Organica/alcool.js'
import Fenol from '../../components/Organica/fenol.js'
import Ester from '../../components/Organica/ester.js'
import Eter from '../../components/Organica/eter.js'
import AcidoCarboxilico from '../../components/Organica/acidoCarboxilico.js'
import Cetona from '../../components/Organica/cetona.js'
import Alcanos from '../../components/Organica/alcanos.js'
import Alcenos from '../../components/Organica/alcenos.js'
import Alcinos from '../../components/Organica/alcinos.js'
import Aldeido from '../../components/Organica/aldeido.js'
import Amina from '../../components/Organica/amina.js'
import Amida from '../../components/Organica/amida.js'

const FuncoesOrganicas = [
    {
        id: 1,
        titulo:"ALCANOS",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/alcano2.png"),
        img: require('../../assets/images/Organica/FuncoesOrganicas/alcano.png'),
        componente: <Alcanos/>
    },
    {
        id: 2,
        titulo:"ALCENOS",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/alceno2.png"),
        img: require('../../assets/images/Organica/FuncoesOrganicas/alceno.png'),
        componente: <Alcenos/>
    },
    {
        id: 3,
        titulo:"ALCINOS",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/alcino2.png"),
        img: require('../../assets/images/Organica/FuncoesOrganicas/alcino.png'),
        componente: <Alcinos/>
    },
    {
        id: 4,
        titulo:"ÁLCOOL",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/alcool2.png"),
        img: require('../../assets/images/Organica/FuncoesOrganicas/alcool.png'),
        componente: <Alcool/>
    },
    {
        id: 5,
        titulo:"FENOL",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/fenol2.png"),
        img: require('../../assets/images/Organica/FuncoesOrganicas/fenol.png'),
        componente: <Fenol/>
    },
    {
        id: 6,
        titulo:"ÉSTER",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/ester2.png"),
        componente:<Ester/>,
        img: require('../../assets/images/Organica/FuncoesOrganicas/ester.png'),
    },
    {
        id: 7,
        titulo:"ÉTER",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/eter2.png"),
        componente:<Eter/>,
        img: require('../../assets/images/Organica/FuncoesOrganicas/eter.png'),
    },
    {
        id: 8,
        titulo:"ÁCIDO CARBOXÍLICO",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/acCarboxilico2.png"),
        componente: <AcidoCarboxilico/>,
        img: require('../../assets/images/Organica/FuncoesOrganicas/acCarboxilico.png'),
    },
    {
        id: 9,
        titulo:"CETONA",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/cetona2.png"),
        componente: <Cetona/>,
        img: require('../../assets/images/Organica/FuncoesOrganicas/cetona.png'),
    },
    {
        id: 10,
        titulo:"ALDEÍDO",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/aldeido2.png"),
        componente: <Aldeido/>,
        img: require('../../assets/images/Organica/FuncoesOrganicas/aldeido.png'),
    },
    {
        id: 11,
        titulo:"AMINA",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/amina2.png"),
        componente: <Amina/>,
        img: require('../../assets/images/Organica/FuncoesOrganicas/amina.png'),
    },
    {
        id: 12,
        titulo:"AMIDA",
        imgBackground: require("../../assets/images/Organica/FuncoesOrganicas/amida2.png"),
        componente: <Amida/>,
        img: require('../../assets/images/Organica/FuncoesOrganicas/amida.png'),
    },

]
export default FuncoesOrganicas;