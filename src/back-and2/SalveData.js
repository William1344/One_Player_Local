import AsyncStorage from '@react-native-async-storage/async-storage';

async function SalveData(banco){
  try{
      const jsonBD = JSON.stringify(banco);
      await AsyncStorage.setItem("One_Player_Local", jsonBD);
  } catch(e){
      console.log("Erro ao salvar dados");
  }
}; export default SalveData;