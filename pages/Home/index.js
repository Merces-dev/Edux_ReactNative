import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import UserIcon from './../../assets/usericon.png'
import { color } from 'react-native-reanimated';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ItemHome from '../../components/itemHome';


const Home = () => {



    //  useEffect(() => {
    //      listarUsuario();
    //  }, [])

    // const listarUsuario = () => {
    //     fetch(`http://192.168.15.9:5000/api/usuario`)
    //         .then(response => response.json())
    //         .then(dados => {
    //         setUsuarios(dados);
    //         console.log(dados);
    //     })
    //     .catch(err => console.error(err));
    // }


    // const renderItem = ({item}) => {
    //     return(
    //         <ItemHome
    //             nome = {item.nome}
    //         />
    //     )
    // }


    return (
        <View>

            <Header />
            <Text style={styles.Titulo}>RANKING GERAL</Text>

            <View style={styles.Caixote}>
                <Image source={UserIcon} style={styles.UserIcon} />
                <Text style={styles.Usuario}>Paulo Roberto Brandão</Text>
                <Text style={styles.Turma}>1º - Desenvolvimento de Sistemas</Text>
            </View >

            <View style={styles.BallLine1}>
                <Text style={styles.NumberRanking}> 1º </Text>
                <Text style={styles.AllRanking}>40</Text>
                <Text style={styles.NameRanking}>Objetivos Concluídos</Text>
            </View >

            <View style={styles.BallLine2}>
                <Text style={styles.NumberRanking}> 4º </Text>
                <Text style={styles.AllRanking}>234</Text>
                <Text style={styles.NameRanking}>Posts Curtidos</Text>
            </View >

            <View style={styles.BallLine3}>
            <Text style={styles.NumberRanking}> 9º </Text>
                <Text style={styles.AllRanking}>10</Text>
                <Text style={styles.NameRanking}>Segredos Encontrados</Text>
            </View >

            <View style={styles.BallLine4}>
            <Text style={styles.NumberRanking}> 4º </Text>
                <Text style={styles.AllRanking}>34</Text>
                <Text style={styles.NameRanking}>Notas Máximas</Text>
            </View >




        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 60
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "black",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    Titulo:
    {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 27,
        alignSelf: "center"
    },
    Usuario: {
        color: 'black',
        textAlign: "center",
        marginTop: -70,
        marginLeft: 50,
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
    },
    UserIcon: {
        height: 100,
        width: 100,
        borderRadius: 83,
        zIndex: 1
    },
    Turma: {
        textAlign: "center",
        // position: 'absolute',
        color: 'black',
        zIndex: 1,
        marginLeft: 50,
        marginBottom: 30,
        display: 'flex',
        color: '#fff',
        fontSize: 11,
    },
    Caixote: {
        marginTop: 40,
        marginLeft: 45,
        height: 96,
        width: 320,
        backgroundColor: '#9200d2',
        borderRadius: 83,
    },
    View: {
        margin: 0,
        padding: 0
    },
    NumberRanking: {
        color: 'white',
        fontSize: 40,
        marginLeft: 40,
        marginTop: 10,
        fontWeight: "bold",
    },
    NameRanking: {
        marginLeft: 20,
        marginRight: 20,
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
    },
    AllRanking: {
        marginLeft: 55,
        color: 'white',
    },
    BallLine1: {
        backgroundColor: '#00D65F',
        borderRadius: 83,
        width: 130,
        height: 130,
        marginTop: 50,
        textAlign: 'center',
        alignSelf: 'center',
    },
    BallLine2: {
        backgroundColor: '#00C2EE',
        borderRadius: 83,
        width: 130,
        height: 130,
        position: 'relative',
        marginLeft: 30,
        bottom: 2,
     
    },
    BallLine3: {
        backgroundColor: '#F9E800',
        borderRadius: 83,
        width: 130,
        height: 130,
        display: 'flex',
        position: 'absolute',
        marginTop: 421,
        marginLeft: 250,
    },
    BallLine4: {
        backgroundColor: '#FF271C',
        borderRadius: 83,
        width: 130,
        height: 130,
        marginTop: -10,
        textAlign: 'center',
        alignSelf: 'center',

    }
});

export default Home;




