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

describe('Testes de Herois', () => {
  it('Deve cadastrar um herói usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;

    ok(null, expected);
  });
});
