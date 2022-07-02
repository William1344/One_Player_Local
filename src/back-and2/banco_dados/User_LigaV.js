import User_ScoresV from "./User_ScoresV";

class User_LigaV{
    constructor(users){
        this.id          = users.id             // id do usuário
        this.apelido     = users.apelido        // apelido do jogador
        this.image       = 0                    // image do usuário
        this.numero      = 0                    // numero da camisa do jogador
        this.posicao     = 0                    // posição do jogador
        this.altura      = 0                    // altura do jogador
        this.envergadura = 0                    // envergadura do jogador
        this.peso        = 0                    // peso do jogador
        this.scr3x3      = new User_ScoresV("tipo_3");  // objeto dos scores3x3
        this.scr5x5      = new User_ScoresV("tipo_5");  // objeto dos scores5x5
        this.scrT        = new User_ScoresV("tipo_T");  // objeto com total de scores  
    }
}; export default User_LigaV;