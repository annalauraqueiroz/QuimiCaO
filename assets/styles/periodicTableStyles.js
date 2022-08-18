import { StyleSheet } from 'react-native';

export const periodicTableStyles = StyleSheet.create({
  container:{
    //borderColor: '#1b3fa2',
    paddingTop: 10,
    paddingRight:5,
    
    //backgroundColor:'#04c6cf'
  },
  sviewContainer:{
   flexGrow: 1,
   height: 500,
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
        
      },
      gruposLAC:{
        paddingTop: 30
      },
      flac: {
        
        flexDirection: 'row',
      },
      txtGruposLAC:{
        width: 2*52,
      },
      coluna: {
        flexDirection: 'column',
        flexWrap: 'wrap',

      },
      
})