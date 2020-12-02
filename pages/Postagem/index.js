import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, Platform } from 'react-native';
import jwt_decode from "jwt-decode";
import * as ImagePicker from 'expo-image-picker';
import url from '../../utils/constants'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Postagem = () => {
  const [idDica, setIdDica] = useState(0);
  const [idUsuario, setIdUsuario] = useState(0);
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [dicas, setDicas] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [urlImagem, setUrlImagem] = useState('');


  useEffect(() => {
    listarDicas()
    listarUsuario()
  }, []);

  //listando usuario
  const listarUsuario = () => {

    fetch('http://192.168.15.9:5000/api/usuario')
      .then(response => response.json())
      .then(dados => {
        setUsuario(dados.data);
        limparCampos();
      })
      .catch(err => console.error(err));
  }

  //listando dicas
  const listarDicas = () => {

    fetch('http://192.168.15.9:5000/api/dica')
      .then(response => response.json())
      .then(dados => {
        setDicas(dados.data);
        limparCampos();

      })
      .catch(err => console.error(err));
  }

  const uploadFile = (event) => {

    let formdata = new FormData();
    formdata.append('arquivo', event.target.files[0]);

    fetch(`${url}/upload`,
      {
        method: 'POST',
        body: formdata
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUrlImagem(data.url);
      })
      .catch(err => console.error(err))
  }


  const dica = {
    idDica: idDica,
    titulo: titulo,
    idUsuario: idUsuario,
    urlImagem: urlImagem,
    texto: texto,
  }



  const Salvar = (dica) => {

    let method = (idDica === 0 ? 'POST' : 'PUT');
    let urlRequest = (idDica === 0 ? url + '/dica' : url + '/dica/' + idDica);


    fetch(urlRequest, {
      method: method,
      body: JSON.stringify({
        idDica: idDica,
        titulo: titulo,
        idUsuario: idUsuario,
        urlImagem: urlImagem,
        texto: texto,
      }),
      headers: {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('token-edux')
      }
    })
      .then(response => {
        if (response.ok) {
          console.log(response.json());

          alert('Dica cadastrada com sucesso!');
        }
      })
  }

  const limparCampos = () => {
    setIdDica(0);
    setTitulo(1);
    setIdUsuario(0);
    setUrlImagem('');
    setTexto('');
  }

  return (
    
    )

  export default Postagem