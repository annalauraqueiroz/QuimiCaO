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
    width:230,
    height:230,
    alignSelf:'center'
  },
  txtTitulo:{
    marginLeft:20,
    marginTop:12,
    marginBottom:8,
    fontSize:34,
    fontFamily: 'Visby',
    
  },
  txtDescricao:{
    fontSize:12,
    marginBottom:5,
    fontFamily: 'Visby',
    textAlign:'justify',
    
  },
  listacards:{ 
    display:'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom:100,
    paddingTop:2,
    backgroundColor:'#ffffff'
  },
  headerImg:{
    backgroundColor:'#04c6cf'
  },
  cardInterno:{
    backgroundColor: '#A4ECEF',
    opacity:0.9,
    width: 110,
    height: 110,
    margin: 8,
    alignItems: 'center',
    justifyContent:'flex-end'
  },
  cardSubtopicos:{
    backgroundColor: '#04c6cf',
    width: 300,
    height: 80,
    margin: 15,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  txtTituloSubtopico:{
    fontSize: 19,
    fontFamily:  'Zing',
    marginBottom:7,
    marginTop:10,
    color:'white'
  },
  txtTituloSubtopicoPreto:{
    fontSize: 19,
    fontFamily:  'Zing',
    marginBottom:7,
    marginTop:10,
    color:'black'
  },
  ImgIcones:{
    alignContent:'stretch',
    maxWidth:60,
    maxHeight: 50
  },
  txtTituloDisciplina:{
    fontSize: 50,
    marginTop: 70,
    marginBottom:20,
    color: '#00858b',
    fontFamily:  'Zing',
  },

})