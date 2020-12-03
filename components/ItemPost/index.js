import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Button } from 'react-native';
import { Icon } from 'react-native-elements';

import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 60
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 2,
        //   borderColor: '#00C2EE' Azul claro
        //   borderColor: '#341948'
        borderColor: '#00C2EE'
    },
    descricao: {
        marginTop: 15,
        color: 'black'
    }
});

const ItemPost = (dicas) => {


    const { texto, imagem, data, id } = dicas;

    const image = () => {
        if (imagem === "") {
            return (
                <Text style={{ alignSelf: 'center', marginTop: 5, fontFamily: 'TitilliumWeb_300Light_Italic' }}>Não há imagem </Text>
            )
        }
        else {
            return (
                <Image source={{ uri: imagem }} style={{ width: 294, height: 160, borderRadius: 4 }} />
            );
        }
    };







    return (
        <View style={styles.listItem}>

            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

                {image()}

                <View style={styles.texto}>
                    <Text style={{ width: 290, fontFamily: 'TitilliumWeb_400Regular', color: '#323133' }}>{texto}</Text>
                 

                </View>

                <View style={{ alignItems: "center", flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: 50, width: 100, alignItems: "center", flexDirection: 'row' }}>
                        <TouchableOpacity
                            key={id}
                           
                        >

                            <Icon
                                name='heart'
                                type='font-awesome'
                                color='#00C2EE'
                            // reverseColor='true'
                            />
                        </TouchableOpacity>
                        <Text style={{ color: "#00C2EE", marginLeft: 15, fontSize: 20, fontFamily: 'TitilliumWeb_400Regular' }}></Text>
                        {/* <Text style={{color:"blue", marginLeft: 15, fontSize: 20}}>3567</Text> */}
                    </View>

                    {/* <Text style={{color:"blue"}}>22/11/2020</Text> */}
                    <Text style={{ color: "#00C2EE", fontFamily: 'TitilliumWeb_400Regular' }}>{data}</Text>
                </View>
            </View>

        </View>
    )
}

export default ItemPost;