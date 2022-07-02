import { DestV } from '../../back-and2/banco_dados/index';
async function SetaDests(users){
  let dest = new DestV();
  let verr = true;
  for(let user of users){
    // computar destaques da liga
    if(verr){
      verr = false;
      dest.jgd_Cluth.value      = user.scrT.cluth;
      dest.jgd_Cluth.user       = user;
      dest.jgd_Fominha.value    = user.scrT.jogos;
      dest.jgd_Fominha.user     = user;
      dest.jgd_Vencedor.value   = user.scrT.vit;
      dest.jgd_Vencedor.user    = user;
      dest.jgd_Pontuador.value  = user.scrT.total_pts;
      dest.jgd_Pontuador.user   = user;
      dest.jgd_2Pts.value       = user.scrT.a_2pts;
      dest.jgd_2Pts.user        = user;
      dest.jgd_3Pts.value       = user.scrT.a_3pts;
      dest.jgd_3Pts.user        = user;
      dest.jgd_Reboteiro.value  = user.scrT.reb;
      dest.jgd_Reboteiro.user   = user;
      dest.jgd_Assist.value     = user.scrT.asst;
      dest.jgd_Assist.user      = user;
      dest.jgd_Bloker.value     = user.scrT.block;
      dest.jgd_Bloker.user      = user;
      dest.jgd_Ladrao.value     = user.scrT.roubo;
      dest.jgd_Ladrao.user      = user;
      dest.jgd_AirBall.value    = user.scrT.airB;
      dest.jgd_AirBall.user     = user;
      dest.jgd_FG.value         = user.scrT.a_FG;
      dest.jgd_FG.user          = user;
      dest.jgd_PPG.value        = user.scrT.total_PPG;
      dest.jgd_PPG.user         = user;
      dest.jgd_2PPG.value       = user.scrT.a_2PG;
      dest.jgd_2PPG.user        = user;
      dest.jgd_3PPG.value       = user.scrT.a_3PG;
      dest.jgd_3PPG.user        = user;
      dest.jgd_APG.value        = user.scrT.a_APG;
      dest.jgd_APG.user         = user;
      dest.jgd_BPG.value        = user.scrT.a_BPG;
      dest.jgd_BPG.user         = user;
      dest.jgd_RPG.value        = user.scrT.a_RPG;
      dest.jgd_RPG.user         = user;
      dest.jgd_RouPG.value      = user.scrT.a_RouPG;
      dest.jgd_RouPG.user       = user;
      dest.jgd_AirBPG.value     = user.scrT.a_AirPG;
      dest.jgd_AirBPG.user      = user;

    }else{
      if(user.scrT.cluth > dest.jgd_Cluth.value){
        dest.jgd_Cluth.value    = user.scrT.cluth;
        dest.jgd_Cluth.user     = user;
      }
      if(user.scrT.jogos > dest.jgd_Fominha.value){
        dest.jgd_Fominha.value  = user.scrT.jogos;
        dest.jgd_Fominha.user   = user;
      }
      if(user.scrT.vit > dest.jgd_Vencedor.value){
        dest.jgd_Vencedor.value = user.scrT.vit;
        dest.jgd_Vencedor.user  = user;
      } 
      if(user.scrT.total_pts > dest.jgd_Pontuador.value){
        dest.jgd_Pontuador.value= user.scrT.total_pts;
        dest.jgd_Pontuador.user = user;
      }
      if(user.scrT.a_2pts > dest.jgd_2Pts.value){
        dest.jgd_2Pts.value     = user.scrT.a_2pts;
        dest.jgd_2Pts.user      = user;
      }
      if(user.scrT.a_3pts > dest.jgd_3Pts.value){
        dest.jgd_3Pts.value = user.scrT.a_3pts;
        dest.jgd_3Pts.user  = user;
      }
      if(user.scrT.reb > dest.jgd_Reboteiro.value){
        dest.jgd_Reboteiro.value = user.scrT.reb;
        dest.jgd_Reboteiro.user  = user;
      }
      if(user.scrT.asst > dest.jgd_Assist.value){
        dest.jgd_Assist.value = user.scrT.asst;
        dest.jgd_Assist.user  = user;
      }
      if(user.scrT.block > dest.jgd_Bloker.value){
        dest.jgd_Bloker.value = user.scrT.block;
        dest.jgd_Bloker.user  = user;
      }
      if(user.scrT.roubo > dest.jgd_Ladrao.value){
        dest.jgd_Ladrao.value = user.scrT.roubo;
        dest.jgd_Ladrao.user  = user;
      }
      if(user.scrT.airB > dest.jgd_AirBall.value){
        dest.jgd_AirBall.value = user.scrT.airB;
        dest.jgd_AirBall.user  = user;
      }
      if(user.scrT.a_FG > dest.jgd_FG.value){
        dest.jgd_FG.value = user.scrT.a_FG;
        dest.jgd_FG.user  = user;
      }
      if(user.scrT.total_PPG > dest.jgd_PPG.value){
        dest.jgd_PPG.value = user.scrT.total_PPG;
        dest.jgd_PPG.user  = user;
      }
      if(user.scrT.a_2PG > dest.jgd_2PPG.value){
        dest.jgd_2PPG.value = user.scrT.a_2PG;
        dest.jgd_2PPG.user  = user;
      }
      if(user.scrT.a_3PG > dest.jgd_3PPG.value){
        dest.jgd_3PPG.value = user.scrT.a_3PG;
        dest.jgd_3PPG.user  = user;
      }
      if(user.scrT.a_APG > dest.jgd_APG.value){
        dest.jgd_APG.value = user.scrT.a_APG;
        dest.jgd_APG.user  = user;
      }
      if(user.scrT.a_BPG > dest.jgd_BPG.value){
        dest.jgd_BPG.value = user.scrT.a_BPG;
        dest.jgd_BPG.user  = user;
      }
      if(user.scrT.a_RPG > dest.jgd_RPG.value){
        dest.jgd_RPG.value = user.scrT.a_RPG;
        dest.jgd_RPG.user  = user;
      }
      if(user.scrT.a_RouPG > dest.jgd_RouPG.value){
        dest.jgd_RouPG.value = user.scrT.a_RouPG;
        dest.jgd_RouPG.user  = user;
      }
      if(user.scrT.a_AirPG > dest.jgd_AirBPG.value){
        dest.jgd_AirBPG.value = user.scrT.a_AirPG;
        dest.jgd_AirBPG.user  = user;
      }
    }
  }
  console.log("Enviou dests")
  return dest;
}; export default SetaDests;