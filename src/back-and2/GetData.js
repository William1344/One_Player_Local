import AsyncStorage from '@react-native-async-storage/async-storage';

async function GetData(){
  const jsBanco = await AsyncStorage.getItem("One_Player_Local");
  if(jsBanco){
    let banco = JSON.parse(jsBanco);
    if(banco){
      return { banco: banco, status: true };
    }else{
      return { banco: null, status: false };
    }
  }
}; export default GetData;