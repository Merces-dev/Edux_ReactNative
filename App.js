import React from 'react';

//Pages
import Login from './pages/Login'
import Alunos from './pages/Alunos'

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Alunos" component={Alunos} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
