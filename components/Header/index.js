import React from 'react';
import { View, Alert, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Logo from './../../assets/logo.png'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Header = ({navigation}) => {

  const Logout = () =>{
    Alert.alert(
      "Sair",
      "Deseja sair?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => {
          AsyncStorage.removeItem('@jwt');
          navigation.push('Login');
        } }
      ],
      { cancelable: false }
    );
  }

        
    
  

return (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={Logo}
    />
    <TouchableOpacity onPress={Logout}>
      <FontAwesome name="sign-out" size={30} color='#fff' />
    </TouchableOpacity>
  </View>
)
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#9200D6',
    display: 'flex',
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 80,
    height: 25
  }
});

export default Header;
