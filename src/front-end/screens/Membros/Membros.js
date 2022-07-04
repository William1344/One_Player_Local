import React, {useEffect, useState} from 'react';
import {
    Text, View, TouchableOpacity, Image, Modal, StatusBar, FlatList, 
    SafeAreaView, BackHandler, Alert
} from 'react-native';
import stylesMem        from './stylesMem';
import {useNavigation}  from '@react-navigation/native';
import {Topo}           from '../../components/index_comps';
import AsyncStorage     from '@react-native-async-storage/async-storage';
import banco            from '../../../back-and2/banco_local';
import confgBD          from '../../../../config/config.json';
import assets           from '../../../../assets/index_assets';
import SalveDate        from '../../../back-and2/SalveData';
import { RetornaImg }   from '../../functions/index';

export default function Membros({route}){
    const navigation = useNavigation();
    const [rend, setRender]     = useState(false);
    const [modal, setModal]     = useState(false);
    const [itemOP, setItemOP]   = useState(route.params.liga.list_users[0]);
    const [ped, setPedido]      = useState(route.params.liga.pedidoIsOn);
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {BackHandler.removeEventListener("hardwareBackPress", backAction);}
    },[]);

    function backAction(){
        navigation.replace("MainL",{
            liga        :   route.params.liga,
            dest        :   route.params.dest,
            index_liga  :   route.params.index_liga,
        });
        return true;
    }

    async function removerMembro(){
        // remover membro da liga e apagar relação LHU
    }

    function render_Modal(){
        return(
            <Modal
                animationType = "slide"
                transparent = {true}
                visible = {modal}
                onRequestClose = {() => {
                    setModal(false);
                }}
            >
                <View style = {stylesMem.viewFullModal}>
                    <View style = {stylesMem.viewModal_confMembros}>
                        <Text style = {stylesMem.title_modal}> - Opções da Liga - </Text>
                        <Text style = {stylesMem.text_btt}> - {itemOP.apelido} - </Text>
                        <View style = {stylesMem.view_inputs}>
                            <TouchableOpacity style = {stylesMem.btt_Modal}
                                onPress = {() => {
                                    navigation.replace("ViewP",{
                                        liga        :   route.params.liga,
                                        dest        :   route.params.dest,
                                        index_liga  :   route.params.index_liga,
                                        player      :   itemOP,
                                        veio_de     :   "Membros",
                                        isAdmin     :   route.params.isAdmin,
                                    });
                                }}
                            >
                                <Text style = {stylesMem.text_btt}> Perfil </Text>
                            </TouchableOpacity>
                            { !itemOP.isUser_Liga &&  
                                <TouchableOpacity style = {stylesMem.btt_Modal} 
                                onPress = {() => {
                                    if(route.params.isAdmin) mudar_Adm();
                                    else  Alert.alert("Admistrador", "Você não tem permissões para realizar está ação!");
                                }}
                                >
                                    <Text style = {stylesMem.text_btt}> {itemOP.isAdmin ? "Remover Adm" : "Tornar Adm"} </Text>
                                </TouchableOpacity>
                            }
                            
                            <TouchableOpacity style = {stylesMem.btt_Modal}
                                onPress = {() => {
                                    removerMembro();
                                }}
                            >
                                <Text style = {stylesMem.text_btt}> Apagar </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
            </Modal>
        )
    } 
    

    function Comp_Players({item}){
        return(
            <TouchableOpacity style = {stylesMem.viewFL}
                onPress = {() => {
                    navigation.replace("ViewP", {
                        liga    : route.params.liga,
                        dest    : route.params.dest,
                        veio_de : "Membros",
                        player  : item,
                    });
                }}
                onLongPress = {() => {
                    setItemOP(item);
                    setModal(true);
                }}
            >
                <Image style = {stylesMem.img_logoFL}
                    source = {RetornaImg(item.image)}
                    resizeMode="cover"
                />
                <View style = {stylesMem.viewInfos_FL}>
                    <Text style = {stylesMem.text_infos}>Nome: {item.apelido}</Text>
                    <Text style = {stylesMem.text_infos}>FG: {(item.scrT.a_FG % 1) == 0 ? item.scrT.a_FG : item.scrT.a_FG.toFixed(1)}%</Text>
                    <Text style = {stylesMem.text_infos}>Pts: {item.scrT.total_pts}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
    return(
        <View style = {stylesMem.telaFull}>
            <StatusBar
                hidden = {true}
                barStyle="ligth-content"
            />
            <Topo/>
            { ped && route.params.isAdmin && render_Pedidos()}
            <View style = {stylesMem.viewMembros}>
                <Text style = {stylesMem.titleM}> Membros </Text>
                <SafeAreaView style = {stylesMem.viewInferioir}>
                    <FlatList style = {stylesMem.flatList}
                        data = {route.params.liga.list_users}
                        renderItem={Comp_Players}
                        keyExtractor={(item) => item.Users_idUsers}
                    />
                </SafeAreaView>  

            </View>
            {render_Modal()}          
        </View>
    );
}
