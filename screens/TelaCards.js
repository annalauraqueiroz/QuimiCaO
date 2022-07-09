import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { styles } from '../assets/styles/mainStyles.js';


export default function TelaCard({route}) {


  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.listacards}>
      <View style={styles.listacards}>                  
      {route.params.idItem}
                      <Text> - {route.params.nome}</Text>
                                    
       </View>





    </ScrollView>
    
    </SafeAreaView>
    </View>
  );
}