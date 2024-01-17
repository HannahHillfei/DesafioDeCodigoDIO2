// Importa o módulo readline
const readline = require('readline');

// Cria uma interface de leitura dos dados do Jogador 
const tela = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fazendo perguntas ao Usuário e armazenando os dados 
tela.question('Informe o nome do Jogador: ', (nomeJogador) => {
tela.question('Informe a quantidade de Vitórias: ', (qntVitorias) => {
tela.question('Informe a quantidade de Derrotas: ', (qntDerrotas) => {

    
    //Variável que vai receber o Nivelamento do Jogador
    let nivel;
    
    //Passando valores as variáveis vitorias e derrotas
    jogador(qntVitorias, qntDerrotas)

    //Função que irá pegar as informações do Jogador e realizar o cálculo para saber o saldo de Rank 
    function jogador(vitorias, derrotas){
        let saldoRank = vitorias - derrotas
    //Vai mostrar no console o saldo de Rank do Jogador    
        //console.log(saldoRank)
    //Variável que irá receber o nível do Jogador
        if(saldoRank <= 10){
            nivel = "Ferro";
        }else if(saldoRank >= 11 && saldoRank <= 20){
            nivel = "Bronze";
        }else if(saldoRank >= 21 && saldoRank <= 50){
            nivel = "Prata";
        }else if(saldoRank >= 51 && saldoRank <= 80){
            nivel = "Ouro";
        }else if(saldoRank >= 81 && saldoRank <= 90){
            nivel = "Diamante";
        }else if(saldoRank >= 91 && saldoRank <= 100){
            nivel = "Lendário";
        }else if(saldoRank <= 101){
            nivel = "Imortal";
        }
    }// Encerra a Função

    // Feche a interface de leitura dos dados do Usuário 
        tela.close();

       //Saída para mostrar as informações do Jogador
       console.log('Nome do Jogador(a): '+ nomeJogador);
       console.log('Quantidade de Vitórias do Jogador: ' + qntVitorias);
       console.log('Nivelamento do Jogador: ' + nivel);

        }); //Encerra qntDerrotas
    }); //Encerra qntDerrotas   
}); //Encerra nomeJogador
 


 






