import React from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

import HomeScreen from './screens/Home.js'
import TelaCard from './screens/TelaCards.js'
import Organica from './screens/disciplinas/QuimicaOrganicaScreen.js'
import EstruturaAtomica from './screens/disciplinas/EstruturaAtomicaScreen.js'
import TabelaPeriodica from './screens/disciplinas/TabelaPeriodicaScreen.js';
import LigacoesQuimicas from './screens/disciplinas/LigacoesQuimicasScreen.js';
import InteracoesIntermoleculares from './screens/disciplinas/InteracoesIntermolecularesScreen.js';
import EquilibrioQuimico from './screens/disciplinas/EquilibrioQuimicoScreen.js';
import CineticaQuimica from './screens/disciplinas/CineticaQuimicaScreen.js';
import Solucoesemisturas from './screens/disciplinas/SolucoesemisturasScreen.js';
import FuncoesInorganicas from './screens/disciplinas/FuncoesInorganicasScreen.js';
import SobreOAPP from './screens/disciplinas/SobreOAPPScreen.js';

function LogoTitle(){
  return(
      <Image style={styles.ImgIcone1}
        source={require('./assets/images/iconeapp.png')}/>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
  return(
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen 
        name="TelaInicial" 
        component={HomeScreen}
        title="Conteúdos" />
      <HomeStack.Screen name="TelaCards" component={TelaCard}
      />
      <HomeStack.Screen name='QuimicaOrganica' component={Organica}/> 
      <HomeStack.Screen name='EstruturaAtomica' component={EstruturaAtomica}/>
      <HomeStack.Screen name='TabelaPeriodica' component={TabelaPeriodica}/>
      <HomeStack.Screen name='LigacoesQuimicas' component={LigacoesQuimicas}/>
      <HomeStack.Screen name='InteracoesIntermoleculares' component={InteracoesIntermoleculares}/>
      <HomeStack.Screen name='EquilibrioQuimico' component={EquilibrioQuimico}/>
      <HomeStack.Screen name='CineticaQuimica' component={CineticaQuimica}/>
      <HomeStack.Screen name='Solucoesemisturas' component={Solucoesemisturas}/>
      <HomeStack.Screen name='FuncoesInorganicas' component={FuncoesInorganicas}/>
      <HomeStack.Screen name='SobreOAPP' component={SobreOAPP}/>
    </HomeStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

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
        <BottomTab.Navigator>
        <BottomTab.Screen 
          name="Home" 
          component={HomeStackScreen} 
          title="Conteúdos"
          options={{
            headerTitleStyle: {display: 'none'},
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="atom" size={24} color={color} />,
            tabBarLabel: 'Conteúdos',
            headerRight: (props) => <LogoTitle{...props}/>,
            //headerStyle: {backgroundColor: '#FFFFFF'},
            headerTransparent: true,
            tabBarActiveTintColor: '#BEF8EB',
            tabBarInactiveTintColor: '#04c6cf',
            tabBarStyle: {backgroundColor:'#227fbb'}
          }}

          />
        <BottomTab.Screen 
          name="TabelaPeriodica" 
          component={TabelaPeriodica}
          options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="periodic-table" size={24} color={color} />,
            tabBarLabel: 'Tabela Periódica',
            tabBarActiveTintColor: '#FFFDF0',
            tabBarInactiveTintColor: '#1B3FA2',
          }}
          />
      </BottomTab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    //backgroundColor: '#00858B',

  },
  ImgIcone1:{
    maxWidth: 175,
    maxHeight: 45,
    borderRadius:12
  },
  
  
 
});
