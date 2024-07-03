const media = require('./module-export-functions/media');
const maiorNota = require('./module-export-functions/maiorNota');
const menorNota = require('./module-export-functions/menorNota');
const qtdAbaixoMedia = require('./module-export-functions/abaixoMedia');
const qtdAcimaMedia = require('./module-export-functions/acimaMedia');

let arrayNotas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];

arrayNotas.push(8.0);

console.log(`A média é ${media(arrayNotas).toFixed(2)} a menor nota é 
${menorNota(arrayNotas)} e a maior nota é ${maiorNota(arrayNotas)}, 
a quantidade acima da média eh: ${qtdAcimaMedia(arrayNotas)} 
e a quantidade abaixo da média eh: ${qtdAbaixoMedia(arrayNotas)}`);