import React,{useEffect, useState}from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Alunos = () => {

 const[alunos, setAlunos] = useState([]);

     useEffect(() => {
         listarAlunos();
     }, [])

const listarAlunos = () => {
    fetch(`http://192.168.7.130:5000/api/AlunoTurma`)
    .then(response => response.json())
    .then(dados => {
        setAlunos(dados)
        console.log(dados);
    })
    .catch(err => console.error(err));
}


    return (
      <View style={styles.container}>
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
      container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:60
      },
      listaAluno:{
        margin:10,
        padding:10,
        backgroundColor:"#00D65F",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:12,
        fontWeight:"bold"
      },
      Titulo:{color : '#9200D6',
        fontWeight : 'bold',
        fontStyle : 'oblique',
        fontSize : 27, 
        alignSelf:"center" 
      }

});

export default Alunos;