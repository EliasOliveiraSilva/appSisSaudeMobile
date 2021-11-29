import * as React from 'react'
import {Alert, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { useState, useEffect } from 'react'

const Login = ({navigation}) => {

    const [email, setEmail] = useState(null)
    const [cpf, setCpf] = useState(null)

    async function sendForm(){
      let response = await fetch('http://192.168.0.106:3000/api/user/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          email: email,
          cpf: cpf
        })
      })
      
      let json = await response.json()
      if(json === 'erro'){
        await AsyncStorage.clear()
        console.log("Erro ao conectar")
      }else{
        let userData = await AsyncStorage.setItem('userData', JSON.stringify(json))
        let resData = await AsyncStorage.getItem('userData')
        console.log(JSON.parse(resData))
      }
      navigation.navigate('Home')
    }

    return(

        <View style={styles.container}>
        <Image 
          source={require('../../assets/estetoscopio.jpg')}
          style={styles.logo}
        />

        <TextInput
          style={styles.input} 
          placeholder="Digite seu e-mail"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          onChangeText={text => setCpf(text)}
        />
        <TouchableOpacity
          style={styles.botao}
          onPress={() => sendForm()}
        >
          <Text style={styles.botaoText}>Login</Text>

        </TouchableOpacity>
  
      </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
    },
  
    logo:{
      width: 150,
      height: 150,
      borderRadius: 100
    },
     input:{
       marginTop: 10,
       padding: 10,
       width: 300,
       backgroundColor: '#fff',
       fontSize: 16,
       fontWeight: 'bold',
       borderRadius: 4
     },
     botao:{
       width: 300,
       height: 42,
       backgroundColor: '#3498db',
       marginTop: 10,
       borderRadius: 4,
       justifyContent: 'center',
       alignItems: 'center'
     },
     botaoText:{
       fontSize: 16,
       fontWeight: 'bold',
       color: '#fff'
     }
  })
  