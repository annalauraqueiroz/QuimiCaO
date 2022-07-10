import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function InteracoesIntermoleculares({route}) {

  return (
    <View>
    <StatusBar style="dark" />
    <SafeAreaView>
    <ScrollView >
      <View>                  
      
        <Text>{route.params.nome} </Text>
                                    
       </View>
    </ScrollView>
    </SafeAreaView>
    </View>
  );
}