import React, {useEffect, useState} from 'react'
import { Text, View } from 'react-native'
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
            <Text>Turmas</Text>
            <FlatList
                data={turmas}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Turma;