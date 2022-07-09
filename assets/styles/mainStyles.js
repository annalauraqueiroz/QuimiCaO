import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F8F8FF',
    //justifyContent: 'center',
   //flexDirection: 'column',
   // marginTop: 50,
    //alignItems: 'center',
    //borderLeftWidth: 20,
   // borderRightWidth: 20,
    borderColor: '#1b3fa2',
  },
  listacards:{
    
   //width: '100%',
  //  height: '100%',
 //   alignItems: 'center',
    //alignContent: 'space-around',
   // flexDirection: 'row',
    //paddingLeft: 20,
   // paddingRight: 20,
    marginTop: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
   

  },
  card: {
    backgroundColor: '#04c6cf',
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  ImgIcones:{
    flexDirection: 'row',
    width: 90,
    height: 90
  },
  TextTitulo:{
    fontSize: 24,
    textAlign: 'center',
    color: '#00858b',
    fontFamily:  'Zing',
  },
  header: {
    height: 140,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    alignItems: 'center',
    paddingLeft: 10,
  },
  ImgIcone1:{
    maxWidth: 40,
    maxHeight: 40,

  },
  

  ImgLogo: {
     borderRadius: 10,
     paddingLeft: 100,
  },
  
  



});