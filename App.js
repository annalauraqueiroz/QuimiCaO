import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

import HomeScreen from './screens/Home.js'
import TelaCard from './screens/TelaCards.js'
import Organica from './screens/disciplinas/QuimicaOrganicaScreen.js'
import TabelaPeriodica from './screens/TabelaPeriodicaScreen.js';
import InfoElemento from './screens/ModalScreen.js';

function LogoTitle(){
  return(
      <Image style={styles.ImgIcone1}
        source={require('./assets/images/iconeapp.png')}/>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
  return(
    <HomeStack.Navigator screenOptions={{
      headerTitle: '',
      headerRight: (props) => <LogoTitle{...props}/>,
      //headerStyle: {backgroundColor: '#FFFFFF'},
      headerTransparent: true,
    }}
    >
      <HomeStack.Screen name="TelaInicial" component={HomeScreen}/>
      <HomeStack.Screen name="TelaCards" component={TelaCard}/>
      <HomeStack.Screen name="QuimicaOrganica" component={Organica}/>
      <HomeStack.Screen name='TabelaPeriodica' component={TabelaPeriodica}/>
      <HomeStack.Group
        screenOptions={()=>({
          presentation: 'modal',

        })}
      >
        <HomeStack.Screen name="InfoElemento" component={InfoElemento}/>
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Zing: require('./assets/fonts/zing/ZingRustDemo-Base.otf'),
    IntroScript: require('./assets/fonts/Intro_Script/IntroScriptDemo-Medium.otf')
  });
  if (!fontsLoaded) 
    return null;
  return (
    <NavigationContainer initialRouteName="Home">
      <HomeStackScreen />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgIcone1:{
    maxWidth: 175,
    maxHeight: 45,
    borderRadius:12,
  },
  
  
 
});
