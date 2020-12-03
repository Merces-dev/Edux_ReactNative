import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, Platform } from 'react-native';
import jwt_decode from "jwt-decode";
import * as ImagePicker from 'expo-image-picker';
import url from '../../utils/constants'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Postagem = () => {
  // const [idDica, setIdDica] = useState(0);
  // const [idUsuario, setIdUsuario] = useState(0);
  // const [titulo, setTitulo] = useState('');
  // const [texto, setTexto] = useState('');
  // const [dicas, setDicas] = useState([]);
  // const [usuario, setUsuario] = useState([]);
  // const [urlImagem, setUrlImagem] = useState('');


  // useEffect(() => {
  //   listarDicas()
  //   listarUsuario()
  // }, []);

  // //listando usuario
  // const listarUsuario = () => {

  //   fetch('http://192.168.15.9:5000/api/usuario')
  //     .then(response => response.json())
  //     .then(dados => {
  //       setUsuario(dados.data);
  //       limparCampos();
  //     })
  //     .catch(err => console.error(err));
  // }

  // //listando dicas
  // const listarDicas = () => {

  //   fetch('http://192.168.15.9:5000/api/dica')
  //     .then(response => response.json())
  //     .then(dados => {
  //       setDicas(dados.data);
  //       limparCampos();

  return (
    <View  >
      <StatusBar hidden={true} />

      <Header />
      <Text style={styles.Titulo}>Postagens</Text>

      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        placeholder='Qual sua dica para hoje?'
        maxLength={255}
      // value={dica}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonUnityGray}
        //  onPress={EscolherImagem}

        >
          <Text style={styles.buttonText}>Escolher Imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonUnityGreen}
        //  onPress={Postar}
        >
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center'

  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  Titulo: {
    color: '#9200D6',
    fontWeight: 'bold',
    fontSize: 27,
    alignSelf: "center",
    textTransform: 'uppercase'
  },
  textArea: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#9200D6',
    textAlign: 'center',
    alignSelf: "center",
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 20,
    width: "80%",
    marginVertical: 25
  },
  buttons: {
    display: 'flex',
    alignSelf: "center",
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10

  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold'

  },
  buttonUnityGray: {
    paddingVertical: 5,

    backgroundColor: '#BBBBBB',
    width: '48%',
    height: 30,
    borderRadius: 6,

  },
  buttonUnityGreen: {
    paddingVertical: 5,
    backgroundColor: '#00D65F',
    width: '48%',
    height: 30,
    borderRadius: 6,
  },
})

  export default Postagem