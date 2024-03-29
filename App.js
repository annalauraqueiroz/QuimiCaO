import React from 'react';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import {Montserrat_400Regular, Montserrat_800ExtraBold} from '@expo-google-fonts/montserrat'
import MainRoutes from './assets/routes/mainRoutes';


export default function App() {

  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Montserrat_400Regular,
    Montserrat_800ExtraBold,
    Zing: require('./assets/fonts/zing/ZingRustDemo-Base.otf'),
    IntroScript: require('./assets/fonts/Intro_Script/IntroScriptDemo-Medium.otf'),
    Visby: require('./assets/fonts/Visby/visby-round-cf-regular.otf')
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <MainRoutes/>
  );
}


