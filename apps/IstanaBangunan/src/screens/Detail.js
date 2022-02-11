import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import Noimage from '../assets/images/no-image.png'

const style = StyleSheet.create({
    imageContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 5,
        paddingBottom: 5,
        // borderBottomWidth: 0.4
    },
    descContainer : {
        backgroundColor: '#F5F5F5',
        height: '100%',
        paddingStart: 20,
        color: 'white'
    },  
    name:{
        fontSize: 28,
        fontWeight: 'bold',
        color:'lightblue'
    },
    price: {
        color: '#191919',
    }
})

const Detail = (props) => {
    return(
        <View style={{ backgroundColor: 'white', height: '100%'}}>
            <View style={style.imageContainer}>
                <Image source={Noimage}  />
            </View>
            <View style={style.descContainer}>
                <Text style={style.name}>{props.route.params.item.nama_barang}</Text>
                <Text style={style.price}>Rp {props.route.params.item.harga_jual}</Text>
                <Text>{props.route.params.item.stok}</Text>
                <View>
                    <Text>{props.route.params.item.keterangan}</Text>

                </View>
            </View>
            
        </View>
    )
}

export default Detail