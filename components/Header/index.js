import React from 'react';
import {View,  StyleSheet, Image,TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import Logo from './../../assets/logo.png'



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
        height: 50,
        backgroundColor: '#9200D6',
        display:'flex',
        marginBottom: 20,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        padding:20
    },
    image:{
        width:80,
        height:25
    }
  });
  
export default Header;