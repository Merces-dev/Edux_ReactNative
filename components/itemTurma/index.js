import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:60
    },
    listItem:{
      margin:10,
      padding:10,
      backgroundColor:"#00D65F",
      width:"80%",
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:12
    }

  });

const ItemTurma = (turma) => {
    const {descricao} = turma;

    return (
        <View style={styles.listItem}>
            <View style={{alignItems:"center",flex:1}}>
                <Text style={{fontWeight:"bold"}}>{descricao}</Text>
            </View>
        </View>
    )
}

export default ItemTurma;