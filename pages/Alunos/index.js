import React,{useEffect, useState}from 'react';
import Header from './../../components/Header'
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
    .catch(err => console(err));
}

const Item = ({ item }) =>{
    return (
      <View style={styles.listaAluno}>
        <Text style={styles.nomeAluno}>{item.nome}</Text>
      </View> 
    );
  }


    return (
      <View style={styles.container}>
          <Header />
          <Text style={styles.Titulo}>Alunos</Text>

          <FlatList
              data={alunos}
              renderItem={({ item }) => <Item item={item}/>}
              keyExtractor={(item) => item.id}    
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
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
      },
      Titulo:{
        alignSelf:"center",
        fontSize:"22px",
        fontFamily:'TitilliumWeb_600SemiBold',
        marginTop:15,
        color: "#9100d6"
      },
});
 export default Alunos;