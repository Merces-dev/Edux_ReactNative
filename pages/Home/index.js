import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import jwt_decode from 'jwt-decode'
import { View, Text, StyleSheet, Image, Button, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Home = () => {

   // const token = async (value) => await AsyncStorage.getItem('@jwt')
    //upload de imagem
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {


        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }



    };





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



            <Header/>


            <Text style={styles.Titulo}>RANKING GERAL</Text>

            {/* upload de imagem */}
            <View >
                <Button color="#9200d2" title="Selecione uma imagem de perfil" onPress={pickImage} />
            </View>


            <View style={styles.Caixote} >
                <View>
                    {<Image source={{ uri: image }} style={styles.UserIcon} />}
                </View>
                <Text style={styles.Usuario}>Maria Eduarda Silva</Text>
                <Text style={styles.Turma}>2º - Desenvolvimento de Sistemas</Text>

            </View >


            <View style={styles.BallLine1}>
                <Text style={styles.NumberRanking}> 4º </Text>
                <Text style={styles.AllRanking}>10</Text>
                <Text style={styles.NameRanking}>Objetivos Concluídos</Text>
            </View >

            <View style={styles.BallLine2}>
                <Text style={styles.NumberRanking}> 8º </Text>
                <Text style={styles.AllRanking}>100</Text>
                <Text style={styles.NameRanking}>Posts Curtidos</Text>
            </View >

            <View style={styles.BallLine3}>
                <Text style={styles.NumberRanking}> 3º </Text>
                <Text style={styles.AllRanking}>15</Text>
                <Text style={styles.NameRanking}>Segredos Encontrados</Text>
            </View >

            <View style={styles.BallLine4}>
                <Text style={styles.NumberRanking}> 1º </Text>
                <Text style={styles.AllRanking}>50</Text>
                <Text style={styles.NameRanking}>Notas Máximas</Text>
            </View >




        </View>
    )



}


//stylesheet
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
        marginLeft: 56,
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
    },
    UserIcon: {
        height: 96,
        width: 100,
        shadowRadius: 10,
        borderRadius: 80,
        zIndex: 1
    },
    Turma: {
        textAlign: "center",
        // position: 'absolute',
        color: 'black',
        zIndex: 1,
        marginLeft: 60,
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
        marginTop: 461,
        marginLeft: 250,
    },
    BotaoFoto: {
        width: 100,
        color: 'purple'
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

