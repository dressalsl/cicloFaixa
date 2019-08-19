var Sequelize = require('sequelize'); 



const conexao = connection.authenticate()

var sequelize = new Sequelize('http://localhost/phpmyadmin/tbl_structure.php?db=node&table=crud', {
    
})
.then(function(){
    console.log('conexão com sevidor!');
})

.catch(function(err){
 
    
    console.log('O servidor não está conectado com o mysql!');
})
  

 
.done(); 

