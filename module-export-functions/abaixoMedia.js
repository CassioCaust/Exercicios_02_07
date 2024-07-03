const media = require('./media')

function qtdAbaixoMedia(arrayNotas) {
    let notasAbaixoMedia = 0;
    // ref C
    
    for (let i = 0; i < arrayNotas.length; i++) {
      if (arrayNotas[i] < media(arrayNotas)) {
        notasAbaixoMedia++;
      }
    }
    
    return notasAbaixoMedia;
  }

  module.exports = qtdAbaixoMedia