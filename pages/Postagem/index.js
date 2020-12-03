import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { StatusBar } from 'expo-status-bar';
import jwt_decode from "jwt-decode";
import * as ImagePicker from 'expo-image-picker';
import ItemPost from '../../components/ItemPost'
import url from '../../utils/constants'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Postagem = () => {

  const [idDica, setIdDica] = useState(0);
  const [texto, setTexto] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [image, setImage] = useState(null);
  const [dicas, setDicas] = useState([]);

  
  
 

  //Selecionar imagem
  const pickImage = async () => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri)
    }
  };

  //Listar Dicas
  useEffect(() => {
    listarDicas();

  }, []);

  //Chamada Dicas
  const listarDicas = () => {
    fetch('http://192.168.15.9:5000/api/dica')
      .then(response => response.json())
      .then(data => {
        setDicas(data)
        limparCampos();
      })
      .catch(err => console.error(err));
  }

  //Limpar Campos
  const limparCampos = () => {
    setIdDica(0);
    setTexto('');
    setImage(null);
    
  }

  //Salvar Dica
  const salvar = (event) => {
    event.preventDefault();

    if (texto === "") {
      return (
        alert("Digite algo")
      )
    }
    else {
      const dica = {
        texto: texto,
        urlImagem: image,
        idDica: idDica
      }

      let method = (idDica === 0 ? 'POST' : 'PUT');
      let urlRequest = (idDica === 0 ? `${url}` : `${url}/${idDica}`);

      fetch(urlRequest, {
        method: method,
        body: JSON.stringify(dica),
        headers: {
          'content-type': 'application/json'

        }
      })
        .then(response => response.json())
        .then(dados => {
          alert('Dica publicada!');

          limparCampos();
        })
        .catch(err => console.error(err))
    }

  }

  const renderItem = ({ item }) => (
    <ItemPost texto={item.texto} imagem={item.urlImagem} data={item.data} id={item.id}/>
  );


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
        onChangeText={text => setTexto(text)}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonUnityGray}
          onPress={pickImage}

        >
          <Text style={styles.buttonText}>Escolher Imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonUnityGreen}
          onPress={salvar}
        >
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'white', justifyContent: "center", alignItems: 'center', }}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 15, borderRadius: 3 }} />}
      </View>

      <FlatList
        data={dicas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ backgroundColor: 'white' }}
      />
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