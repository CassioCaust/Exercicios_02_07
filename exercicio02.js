const prompt = require('prompt-sync')({});

let numero = prompt("Digite um número para calcular o fatorial: ");

function fatorial(numero){
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i
        
    }

return resultado
}

console.log(`O resultado do fatorial é ${fatorial(numero)}`)