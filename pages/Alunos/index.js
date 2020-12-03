import React,{useEffect, useState}from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';

const Alunos = ({navigation}) => {

 const[alunos, setAlunos] = useState([]);

     useEffect(() => {
         listarAlunos();
     }, [])

const listarAlunos = () => {
    fetch(`http://192.168.15.9:5000/api/AlunoTurma`)
    .then(response => response.json())
    .then(dados => {
        setAlunos(dados)
        console.log(dados);
    })
    .catch(err => console.error(err));
}


    return (
      <View >
         <Header navigation={navigation}/>
          <Text style={styles.Titulo}>Alunos</Text>

          <FlatList
              data={alunos}
              keyExtractor={(item) => item.idAlunoTurma}    
              renderItem={({ item }) => <Text style={styles.listaAluno}>{item.idUsuarioNavigation.nome}</Text>}
          />

        </View>
    );
    
  
}
const styles = StyleSheet.create({
     
      listaAluno:{
        margin:10,
        padding:10,
        backgroundColor:"#00D65F",
        width:300,
        textAlign:"center",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:12,
        fontWeight:"bold"
      },
      Titulo:{color : '#9200D6',
        fontWeight : 'bold',
        fontSize : 27, 
        alignSelf:"center" 
      }

});

export default Alunos;