/**
 * File: filter.js
 * Description: Demo sobre uso do Array.Filter
 * Date: 17/01/2019
 * Author: Glaucia Lemos
 */

const {
  obterPessoas
} = require('./service');

async function main() {
  try {
    const {
      results
    } = await obterPessoas(`a`);

    const familiaLars = results.filter((item) => {
      /**
       * Por padrao precisa retornar um boleano para informar se deve manter ou remover da lista.
       * false > remove da lista
       * tue > mantém na lista
       * se nao encontrar = -1
       * encontrou = posicaoNoArray
       */
      const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
      return result;
    });

    const names = familiaLars.map((pessoa) => pessoa.name);
    console.log(names);

  } catch (error) {
    console.log(`Erro na execucao do código...: `, error);
  }
}

main();
