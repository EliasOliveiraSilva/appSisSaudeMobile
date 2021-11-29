import React from "react"
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Database from '../../../Database'

const Items = (props) => {

    async function EditPress() {

        const item = await Database.getItem(props.id)
        props.navigation.navigate('SolicitaMedicamento', item)
    }

    function DeletePress() {

        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este item?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => {
                        Database.deleteItem(props.id).then(
                            (response => props.navigation.navigate('Messages', {id: props.id}))
                        )
                    }
                }
            ],
            {
                cancelable: false
            }
        )

    }

    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={DeletePress}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} onPress={EditPress}>
                    <Text style={styles.buttonText} >Editar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Items

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
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
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
})