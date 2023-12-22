// Função para somar uma lista de números
const somar = (...numeros) => {
  const soma = numeros.reduce((ac, numero) => {
    ac += numero;
    return ac;
  }, 0);

  return soma;
};

// Mostrando o resultado
console.log(somar(15, 4, 8, 7, 78, 45, 7, 8));
