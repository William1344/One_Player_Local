import React, {useState, useEffect} from 'react';
import {
    Text, View, TouchableOpacity, TextInput, Modal, Image, 
    KeyboardAvoidingView, Alert, Keyboard
} from 'react-native';
import stylesC from './styles_Cad';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import banco from '../../../back-and2/banco_local';
import assets from '../../../../assets/index_assets';
import SalveData from '../../../back-and2/SalveData';

export default function Cadastro(){
    const navigation = useNavigation();
    const [textName, setName] = useState("");
    
    useEffect(() => {
        
    },[]);

    
    async function cadastraUser(nm,em,ps){
        banco.userM

    }
    
    return(
        <View style={stylesC.telaFull}>
            <View style = {stylesC.view_img_cad}>
                <Image 
                    style = {stylesC.img} 
                    source={assets.login1}
                />
                <Text style={stylesC.title_L}>One Player</Text>
            </View>
            <View style = {stylesC.cad_view}>
                <KeyboardAvoidingView 
                    style    = {stylesC.keyBoard}
                    behavior = {Platform.select({
                        ios : 'padding',
                        android : null,
                    })}
                >
                    <TextInput style    = {stylesC.input}
                        value           = {textName}
                        onChangeText    = {(text)=>{setName(text)}}
                        keyboardType    = "default"
                        placeholder     = "Nome"
                    />
                    <TouchableOpacity style = {stylesC.button}
                        onPress={() => cadastraUser(textName,textEmail,textPasword)}
                    >
                        <Text style = {stylesC.but_text}>Cadastrar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}
