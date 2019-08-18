var Sequelize = require('sequelize'); 

var connection = new Sequelize('crud','root',''); 

var conexao = connection.authenticate()

.then(function(){
    console.log('conexão com sevidor!');
})

.catch(function(err){
 
    
    console.log('O servidor não está conectado com o mysql!');
})
  

 
.done(); 

/*
var http = require('http'); 
http.createServer().listen (8081); 
console.log("o servidor esta rodando!")

*/