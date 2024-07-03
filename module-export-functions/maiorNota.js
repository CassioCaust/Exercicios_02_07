function maiorNota(arrayNotas) {
    let arrMaiorNota = arrayNotas[0]; // reb B
    
    for (let i = 0; i < arrayNotas.length; i++) {
      // ref B
      if (arrayNotas[i] > arrMaiorNota) {
        arrMaiorNota = arrayNotas[i];
      }
    }
    return arrMaiorNota;
  }

  module.exports = maiorNota