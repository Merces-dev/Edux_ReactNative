import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import ItemObjetivo from '../../components/itemObjetivo';

 
const Objetivos = () => {

    const[objetivos, setObjetivos] = useState([]);

    useEffect(() => {
        listarObjetivos();
    }, [])

    const listarObjetivos = () => {
        fetch(`http://192.168.0.104:5000/api/objetivo`)
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
    
    Titulo:{color : 'purple',
     fontWeight : 'bold',
      fontStyle : 'oblique',
      fontSize : 27, 
     alignSelf:"center" 
     }

  });

export default Objetivos;