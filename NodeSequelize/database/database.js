import Sequelize from 'sequelize';
const Sequelize = new Sequelize('crud','root','', {
    host:"localhost", 
    dialect:"mysql" 

}) 

Sequelize.authenticate().then(function(){
    console.log("conectando com sucesso!") 

}).catch(function(erro){
    console.log("falha ao se conectar: "+erro)
})