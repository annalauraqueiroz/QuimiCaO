import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    //justifyContent: 'center',
   // flexDirection: 'column',
   // marginTop: 50,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderColor: '#1b3fa2',
  },
  listacards:{
    
   //width: '100%',
  //  height: '100%',
 //   alignItems: 'center',
   // alignContent: 'space-around',
    flexDirection: 'row',
 //   paddingLeft: 20,
   // paddingRight: 20,
    justifyContent: 'space-around',
    flexWrap: 'wrap'

  },
  card: {
    backgroundColor: '#04c6cf',
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
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
  ImgIcones:{
    flexDirection: 'row',
    width: 100,
    height: 100
  },
  ImgLogo: {
     borderRadius: 10,
     paddingLeft: 100,
  },
  
  TextTitulo:{
    fontSize: 20,
  }




});