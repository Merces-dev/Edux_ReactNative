import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import Header from '../../components/Header';

import ItemPostagem from '../../components/itemPostagem';
 
const Postagem = () => {

    const[postagens, setPostagens] = useState([]);

    useEffect(() => {
        listarPostagens();
    }, [])

    const listarPostagens = () => {
        fetch(`http://192.168.0.13:5000/api/postagem`)
            .then(response => response.json())
            .then(dados => {
            setPostagens(dados);
            console.log(dados);
        })
        .catch(err => console.error(err));
    }

    const renderItem = ({item}) => {
        return(
            <ItemPostagem
                descricao = {item.descricao}
            />
        )
    }


    return(
        <View>
                <StatusBar hidden={true}/>

            <Header/>
            <Text style={styles.Titulo}>Postagens</Text>
            <FlatList
                data={postagens}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
            />
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:60
      },
      listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
      },
    Titulo:
    {color : '#9200D6',
     fontWeight : 'bold',
      fontSize : 27, 
     alignSelf:"center" 
     }

  });

export default Postagem;