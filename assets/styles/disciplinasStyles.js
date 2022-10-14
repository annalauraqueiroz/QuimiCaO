import { StyleSheet } from 'react-native';

export const disciplinaStyles = StyleSheet.create({
  container:{
    borderColor: '#b6c8e8',
  },
  logoPrincipal:{
    paddingTop:50,
  },
  card:{
    backgroundColor: '#ffffff',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    paddingLeft:15,
    paddingRight: 15,
  },
  imgLogo:{
    width:280,
    height:280,
    alignSelf:'center'
  },
  txtTitulo:{
    marginLeft:20,
    marginTop:12,
    marginBottom:15,
    fontSize:37,
    fontFamily: 'Visby',

  },
  txtDescricao:{
    fontSize:15,
    marginBottom:5,
    paddingBottom:20,
    fontFamily: 'Visby',
    textAlign:'justify',
    
  },
  listacards:{ 
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 150

  },
  cardInterno:{
    backgroundColor: '#04c6cf',
    width: 150,
    height: 150,
    margin: 15,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  txtTituloSubtopico:{
    fontSize: 16,
    fontFamily:  'Zing',
  },
  ImgIcones:{
    alignContent:'stretch',
    maxWidth:60,
    maxHeight: 50
  },

})