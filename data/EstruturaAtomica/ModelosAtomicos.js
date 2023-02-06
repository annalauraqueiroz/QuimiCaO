import Dalton from "../../components/Estrutura Atomica/ModelosAtomicos/Dalton";
import Rutherford from "../../components/Estrutura Atomica/ModelosAtomicos/Rutherford";
import RutherfordBohr from "../../components/Estrutura Atomica/ModelosAtomicos/RutherfordBohr";
import Thomson from "../../components/Estrutura Atomica/ModelosAtomicos/Thomson";

const ModelosAtomicos = [
    {
        id: 1,
        titulo:"Dalton",
        imgBackground: require("../../assets/images/EstruturaAtomica/ModelosAtomicos/dalton2.png"),
        img: require("../../assets/images/EstruturaAtomica/ModelosAtomicos/dalton.png"),
        componente: <Dalton/>
    }
    ,
    {
        id: 2,
        titulo:"Thomson",
        imgBackground: require("../../assets/images/EstruturaAtomica/ModelosAtomicos/thomson2.png"),
        img: require('../../assets/images/EstruturaAtomica/ModelosAtomicos/thomson.png'),
        componente: <Thomson/>
    },
    {
        id: 3,
        titulo:"Rutherford",
        imgBackground: require("../../assets/images/EstruturaAtomica/ModelosAtomicos/rutherford2.png"),
        img: require('../../assets/images/EstruturaAtomica/ModelosAtomicos/rutherford.png'),
        componente: <Rutherford/>
    },
    {
        id: 4,
        titulo:"Rutherford-Bohr",
        imgBackground: require("../../assets/images/EstruturaAtomica/ModelosAtomicos/rutherfordbohr2.png"),
        img: require('../../assets/images/EstruturaAtomica/ModelosAtomicos/rutherfordbohr.png'),
        componente: <RutherfordBohr/>
    },

]
export default ModelosAtomicos;