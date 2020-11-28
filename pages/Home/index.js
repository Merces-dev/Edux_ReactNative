import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import UserIcon from './../../assets/usericon.png'
import { color } from 'react-native-reanimated';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ItemHome from '../../components/itemHome';


const Home = () => {



    // useEffect(() => {
    //     listarUsuario();
    // }, [])

    // const listarUsuario = () => {
    //     fetch(`http://192.168.15.9:5000/api/usuario`)
    //         .then(response => response.json())
    //         .then(dados => {
    //         setUsuarios(dados);
    //         console.log(dados);
    //     })
    //     .catch(err => console.error(err));
    // }

    // returnToken = async () => {
    //     let tokenFindStorage = await AsyncStorage.getItem('token-edux');
    //     this.setState({ nome: jwt(tokenFindStorage).nome })
    //     this.setState({ turma: jwt(tokenFindStorage).email })
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
             
           
            {/* <FlatList
                data={usuarios}
                renderItem={renderItem}
            /> */}
        <View style={styles.Caixote}>
            <Image source={UserIcon} style={styles.UserIcon} />
            <Text style={styles.Usuario}>Paulo Roberto Brandão</Text>
            <Text style={styles.Turma}>1º - Desenvolvimento de Sistemas</Text>
        </View >

        <View style={styles.BallLine1}>
        <Text> Este é o breu Olá breu
        Este é o breu Olá breu      
        Este é o breu Olá breu
        Este é o breu Olá breu

        </Text>
            
        </View >

        <View style={styles.BallLine2}>
            
        </View >
        <View style={styles.BallLine3}>
            
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
        marginTop:-70,
        marginLeft: 50,
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
        // left: 45,
        // right: 50,
        // top: 147,

        // // backgroundColor: '#9200D6',
        // borderRadius: 83,
        // display: "flex",
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
        display:'flex',
        color: '#fff',
        fontSize: 11,
    },
    Caixote:{
        marginTop: 40,
        marginLeft: 45,
        height: 96,
        width:320,
        backgroundColor: '#9200d2',
        borderRadius: 83,
    },
    View:{
        margin: 0,
        padding:0
    },
    BallLine1:{
        backgroundColor: '#00D65F',
        borderRadius: 83,
        width: 130,
        height: 130,
        marginLeft: 135,
        marginTop: 100,
        textAlign: 'center'
    }
});

export default Home;




