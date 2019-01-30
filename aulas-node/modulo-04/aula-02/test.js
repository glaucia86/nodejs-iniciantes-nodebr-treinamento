/**
 * File: teste.js
 * Description: Demo sobre uso de testes com Mocha
 * Date: 28/01/2019
 * Author: Glaucia Lemos
 */

const {
  deepEqual,
  ok
} = require('assert');

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

const database = require('./database');

describe('Testes de Herois', () => {
  it('Devo Pesquisar um Herói Usando Arquivos', async() => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    // O uso de '[]' aqui é com a finalidade de retornar o primeiro item da lista do array (destructor)
    // Mais infos aqui: https://dev.to/sarah_chima/destructuring-assignment---arrays-16f
    const [results] = await database.listar(expected.id);

    deepEqual(results, expected);
  });

  /*it('Deve cadastrar um herói usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;

    ok(null, expected);
  });*/
});
