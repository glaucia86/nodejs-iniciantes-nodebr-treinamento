/**
 * File: map.js
 * Description: Demo sobre uso do Array.Map
 * Date: 17/01/2019
 * Author: Glaucia Lemos
 */

const service = require('./service');

// Aqui uma demonstraçao de como o Map funciona por debaixo dos panos:
/* Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = [];
  for (let index = 0; index <= this.length - 1; index++) {
    const resultado = callback(this[index], index);
    novoArrayMapeado.push(resultado);
  }

  return novoArrayMapeado;
} */

async function main() {
  try {
    const results = await service.obterPessoas('a');
    /* const names = results.results.map((pessoa) => {
      return pessoa.name;
    }) */
    // Aqui uma maneira mais elegante de usar o 'map':
    const names = results.results.map(pessoa => pessoa.name);
    /* const names = results.results.meuMap((pessoa, index) => {
      return `[${index}]${pessoa.name}`;
    }); */

    console.log('Names....: ', names);
  } catch (error) {
    console.log('Erro na execução do código...: ', error);
  }
}

main();
