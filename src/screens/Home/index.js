import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native'

const Home = ({ navigation }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function getUser() {
            let response = await AsyncStorage.getItem('userData')
            let json = JSON.parse(response)
            setUser(json.nome)
        }
        getUser()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.block0}><Text style={styles.titleMain}>Ola seja bem vindo(a) {user}</Text></View>
            <View style={styles.block2}>
                <Text>Recomendações e recados para você</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Messages')}>
                    <Text style={styles.buttonText}>Recados</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.block01}>
                <Text>Serviços para você no App</Text>
            </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Solicita')}>
                    <Text style={styles.buttonText}>Agendar Visita</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SolicitaMedicamento')}>
                    <Text style={styles.buttonText}>Solicitar Medicamento</Text>
                </TouchableOpacity>
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'column',
        flex: 1,
        padding: 15,
        //justifyContent: 'flex-start',
        //alignItems: 'center',
        backgroundColor: '#8ECAE6'
    },
    block0: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 10,
        //borderRadius: 10, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAEDCA"
    },
    block01: {
        flex: 1,
        borderRadius: 10, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    block1: {
        flex: 2,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2C078"
    },
    block2: {
        flex: 3,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "#7EBC89"
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAction: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#FF8C00',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
    //
    ,
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    titleMain: {
        color: '#34495E',
        fontSize: 20,
        fontWeight: 'bold'
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