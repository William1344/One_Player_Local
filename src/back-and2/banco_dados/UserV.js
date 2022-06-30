const User_ScoresV = require("./User_ScoresV");
module.exports = class UserV{
    constructor(user){
        this.id             = user.id;
        this.image          = user.image;
        this.nome           = user.nome;
     
        this.altura         = user.altura;
        this.peso           = user.peso;
        this.envergadura    = user.envergadura;
        this.posicao        = user.posicao;
        this.numero         = user.num_camisa;

        this.createdAt      = new Date();
        
        this.scr3x3         = new User_ScoresV("tipo_3");
        this.scr5x5         = new User_ScoresV("tipo_5");
        this.scrT           = new User_ScoresV("tipo_T");
    }
};