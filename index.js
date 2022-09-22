function laCajaDePandora(numero) {
  if (numero & 1) {
    //Impar
    return numero.toString(16);
  } else {
    //Par
    let binary = "";
    while (numero) {
      binary = (numero % 2) + binary;
      numero = Math.floor(numero / 2);
    }
    return binary;
  }
}
