import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';

import { StatusBar } from 'expo-status-bar';

import ItemObjetivo from '../../components/ItemObjetivo';

 
const Objetivos = ({navigation}) => {

    const[objetivos, setObjetivos] = useState([]);

    useEffect(() => {
        listarObjetivos();
    }, [])

    const listarObjetivos = () => {
        fetch('http://192.168.15.9:5000/api/objetivo')
            .then(response => response.json())
            .then(dados => {
            setObjetivos(dados);
            console.log(dados);
        })
        .catch(err => console.error(err));
    }

    const renderItem = ({item}) => {
        return(
            <ItemObjetivo
                descricao = {item.descricao}
            />
        )
    }


    return(
        <View>
                <StatusBar hidden={true}/>
                <Header navigation={navigation}/>
            <Text style={styles.Titulo}>Objetivos</Text>
            <FlatList
                data={objetivos} 
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
    
    Titulo:{color : '#9200D6',
     fontWeight : 'bold',
      fontSize : 27, 
     alignSelf:"center" 
     }

  });

export default Objetivos;