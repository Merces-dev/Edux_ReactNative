import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { AppLoading } from 'expo';
import Logo from './../../assets/logo.svg'
import {
  useFonts,
  TitilliumWeb_200ExtraLight,
  TitilliumWeb_200ExtraLight_Italic,
  TitilliumWeb_300Light,
  TitilliumWeb_300Light_Italic,
  TitilliumWeb_400Regular,
  TitilliumWeb_400Regular_Italic,
  TitilliumWeb_600SemiBold,
  TitilliumWeb_600SemiBold_Italic,
  TitilliumWeb_700Bold,
  TitilliumWeb_700Bold_Italic,
  TitilliumWeb_900Black,
} from '@expo-google-fonts/titillium-web';

const Login = () => {
  let [fontsLoaded] = useFonts({
    TitilliumWeb_200ExtraLight,
    TitilliumWeb_200ExtraLight_Italic,
    TitilliumWeb_300Light,
    TitilliumWeb_300Light_Italic,
    TitilliumWeb_400Regular,
    TitilliumWeb_400Regular_Italic,
    TitilliumWeb_600SemiBold,
    TitilliumWeb_600SemiBold_Italic,
    TitilliumWeb_700Bold,
    TitilliumWeb_700Bold_Italic,
    TitilliumWeb_900Black,
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return(
        <View style= {styles.container}>
       <Image
                style ={styles.image}
                source ={Logo}
            />
            <Text style= {styles.text} >Login</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor='#9200D6'
                placeholder="Email"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor='#9200D6'
                placeholder="Senha"
              />
              <TouchableOpacity
                style={styles.input}
              >
                <Text
                  style={styles.textButton}
                >
                  Entrar
                </Text>
              </TouchableOpacity>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9200D6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontFamily:'TitilliumWeb_600SemiBold', 
      fontSize: 22,
      marginVertical:20,

      color:'#fff',
      textTransform: 'uppercase'
    },
    input: {
      margin: 10,
      paddingHorizontal:15,
      display:'flex',
      backgroundColor:'#fff',
      justifyContent:'center',
      borderRadius:10,
      width:'65%',
      height:35
    },
    textButton: {
      fontFamily:'TitilliumWeb_900Black', 
      color:'#9200D6',
      textTransform: 'uppercase',
      textAlign:'center',
    },
    image:{
      width:'65%',
      height: 70,
    }

  });
  
export default Login;
