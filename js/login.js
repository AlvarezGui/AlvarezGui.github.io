/*function cadastro(){
    //Pegar informação
    let inf = ['nome', 'mail', 'senha'];
    inf[0] = document.getElementById('nome').value;
    inf[1] = document.getElementById('mail').value;
    inf[2] = document.getElementById('senha').value;


    //Mostran no console
    console.log(inf[0]);
    console.log(inf[1]);
    console.log(inf[2]);
  
}*/


const $cadastro = document.querySelector('#cadastro');
const $entrar = document.querySelector('#entrar');

//Cadastrar
$cadastro.addEventListener('click', function(){
    //Informações
    let inf = ['nome', 'mail', 'senha'];
    inf[0] = document.getElementById('nome').value;
    inf[1] = document.getElementById('mail').value;
    inf[2] = document.getElementById('senha').value;

    //Mostrar no console
    console.log(inf[0]);
    console.log(inf[1]);
    console.log(inf[2]);
});

//Entrar
 $entrar.addEventListener('click', function(){
     //Informações
     let info = ['mail', 'senha'];
     info[0] = document.getElementById('mailE').value;
     info[1] = document.getElementById('senhaE').value;
 
     //Mostrar no console
     console.log(info[0]);
     console.log(info[1]);
});
