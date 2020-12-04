import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    listItem: {
        borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00C2EE',
    textAlign: 'center',
    alignSelf: "center",
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 20,
    width: "80%",
    marginVertical: 25
       
    }

});

const ItemPost = (dica) => {
    const { texto } = dica;
    const { urlImagem } = dica;

    return (
        <View style={styles.listItem}>
            <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontWeight: "bold" }}>{texto}</Text>
                <Text> <Image src={urlImagem}  /> </Text>
            </View>
        </View>
    )
}

export default ItemPost;