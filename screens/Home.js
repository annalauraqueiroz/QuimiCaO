import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { styles } from '../assets/styles/mainStyles.js';
import Header from '../components/Header.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function HomeScreen({navigation}) {


  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

     

    <ScrollView contentContainerStyle={styles.listacards}>
      <View style={styles.listacards}>
                  <View style={styles.card}>
                  <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('TelaCards')}
                    >
                        <Image style={styles.ImgIcones} source={require('../assets/images/Organica.png')}/>
                        <Text>Química Orgânica</Text>
                    </TouchableOpacity>

                  </View>

                  <View style={styles.card}>
                  <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('TelaCards')}
                    >
                        <Image style={styles.ImgIcones} source={require('../assets/images/estatm.png')}/>
                        <Text>Estrutura Atômica</Text>
                    </TouchableOpacity>
                  </View>

       </View>

       <View style={styles.listacards}>
                  <View style={styles.card}>
                    <Text>card 1</Text>
                  </View>

                  <View style={styles.card}>
                    <Text>card 2</Text>
                  </View>

       </View>
      

      
       <View style={styles.listacards}>
                  <View style={styles.card}>
                    <Text>card 1</Text>
                  </View>

                  <View style={styles.card}>
                    <Text>card 2</Text>
                  </View>

       </View>


       
       <View style={styles.listacards}>
                  <View style={styles.card}>
                    <Text>card 1</Text>
                  </View>

                  <View style={styles.card}>
                    <Text>card 2</Text>
                  </View>

       </View>



       
       <View style={styles.listacards}>
                  <View style={styles.card}>
                    <Text>card 1</Text>
                  </View>

                  <View style={styles.card}>
                    <Text>card 2</Text>
                  </View>

       </View>




    </ScrollView>
    
        
    </View>
  );
}