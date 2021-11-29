import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Messages from './src/screens/Messages'
import Solicita from './src/screens/SolicitaVisita'
import SolicitaMedicamento from './src/screens/SolicitaMedicamento'

const Stack = createNativeStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Sis Saúde" }} />
        <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
        <Stack.Screen name="Solicita" component={Solicita} options={{ title: "Solicitação de Visita" }} />
        <Stack.Screen name="SolicitaMedicamento" component={SolicitaMedicamento} options={{ title: "Solicitação de Medicamento" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
