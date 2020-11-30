import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import ItemTurma from '../../components/itemTurma';
 
const Turma = () => {

    const[turmas, setTurmas] = useState([]);

    useEffect(() => {
        listarTurmas();
    }, [])

    const listarTurmas = () => {
        fetch(`http://192.168.0.11:5000/api/turma`)
            .then(response => response.json())
            .then(dados => {
            setTurmas(dados);
            console.log(dados);
        })
        .catch(err => console.error(err));
    }

    const renderItem = ({item}) => {
        return(
            <ItemTurma
                descricao = {item.descricao}
            />
        )
    }


    return(
        <View>
            <Text style={styles.Titulo}>Turmas</Text>
            <FlatList
                data={turmas}
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
      fontStyle : 'oblique',
      fontSize : 27, 
     alignSelf:"center" 
     }

  });

export default Turma;