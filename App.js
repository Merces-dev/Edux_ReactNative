import React from 'react';

//Pages
import Login from './pages/Login'
import Turmas from './pages/Turmas'


//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();



export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({  color, size }) => {
                  let iconName;

                  if (route.name === 'Início') {
                    iconName = 'school';
                  } else if (route.name === 'Objetivos') {
                    iconName =  'graduation-cap';
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
                  fontWeight:'bold',
                  margin: 0,
                  padding: 0,
                },
              }        
          }>
          <Tab.Screen name="Início" component={Login} />
          <Tab.Screen name="Turmas" component={Turmas} />
          <Tab.Screen name="Objetivos" component={Turmas} />

        </Tab.Navigator>
      </NavigationContainer>
  );
}
