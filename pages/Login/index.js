import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppLoading } from 'expo';
import Logo from './../../assets/logo.png'
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



const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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


  const salvar = async (value) => {
    try {
      await AsyncStorage.setItem('@jwt', value)
    } catch (e) {
      // saving error
    }
  }


  const Logar = () => {

    const corpo = {
      email: email,
      senha: senha
    }

    fetch('http://192.168.15.9:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(corpo)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status != 404) {

          salvar(data.token);
          navigation.navigate('BottomTabNavigator');
        } else {
          alert('Email ou senha inválidos');
        }
      })

  }


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
        <StatusBar style='dark' backgroundColor='#9200D6' />

        <Image
          style={styles.image}
          source={Logo}
        />
        <Text style={styles.text} >Login</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor='#9200D6'
          onChangeText={email => setEmail(email)}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor='#9200D6'
          onChangeText={senha => setSenha(senha)}
          value={senha}
          secureTextEntry={true}

          placeholder="Senha"
        />
        <TouchableOpacity
          style={styles.input}
          onPress={Logar}
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
    fontFamily: 'TitilliumWeb_600SemiBold',
    fontSize: 22,
    marginVertical: 20,

    color: '#fff',
    textTransform: 'uppercase'
  },
  input: {
    margin: 10,
    paddingHorizontal: 15,
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    width: '65%',
    height: 35
  },
  textButton: {
    fontFamily: 'TitilliumWeb_900Black',
    color: '#9200D6',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  image: {
    width: '65%',
    height: 70,
  }

});

export default Login;




