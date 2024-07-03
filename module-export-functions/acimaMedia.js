const media = require('./media')

function qtdAcimaMedia(arrayNotas) {
    let notasAcimaMedia = 0;
    
    // ref C
    for (let i = 0; i < arrayNotas.length; i++) {
      if (arrayNotas[i] >= media(arrayNotas)) {
        notasAcimaMedia++;
      }
    }
    
    return notasAcimaMedia;
  }

  module.exports = qtdAcimaMedia