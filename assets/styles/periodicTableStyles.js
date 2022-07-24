import { StyleSheet } from 'react-native';

export const periodicTableStyles = StyleSheet.create({
  container:{
    borderColor: '#1b3fa2',
    marginTop: 200,
    
  },
  cardElemento: {
        backgroundColor: '#04c6cf',
        width: 50,
        height: 50,
        margin: 1,
        borderRadius: 7,
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        flexDirection: 'row'
        
      },
      linha: {
        display: 'flex',
        flexDirection: 'row',
        
      },
      coluna: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
          
          
        },
        coluna2: {
          flex:1,
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'flex-end'
            
            
          },
      
})