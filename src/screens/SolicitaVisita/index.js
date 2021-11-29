import { parse } from '@babel/core'
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, AsyncStorage } from 'react-native'

import Database from '../../../Database'

const Solicita = ({navigation}) => {

    //
    const [solicita, setSolicita] = useState('')
    const [data, setData] = useState('')

    function getSolicita(solicita){
        setSolicita(solicita)
    }

    function getData(data){
        setData(data)
    }

    function buttoPress(){

        const solicitaItem = {solicita, data}

        Database.saveItem(solicitaItem).then(
            response => navigation.navigate('Messages', solicitaItem)
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Solicitar visita</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder="Motivo da visita"
                    clearButtonMode="always"
                    onChangeText={getSolicita}>
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Selecione a Data"
                    keyboardType="default"
                    clearButtonMode="always"
                    onChangeText={getData}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={buttoPress}
                >
                    <Text style={styles.buttonText}>Solicitar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Solicita

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8ECAE6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        marginBottom: 30,
        width: '90%',
        padding: 20,
        borderRadius: 10,
        //borderTopLeftRadius: 10,
        //borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#F7F3F3',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})