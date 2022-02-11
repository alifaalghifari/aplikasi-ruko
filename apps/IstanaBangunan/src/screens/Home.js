import React,{useState, useEffect} from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    FlatList,
    Keyboard,
    RefreshControl
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import {
    ListItem,
    SearchBar
} from 'react-native-elements'
import Axios from 'axios'
// import { API } from '../constants'

const API = `http://localhost:5500`
const style = StyleSheet.create({
    mainContainer: {
        height: "100%",
        // paddingHorizontal:
    },
    textTitle: {
        fontSize: 35,
        alignSelf: 'center',
        marginVertical: 10,
        color: '#39A2DB'
    },
    inputContainer:{
        flexDirection: 'row'
    },
    textInput:{
        backgroundColor: '#EDEDED',
        paddingVertical: 5,
        marginHorizontal: 5,
        borderRadius: 5,
        height: 50,
        flex: 1
    },
    btn:{
        height: '100%',
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: "lightblue",
        alignItems: 'center',
        alignSelf: 'center',
        
    },
    listItem: {
        height: 40,
        borderWidth: 1,
        borderColor: 'lightblue',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    listItemText: {
        alignSelf: 'center',
        marginHorizontal: 4
    },
    list: {
        width: '100%', 
        paddingHorizontal: 10,
    },
    pickerContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    picker: {
        width: "50%",
    }
})

const Home = (props) => {
    // const [arrayHolder, setArrayHolder] = useState([])
    const [data, setData] = useState([])
    let [arrayHolder, setArrayHolder] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [selectedValue, setSelectedValue] = useState("")

    const fetchData = () => {
        Axios.get(`http://192.168.43.2:5500/data/getAllData`)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            setArrayHolder(res.data)
        })
        .catch((err) => {
            console.log('data',err)
        })
    }

    const refreshHandler = () => {
        console.log('masuk')
        setIsRefreshing(true)
        Axios.get(`http://192.168.43.2:5500/data/getAllData`)
        .then((res) => {
            console.log('tes', res.data)
            setData(res.data)
            setArrayHolder(res.data)
            setIsRefreshing(false)

        })
        .catch((err) => {
            console.log('data',err)
            setIsRefreshing(false)

        })
    }

    const renderData = ({item}) =>{
        return(
            <View style={style.listItem}>
                <Text style={style.listItemText}>{item.nama_barang}</Text>
                <TouchableOpacity style={style.btn} activeOpacity={0.7} onPress={() => props.navigation.navigate('Detail', { item})}>
                    <Text>Selengkapnya</Text>
                </TouchableOpacity>
            </View>
        )
        
    }

    const databaseChange = ((itemValue, itemIndes) => {
        setSelectedValue(itemValue)
    })

    const searchFilterFunction = (text) => {
        const newData = arrayHolder.filter(item => {
            const itemData = `${item.nama_barang.toUpperCase()}`
            const textData = text.toUpperCase()

            return itemData.indexOf(textData) > -1
        })
        // // console.log(text)
        // // console.log(arrayHolder)
        setData(newData)
    }

    useEffect(() => {
        fetchData()
    } ,[])

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ ...style.mainContainer }}>
                <Text style={{ ...style.textTitle }}>Istana Bangunan</Text>

                {/* Picker, to selected database */}
                {/* <View style={style.pickerContainer}>
                    <Text style={{ fontSize: 18}}>Database : </Text>
                    <Picker
                    style={style.picker}
                    selectedValue={selectedValue}
                    onValueChange={databaseChange}
                    >  
                        <Picker.Item label="Alat Bangunan" value="alat_bangunan" />
                        <Picker.Item label="Alat Motor" value="alat_motor" />
                    </Picker>
                </View> */}
                

                {/* input, to search */}
                <View style={{ ...style.inputContainer }}>
                    <TextInput style={{ ...style.textInput }} placeholder="Cari..." onChangeText={text => searchFilterFunction(text)} />
                </View>


                {/* list, to see render item */}
                <FlatList 
                    style={style.list}
                    keyExtractor={(item) => item.nama_barang}
                    data={data}
                    renderItem={renderData}
                    // onEndReachedThreshold={5}
                    refreshControl={
                        <RefreshControl refreshing={isRefreshing} onRefresh={refreshHandler} />
                        // console.log('tes masuk')
                    }
                />
                

            </View>
        </TouchableWithoutFeedback>

    )
}

export default Home 