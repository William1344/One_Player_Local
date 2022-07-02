import React, {useState, useEffect} from 'react';
import { 
  Alert, BackHandler, FlatList, Image, KeyboardAvoidingView, Text, 
  TextInput, TouchableOpacity, View, Modal
} from 'react-native';
import Icon             from 'react-native-vector-icons/Entypo';
import {useNavigation}  from '@react-navigation/native';
import stylesLC         from './stylesLC';
import stylesCP         from './stylesCompLPesq';
import { stylesModal }  from '../Main_L/styleshet/index_styles';
import { Cor, icons }   from '../../styles/index_S';
import { User_LigaV, User_GameV, LigaV } from '../../../back-and2/banco_dados/index';
import Topo             from '../../components/Topo/Topo';
import confgBD          from '../../../../config/config.json';
import assets           from '../../../../assets/index_assets';
import banco            from '../../../back-and2/banco_local';
import SalveData        from '../../../back-and2/SalveData';

export default function LigaCreate({route}){

  const navigation                = useNavigation();
  const [new_liga, setNewLiga]    = useState(1);
  const [modalAdd, setModalAdd]   = useState(false);
  const [itemLiga, setItemLiga]   = useState([]);
  const [idLiga, setIdLiga]       = useState(null);
  const [textName, setTN]         = useState("Militão");
  const [textApel, setTA]         = useState("WillianS");
  const [textLocal, setLocal]     = useState("Bagé-RS"); // posso buscar o local no cel com API
    
  useEffect(() => {
    // teste de reloads
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
  },[]);

 

  function backAction(){
    navigation.replace("MainP");
    return true;
  }

  function renderizar_inputs(){
    
    //criar liga
      return(
        <View style = {stylesLC.viewImSup}>
          <KeyboardAvoidingView 
            style = {stylesLC.keyBoard}
            behavior = {Platform.select({
              ios : 'padding',
              android : null,
            })}
          >    
            <TextInput style = {stylesLC.txt_input}
              value           = {textName}
              onChangeText    = {(tt)=>{setTN(tt)}}
              placeholder     = "Nome da liga"
            />
            <TextInput style = {stylesLC.txt_input}
              value           = {textApel}
              onChangeText    = {(tt)=>{setTA(tt)}}
              placeholder     = "Seu apelido na liga"
            />
            <TextInput style = {stylesLC.txt_input}
              value           = {textLocal}
              onChangeText    = {(tt)=>{setLocal(tt)}}
              placeholder     = "Local"
            />
            <TouchableOpacity style = {{...stylesLC.btt_bar, width: '50%'}}
              onPress = {() => {
                new_Liga();
              }}
            >
              <Text style = {stylesLC.text_btt}> Criar Liga </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      );
  }
 
  async function new_Liga(){
    if(textName.length > 0 && textApel.length > 0 ){
      let lg = new LigaV({
        id      : banco.ligas.length,
        nome    : textName,
        local   : textLocal,
      });
      let us = new User_LigaV({
        id : 0,
        apelido : textApel
      });
      lg.list_users.push(us);
      let usG = new User_GameV({
        id : 0,
        apelido : textApel,
        numero  : 0,
      });
      lg.list_usersG.push(usG);
      banco.ligas.push(lg);
      console.log(banco.ligas);
      await SalveData(banco);
      navigation.replace("MainP");
    }else{
      Alert.alert("Preencha todos os campos");
      console.log("Preencha todos os campos");
    }
  }

  return(
    <View style = {stylesLC.telaFull}>
      <Topo/>
      <View style = {stylesLC.viewInf}>
        <Text style = {stylesLC.title_imputs}> Crear Liga </Text>
        {renderizar_inputs()}
      </View>
    </View>
  );
}