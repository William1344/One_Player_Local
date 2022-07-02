import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, 
  KeyboardAvoidingView, Alert, BackHandler
} from 'react-native';
import stylesF            from './stylesForm';
import { useNavigation }  from '@react-navigation/native';
import SalveData          from '../../../back-and2/SalveData';
import banco              from '../../../back-and2/banco_local';
import { UserV }          from '../../../back-and2/banco_dados/index';
import assets             from '../../../../assets/index_assets';
import configsBD          from '../../../../config/config.json';
import { Picker }         from '@react-native-picker/picker';

export default function Form_User({route}){
  const navigation = useNavigation();
  const [txt_peso, setPeso] = useState("80");
  const [txt_altura, setAltura] = useState("1.95");
  const [txt_env, setEnv ] = useState("1.95");
  const [txt_numC, setNumC] = useState("31");
  const [posicao, setPosicao] = useState("");

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
  },[])

  function backAction(){
    if(route.params.veio_de != "cadastro"){
      navigation.replace("ViewP",{
        player  : route.params.player,
        veio_de : route.params.veio_de,
      });
    } else {
      Alert.alert("Sair", "Você deseja sair da sua conta?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () =>  navigation.replace("Login")}
      ]);
      return true;
    }
    return true;
  }

  async function salvarInfosUser(){
    let us = {
      id            : 0,
      image         : 0,
      nome          : route.params.player,
      peso          : txt_peso,
      altura        : txt_altura,
      envergadura   : txt_env,
      num_camisa    : txt_numC,
      posicao       : posicao,
    }

    banco.userMaster = new UserV(us);
    await SalveData(banco);
    navigation.replace("MainP");
  }

  async function depois(){
    let us = {
      id            : 0,
      image         : 0,
      nome          : route.params.player,
      peso          : 0,
      altura        : 0,
      envergadura   : 0,
      num_camisa    : 0,
      posicao       : "Definir",
    }

    banco.userMaster = new UserV(us);
    await SalveData(banco);
    navigation.replace("MainP");
  }
  async function _storeData(bd){
    try {
        const jsonBD = JSON.stringify(bd);
        await AsyncStorage.setItem("Banco", jsonBD);
    } catch (e) {
        console.log("Erro ao salvar banco")
    }
}
  return(
    <View style={stylesF.telaFull}>
      <TouchableOpacity style = {stylesF.btt_img} 
        onPress={()=>{}}
      >
        <Image style={stylesF.img} source={assets.play_lg}/>
      </TouchableOpacity>
      <View style={stylesF.viewForm}>
        <Text style={stylesF.title}>Dados do jogador</Text>
        <View style = {{...stylesF.viewLinha, height: '15%'}}> 
          <Text style={stylesF.texts}>Posição</Text>
          <View style = {stylesF.viewPicker}>
          <Picker 
            style         = {stylesF.picker}
            mode          = "dropdown"
            selectedValue = {posicao}
            onValueChange = {(itemValue, itemIndex) => setPosicao(itemValue)}
          >
            <Picker.Item label="Definir" value="Definir" />
            <Picker.Item label="Armador" value="Armador" />
            <Picker.Item label="Ala" value="Ala" />
            <Picker.Item label="Ala-Armador" value="Ala-Armador" />
            <Picker.Item label="Ala-Pivô" value="Ala-Pivô" />
            <Picker.Item label="Pivô" value="Pivô" />
          </Picker>
          </View>
        </View>
        
          <View style = {stylesF.viewLinha}> 
            <Text style={stylesF.texts}>Altura</Text>
            <TextInput style = {stylesF.txt_input}
              value           = {txt_altura}
              onChangeText    = {(tt)=>{setAltura(tt)}}
              keyboardType    = "numeric"
              placeholder     = {"Altura (m)"} 
            /> 
          </View>
       
          <View style = {stylesF.viewLinha}> 
            <Text style={stylesF.texts}>Peso</Text>
            <TextInput style = {stylesF.txt_input}
              value           = {txt_peso}
              onChangeText    = {(tt)=>{setPeso(tt)}}
              keyboardType    = "numeric"
              placeholder     = {"Peso (kg)"}
            />
          </View>
          <View style = {stylesF.viewLinha}> 
            <Text style={stylesF.texts}>Envergadura</Text>
            <TextInput style = {stylesF.txt_input}
              value           = {txt_env}
              onChangeText    = {(tt)=>{setEnv(tt)}}
              keyboardType    = "numeric"
              placeholder     = {"Envergadura (m)"}
            />
          </View>
          <View style = {stylesF.viewLinha}>
            <Text style={stylesF.texts}>Nº Regata</Text>
            <TextInput style = {stylesF.txt_input}
              value           = {txt_numC}
              onChangeText    = {(tt)=>{setNumC(tt)}}
              keyboardType    = "numeric"
              placeholder     = {"Nº Regata"}
            />
          </View>
          
        <View style = {{...stylesF.viewLinha, height : '10%'}}>
          <TouchableOpacity style = {stylesF.btts} 
            onPress={()=> salvarInfosUser()}
          >
            <Text style={stylesF.btts_text}>Salvar</Text>
          </TouchableOpacity>
          
          {route.params.veio_de == "cadastro" && 
            <TouchableOpacity style = {stylesF.btts}
              onPress={()=>{navigation.replace("MainP")}}
            >
              <Text style={stylesF.btts_text}>Depois</Text>
            </TouchableOpacity>  
          }  
        </View>
      </View>
    </View>
  );
};