import React, {useEffect, useState} from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import configBD from '../../../../config/config.json';
import banco_local from '../../../back-and2/banco_local';
import SalveDate from '../../../back-and2/SalveData';
import GetData from '../../../back-and2/GetData';
import CompLoad from './CompLoad';
//import styles from '../comp/Styles'

export default function Load(){
    const navigation = useNavigation();
    
    async function fontes(){
        try {
            await Font.loadAsync({
                'atma-bold'         : require('../../../../assets/fonts/Atma-Bold.ttf'),
                'itim-regular'      : require('../../../../assets/fonts/Itim-Regular.ttf'),
                'atma-light'        : require('../../../../assets/fonts/Atma-Light.ttf'),
                'atma-medium'       : require('../../../../assets/fonts/Atma-Medium.ttf'),
                'atma-regular'      : require('../../../../assets/fonts/Atma-Regular.ttf'),
                'atma-semi-bold'    : require('../../../../assets/fonts/Atma-SemiBold.ttf'),
                'comforter-brush'   : require('../../../../assets/fonts/ComforterBrush.ttf'),
                'dancing-bold'      : require('../../../../assets/fonts/DancingScript-Bold.ttf'),
                'dancing-mediun'    : require('../../../../assets/fonts/DancingScript-Medium.ttf'),
                'dancing-semi-bold' : require('../../../../assets/fonts/DancingScript-SemiBold.ttf'),
                'dancing-variable'  : require('../../../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
                'lobster-regular'   : require('../../../../assets/fonts/Lobster-Regular.ttf'),
                'dancing-regular'   : require('../../../../assets/fonts/DancingScript-Regular.ttf'),
                'bizu'              : require('../../../../assets/fonts/BIZUDPMincho-Regular.ttf'),
                'roboto'            : require('../../../../assets/fonts/Roboto-Bold.ttf'),            
            });
        } catch (e) {
            console.log("Erro ao carregar fontes")
        }
    }
    async function checkToken(){
        let object = await GetData();
        if (object.status){
            banco_local.userMaster    = object.banco.userMaster;
            banco_local.ligas         = object.banco.ligas;
            banco_local.usersLocal    = object.banco.usersLocal;
            banco_local.tema          = object.banco.tema;
            navigation.navigate('MainP');
        } else navigation.navigate('Cadastro');

    };

    useEffect(()=>{
        fontes();
        setTimeout(()=>{
            checkToken();
            //_removeTokens();    
            //navigation.replace("Login");
        },1500);
        
    },[]);
        
    async function _removeTokens() {
        const jsBanco = await AsyncStorage.removeItem("Banco");
        console.log(jsBanco);    
    }

    return(
        <CompLoad/>
    );
}
