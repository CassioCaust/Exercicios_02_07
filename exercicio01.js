const prompt = require('prompt-sync')();

    let Notas =[];
    let qtadeNotas = Number(prompt("Quantas notas serão digitadas? "));
    for (let i = 0; i < qtadeNotas; i++) {
     let nota = Number(prompt("Digite a nota: "));
        Notas.push(nota)
    }
    function media(arrayNotas){
        let soma = 0;
        for (let i = 0; i < arrayNotas.length; i++) {
            soma += arrayNotas[i];
        }

        let media = soma / arrayNotas.length
        return media
    }

   console.log(`A média das notas é ${media(Notas)}`)