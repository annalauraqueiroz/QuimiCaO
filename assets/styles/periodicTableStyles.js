import { StyleSheet } from 'react-native';

export const periodicTableStyles = StyleSheet.create({
  container:{
    //borderColor: '#1b3fa2',
    paddingTop: 10,
    paddingRight:5,
    flex:1,
    marginBottom:50,
    flexDirection:'column',
    justifyContent:'flex-end',
    backgroundColor:'#FFFDF0'
  },
  sviewContainer:{
   height: '100%',
   flexDirection:'row',
   alignItems:'flex-end',

  },
  cardElemento: {
        
        width: 50,
        height: 50,
        margin: 1,
        borderRadius: 7,
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        flexDirection: 'row'
        
      },
      f1: {
        //backgroundColor:'#04c6cf',
        justifyContent:'flex-end'
        
      },
      f8B: {
        maxWidth: 3*52,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'center'
      },
      gruposLAC:{
        paddingTop: 30,
        flexDirection: 'column',
        flexWrap:'nowrap',
        alignItems:'space-around',
      },
      flac: {
        
        alignItems:'center',
        flexDirection: 'row',
      },
      coluna: {
        flexDirection: 'column',
        flexWrap: 'wrap',

      },
      containerInfoTabela:{
        alignContent: 'center',
        flexDirection:'row',

      },
      infoTabela:{

      },
      label: {
        flexWrap:'wrap',
        width:'4%',
        justifyContent:'space-around',
        marginLeft:5

      },
      txtLabel: {
        fontFamily:  'Zing',
        color:'#00858B',
      },
      txtLabelGroup: {
        fontFamily:  'Zing',
        color:'#00858B',
        textAlign:'center'
      },
      containerGrupos:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap:'wrap',
        marginBottom:40,
      },
      cardGrupo: {
        width: 25,
        height: 25,
        margin: 1,
        borderRadius: 7,
        
      },
      
})