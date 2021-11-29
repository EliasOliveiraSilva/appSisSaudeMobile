import React, { useState, useEffect } from 'react'
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, AsyncStorage } from 'react-native'

import Database from '../../../Database'

const SolicitaMedicamento = ({route, navigation}) => {

    //
    const id = route.params ? route.params.id : undefined
    const [solicitaMedicamento, setSolicitaMedicamento] = useState('')
    const [quantidade, setQuantidade] = useState('')

    useEffect(() => {
        if(!route.params)
        return
        setSolicitaMedicamento(route.params.solicitaMedicamento)
        setQuantidade(route.params.quantidade.toString())
    }, [route])

    function getSolicitaMedicamento(solicitaMedicamento){
        setSolicitaMedicamento(solicitaMedicamento)
    }

    function getQuantidade(quantidade){
        setQuantidade(quantidade)
    }

    async function buttoPress(){

        const pedidoItem = {solicitaMedicamento, quantidade: parseInt(quantidade)}

        Database.saveItem(pedidoItem, id).then(
            response => navigation.navigate('Messages', pedidoItem)
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Solicitar Medicamento</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder="Nome do medicamento"
                    clearButtonMode="always"
                    value={solicitaMedicamento}
                    onChangeText={getSolicitaMedicamento}>
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Indique a quantidade"
                    keyboardType="default"
                    clearButtonMode="always"
                    value={quantidade}
                    onChangeText={getQuantidade}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={buttoPress}
                >
                    <Text style={styles.buttonText}>Solicitar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SolicitaMedicamento

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