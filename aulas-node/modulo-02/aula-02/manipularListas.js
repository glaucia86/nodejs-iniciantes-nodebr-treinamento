/**
 * File: manipularListas.js
 * Description: Demo sobre manipulação de listas usando: for/ForIn/ForOut
 * Date: 12/27/2018
 * Author: Glaucia Lemos
 */

const service = require('./service');


async function main() {
  try {
    const resultado = await service.obterPessoas('a');
    const names = [];

    console.time('for');
    for (let i = 0; i <= resultado.results.length - 1; i++) {
      const pessoa = resultado.results[i];
      names.push(pessoa.name);
    }
    console.timeEnd('for');

    console.time('forIn')
    for (let i in resultado.results) {
      const pessoa = resultado.results[i];
      names.push(pessoa.name)
    }
    console.timeEnd('forIn');

    console.time('forOf');
    for (pessoa of resultado.results) {
      names.push(pessoa.name);
    }
    console.timeEnd('forOf');

    console.log(`names`, names);
  } catch (error) {
    console.log(`Erro ao executar a api`, error);
  }
}

main()
