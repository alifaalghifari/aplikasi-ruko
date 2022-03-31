import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Keyboard,
  RefreshControl,
  Modal,
  Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ListItem, SearchBar} from 'react-native-elements';
import Axios from 'axios';

const style = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  textTitle: {
    fontSize: 35,
    alignSelf: 'center',
    marginVertical: 10,
    color: '#39A2DB',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#EDEDED',
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    height: 30,
  },
  btn: {
    height: '100%',
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    alignSelf: 'center',
  },
  listItem: {
    height: 40,
    // borderWidth: 1,
    // color: 'blue',
    // backgroundColor: '#EFFFFD',
    // borderColor: '#EFFFFD',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 1,
    // marginVertical: 5,
  },
  listItemText: {
    alignSelf:'flex-start',
    marginHorizontal: 4,
  },
  list: {
    width: '100%',
    paddingHorizontal: 2,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // modal
  modal: {
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    view: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
    },
    btn: {
    backgroundColor: 'lightblue',
      
      width: 90,
      paddingVertical: 8,
      textAlign: 'center',
      marginLeft: 2,
      marginBottom: 5,
      borderRadius: 5
    },
    btnText: {
      textAlign: 'center',
      color:'white'
    }
  },
});

const Home = props => {
  const [wifi, setWifi] = useState('192.168.43.2');
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  let [arrayHolder, setArrayHolder] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const fetchData = () => {
    Axios.get(`http://${wifi}:5500/data/getAllData`,{
      timeout: 100
    })
      .then(res => {
        // console.log(res.data);
        setData(res.data);
        setArrayHolder(res.data);
      })
      .catch(err => {
        console.log('data', err);
      });
  };

  const refreshHandler = () => {
    setIsRefreshing(true);
    Axios.get(`http://${wifi}:5500/data/getAllData`,{
      timeout:100
    })
      .then(res => {
        console.log('tes', res.data);
        setData(res.data);
        setArrayHolder(res.data);
        setIsRefreshing(false);
      })
      .catch(err => {
        console.log('data', err);
        setIsRefreshing(false);
      })
      .finally(() => {
          setIsRefreshing(false)
      })
  };

  const renderData = ({item}) => {
    return (
      <View style={style.listItem}>
        <Text style={style.listItemText}>{item.nama_barang}</Text>
        <TouchableOpacity
          style={{...style.btn}}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate('Detail', {item})}>
          
          <Text>Selengkapnya</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const databaseChange = (itemValue, itemIndes) => {
    setSelectedValue(itemValue);
  };

  const searchFilterFunction = text => {
    const newData = arrayHolder.filter(item => {
      const itemData = `${item.nama_barang.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    // // console.log(text)
    // // console.log(arrayHolder)
    setData(newData);
  };

  const changeWifi = () => {};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{...style.mainContainer}}>
        <Text style={{...style.textTitle}}>Istana Bangunan</Text>

        {/* modal for change wi-fi */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={style.modal.centeredView}>
            <View style={{...style.modal.view}}>
              
              <TextInput 
                style={{...style.textInput, width: 100, color: 'gray'}}
                value={wifi}
                onChangeText={setWifi}
                />
              <Pressable 
                onPress={() => setModalVisible(!modalVisible)} 
                style={{...style.modal.btn, paddingVertical: 5, marginTop: 15, width: 50}}
              >
                <Text style={{...style.modal.btnText}}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable onPress={() => setModalVisible(true)}  style={{...style.modal.btn}}>
          <Text style={{...style.modal.btnText}}>Ganti Server</Text>
        </Pressable>
        {/* end of modal for change wi-fi */}

        {/* input, to search */}
        <View style={{...style.inputContainer}}>
          <TextInput
            style={{...style.textInput, flex: 1}}
            placeholder="Cari..."
            onChangeText={text => searchFilterFunction(text)}
          />
        </View>

        {/* list, to see render item */}
        <FlatList
          style={style.list}
          keyExtractor={item => item.nama_barang}
          data={data}
          renderItem={renderData}
          // onEndReachedThreshold={5}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={refreshHandler}
            />
            // console.log('tes masuk')
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
