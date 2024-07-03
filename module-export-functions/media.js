function media(arrayNotas) {
    let soma = 0;
  
    for (let i = 0; i < arrayNotas.length; i++) {
      soma += arrayNotas[i]; // ref A
    }
  
    return soma / arrayNotas.length;
  }

  module.exports = media