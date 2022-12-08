import { StyleSheet } from 'react-native';

export const foStyles = StyleSheet.create({
    container: {
        marginLeft: 21,
        marginRight: 21,
        marginLeft:20
    },
    titulo:{
        color:'#00484B',
        fontSize: 37,
        marginTop:8,
        marginBottom:15,
        fontFamily:'Montserrat_800ExtraBold'

    },
    subtitulo:{
        color:"#00484B",
        fontSize:23,
        marginTop:14,
        marginBottom:11,
        fontFamily:'Montserrat_800ExtraBold'
    },
    txtPropriedades:{
       fontSize: 15,
       color:"#00484B",
       textAlign:'justify'
    },
    img:{
        marginTop:12,
        marginBottom:10,
        maxHeight:70,
        maxWidth:500,
        alignSelf:'center',
        resizeMode:'contain'
    },
    img2:{
        marginTop:12,
        marginBottom:10,
        maxHeight:200,
        maxWidth:500,
        marginLeft:10,
        marginRight:10,
        alignSelf:'center',
        resizeMode:'contain'
    }

})