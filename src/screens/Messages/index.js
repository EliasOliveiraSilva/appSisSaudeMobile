import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, StatusBar, FlatList, ActivityIndicator, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native'
import Items from '../Items'
import Database from '../../../Database'

const Messages = ({route, navigation}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        async function getUser() {
            let response = await AsyncStorage.getItem('userData')
            let json = JSON.parse(response)
            setUser(json.nome)
        }
        getUser()
    }, [])

    const [userMedicamento, setUserMedicamento] = useState(null)

    useEffect(() => {
        async function getUserMedicamento() {
            let response = await AsyncStorage.getItem('userData')
            let json = JSON.parse(response)
            setUserMedicamento(json.solitacaoMedicamento)
        }
        getUserMedicamento()
    }, [])

    const [items, setItems] = useState([])

    useEffect(() => {
        Database.getItems().then(items => setItems(items))
    }, [route])

    return(
        <View style={styles.container}>
            {/*<View style={styles.block1}><Text>Atenção para o horário de seu medicamento  {userMedicamento}, conforme determinação do seu médico. </Text></View>*/}
            <Text style={styles.textItem}> Ola seja bem vindo(a) {user}</Text>
            <StatusBar style='light' />
            <ScrollView style={styles.scrollContainer} 
            contentContainerStyle={styles.itemsContainer}>
                {items.map(item => {
                    return <Items Key={item.id} id={item.id} item={item.quantidade + ' Unidade(s) ' + ' de ' + item.solicitaMedicamento} navigation={navigation}/>
                })}
            </ScrollView>
        </View>
     
    )
}

export default Messages

const styles = StyleSheet.create({
    container:{
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
        marginBottom: 20
      },
      scrollContainer: {
        flex: 1,
        width: '90%'
      },
      itemsContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 15,
        padding: 20,
        borderRadius: 10,
        //borderTopLeftRadius: 10,
        //borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
      },
      textItem: {
          fontSize: 20,
      }
})