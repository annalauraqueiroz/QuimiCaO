import IsomeriaPlana from '../../components/Organica/IsomeriaPlana.js'
import IsomeriaEspacial from '../../components/Organica/IsomeriaEspacial.js'

const Isomeria = [
    {
        id: 1,
        titulo:"Isomeria plana",
        imgBackground: require("../../assets/images/Organica/Isomeria/isomeriaPlana2.png"),
        img: require("../../assets/images/Organica/Isomeria/isomeriaPlana.png"),
        componente: <IsomeriaPlana/>
    },
    {
        id: 2,
        titulo:"Isomeria espacial",
        imgBackground: require("../../assets/images/Organica/Isomeria/isomeriaespacial2.png"),
        img: require('../../assets/images/Organica/Isomeria/isomeria.png'),
        componente: <IsomeriaEspacial/>
    },

]
export default Isomeria;