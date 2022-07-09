import React, {Component, useEffect, useState} from "react";
import { Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import dados from '../DATABASE/mainDB.json'
import { styles } from '../assets/styles/mainStyles.js';

//nao to usando esse componente
export default function Card (){
    const DATA = dados.itens;
    const imagem = DATA.map((DATA)=> DATA.idItem)
        return(
            <View> 
               <Text> {imagem}</Text>
                
            </View>
        );
    }
