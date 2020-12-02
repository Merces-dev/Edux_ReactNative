
import React from 'react';

//Pages
import Home from './pages/Home'
import Turmas from './pages/Turmas'
import Objetivos from './pages/Objetivos'
import Login from './pages/Login'
import Postagem from './pages/Postagem'

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Hidden = () => {
  return null;
}



const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = 'school';
          } else if (route.name === 'Objetivos') {
            iconName = 'graduation-cap';
          }
          else if (route.name === 'Turmas') {
            iconName = 'chalkboard-teacher';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#00B751',
        inactiveBackgroundColor: '#00D65F',
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        labelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
          margin: 0,
          padding: 0,
        },
      }
      }>
      <Tab.Screen name="Início" component={Home} />

      <Tab.Screen name="Turmas" component={Turmas} />

      <Tab.Screen name="Objetivos" component={Objetivos} />

    </Tab.Navigator>

  )
}

//App
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: false,
        headerRight: () => (
          <View>
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.removeItem('@jwt');
                navigation.push('Login');
              }}
              style={{ marginRight: 20 }}
              underlayColor={"#8404D9"}
            >
              <MaterialCommunityIcons name="logout" color={"white"} size={30} />
            </TouchableOpacity>
          </View>
        )
      }}>
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false, drawerLabel: Hidden }} />
        <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ drawerLabel: "Home" }} />
        <Drawer.Screen name="Timeline" component={Postagem} options={{ drawerLabel: "Timeline" }} />


      </Drawer.Navigator>
    </NavigationContainer >



  );
}




