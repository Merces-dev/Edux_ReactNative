import React from 'react';
import {View, Text, Button,  StyleSheet, Image,TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import Logo from './../../assets/logo.png'



const Header = () => {
    const Logout = ({navigation}) =>{
        return(
          <View>
            <Text>Deseja sair do app?</Text>
            <Button title="Sair" onPress={() => {
              AsyncStorage.removeItem('@jwt');
              navigation.push('Login');
            }} />
          </View>
        )
      }
      
    return(
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={Logo}
            />
            <TouchableOpacity onPress={Logout}>
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