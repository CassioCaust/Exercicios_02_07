function menorNota(arrayNotas) {
    let arrMenorNota = arrayNotas[0]; // ref B
    
    for (let i = 0; i < arrayNotas.length; i++) {
      // ref B
      if (arrayNotas[i] < arrMenorNota) {
        arrMenorNota = arrayNotas[i];
      }
    }
    return arrMenorNota;
  }

  module.exports = menorNota