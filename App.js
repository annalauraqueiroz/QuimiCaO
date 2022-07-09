import React from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home.js'
import TelaCard from './screens/TelaCards.js'
import TabelaPeriodica from './screens/TabelaPeriodica.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
  return(
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen 
        name="TelaInicial" 
        component={HomeScreen}
        title="Conteúdos" />
      <HomeStack.Screen name="TelaCards" component={TelaCard} />
    </HomeStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Zing: require('./assets/fonts/zing/ZingRustDemo-Base.otf'),
  });
  if (!fontsLoaded) 
    return null;
  return (
    
    <NavigationContainer initialRouteName="Home">
        <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen 
          name="Home" 
          component={HomeStackScreen} 
          title="Conteúdos"
          options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="atom" size={24} color={color} />,
            tabBarLabel: 'Conteúdos'
          }}

          />
        <BottomTab.Screen 
          name="TabelaPeriodica" 
          component={TabelaPeriodica}
          options={{
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="periodic-table" size={24} color={color} />,
            tabBarLabel: 'Tabela Periódica'
          }}
          />
      </BottomTab.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
