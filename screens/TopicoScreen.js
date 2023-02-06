import React, {useContext} from 'react';
import Dados from '../data/SubtopicosDB.js';
import CardDisciplina from '../components/cardDisciplinas.js';
import DATAContext from '../components/DATAContext';
import SubtopicoScreen from './disciplinas/SubtopicoScreen.js';

function RenderConteudo ({navigation}) {
    const data = useContext(DATAContext);
    return(
        data.isList ? (<CardDisciplina navigation={navigation}/>):(<SubtopicoScreen/>)
    )
}

export default function TopicoScreen({ route, navigation }) {

  const found = Dados.find(dado =>{
    return dado.id == route.params.idItem
  }) 

  return (

    <DATAContext.Provider value={found}>
        <RenderConteudo navigation={navigation}/>
    </DATAContext.Provider>
  
  );
}