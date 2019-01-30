/**
 * File: reduce.js
 * Description: Demo sobre uso do Array.Reduce
 * Date: 17/01/2019
 * Author: Glaucia Lemos
 */

const {
  obterPessoas,
} = require('./service');

async function main() {
  try {
    const {
      results,
    } = await obterPessoas('a');

    // eslint-disable-next-line radix
    const pesos = results.map(item => parseInt(item.height));
    console.log('Pesos...: ', pesos);

    const total = pesos.reduce((anterior, proximo) => anterior + proximo);

    console.log('Total....: ', total);
  } catch (error) {
    console.log('Erro na execucao do código', error);
  }
}

main();
