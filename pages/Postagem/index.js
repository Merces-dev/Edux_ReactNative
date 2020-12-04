
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { StatusBar } from 'expo-status-bar';
import jwt_decode from "jwt-decode";
import * as ImagePicker from 'expo-image-picker';
import ItemPost from '../../components/ItemPost'

let url = 'http://192.168.15.9:5000/api'

const Postagem = () => {
  const [idDica, setIdDica] = useState(0);
  const [texto, setTexto] = useState('');
  const [dicas, setDicas] = useState([]);
  const [urlImagem, setUrlImagem] = useState('');


  useEffect(() => {
    listarDicas()
  }, []);

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
    urlImagem: urlImagem,
    texto: texto,
  }



  const salvar = (dica) => {

    let method = (idDica === 0 ? 'POST' : 'PUT');
    let urlRequest = (idDica === 0 ? url + '/dica' : url + '/dica/' + idDica);


    fetch(urlRequest, {
      method: method,
      body: JSON.stringify({
        idDica: idDica,
        urlImagem: urlImagem,
        texto: texto,
      }),
      headers: {
        'content-type': 'application/json',
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
    setUrlImagem('');
    setTexto('');
  }

  const renderItem = ({item}) => {
    return(
        <ItemPost
            texto = {item.texto}
            urlImagem = {item.urlImagem}
        />
    )
}

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
        onChange={event => setTexto(event.target.value)}
      />

      <View style={styles.buttons}>

        <TouchableOpacity
          style={styles.buttonUnityGray}
          onChange={event => uploadFile(event)}
        >
          {/* {urlImagem && <img src={urlImagem}  />} */}
          <Text style={styles.buttonText}>Escolher Imagem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonUnityGreen}
          onPress={salvar}
        >
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>

      </View>


      

      <FlatList
        data={dicas}
        renderItem={renderItem}
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



