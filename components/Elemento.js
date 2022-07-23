import React, {Component} from 'react'
import { Text } from 'react-native'
import Dados from '../DATABASE/ConteudosDB'

export default function Elemento(props){

    return(
      <Text> {props.simbolo}</Text>
    );
}
