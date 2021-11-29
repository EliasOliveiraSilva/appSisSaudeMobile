import {AsyncStorage} from 'react-native'

async function saveItem(pedidoItem, id) {
    pedidoItem.id = id ? id : new Date().getTime()

    const saveItems = await getItems()

    if(id){
        const index = await saveItems.findIndex(item => item.id === id)
        saveItems[index] = pedidoItem
    }else{
        saveItems.push(pedidoItem)
    }

    return AsyncStorage.setItem('items', JSON.stringify(saveItems))
}

async function saveItemVisita(solicitaItem, id){
    solicitaItem.id = id ? id : new Date().getTime()

    const saveItemsVisita = await getItems()

    if(id){
        const index = await saveItemsVisita.findIndex(item => item.id === id)
        saveItemsVisita[index] = solicitaItem
    }else{
        saveItemsVisita.push(solicitaItem)
    }

    return AsyncStorage.setItem('items', JSON.stringify(saveItemsVisita))
}

function getItems(){
    return AsyncStorage.getItem('items').then(
        response => {
            if(response) 
            return Promise.resolve(JSON.parse(response))
            else
            return Promise.resolve([])
        }
    )
}

async function getItem(id){
    const savedItems = await getItems()
    return savedItems.find(item => item.id === id)
}

async function deleteItem(id){
    let savedItems = await getItems()
    const index = await savedItems.findIndex(item => item.id === id)
    savedItems.splice(index, 1)
    return AsyncStorage.setItem('items', JSON.stringify(savedItems))
}

module.exports = {
    saveItem,
    saveItemVisita,
    getItems,
    getItem,
    deleteItem
}