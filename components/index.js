import React from 'react';
import {View,  StyleSheet, Image,TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import Logo from './../../assets/logo.svg'


const Header = () => {
    return(
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={Logo}
            />
            <TouchableOpacity>
                <FontAwesome name="sign-out" size={30} color='#fff'/>
            </TouchableOpacity>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        maxHeight:50,
        backgroundColor: '#9200D6',
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20
    },
    image:{
        width:80,
        height:25
    }
  });
  
export default Header;