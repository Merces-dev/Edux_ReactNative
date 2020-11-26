import React from 'react';
import Header from './../../components/Header'
//import Footer from './../../components/Footer'
import { StyleSheet, Text, View, FlatList } from 'react-native';

const listarAlunos = () => {
    fetch(`http://192.168.7.130:5000/api/alunoturma`)

    .then(response => response.json())
    .then(dados => {
        setAlunos(dados)
        console.log(dados);
    })
    .catch(err => console(err));
}

function Alunos({ item }) {
    return (
      <View style={styles.listaAluno}>
        <Text style={styles.nomeAluno}>{item.nome}</Text>
      </View> 
    );
  }

export default class App extends React.Component {
    listaAluno = {
        data:[
         {id: "01", nome:"kailane"},
         {id: "02", nome:"Ana"},
         {id: "03", nome:"Pedro"},
         {id: "04", nome:"Henrique"},
         {id: "05", nome:"Maria"},
        ]
      }
  
  
    render(){
    return (
      <View style={styles.container}>
          <Header />
          <Text>Alunos</Text>

        <FlatList
            data={this.listaAluno.data}
            renderItem={({ item }) => <Alunos item={item}/>}
            keyExtractor={(item) => item.id}    
        />
      </View>
    );
  }
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
      }
});
