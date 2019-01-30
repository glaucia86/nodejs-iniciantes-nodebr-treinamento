/**
 * File: teste.js
 * Description: Demo sobre uso de testes com Mocha
 * Date: 28/01/2019
 * Author: Glaucia Lemos
 */

const {
  deepEqual,
  ok,
} = require('assert');

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1,
};

const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Lanterna Verde',
  poder: 'Anel',
  id: 2,
};

const database = require('./database');

describe('Testes de Herois', () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
  });

  it('Devo Pesquisar um Herói Usando Arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    // O uso de '[]' aqui é com a finalidade de retornar o primeiro item da lista do array (destructor)
    // Mais infos aqui: https://dev.to/sarah_chima/destructuring-assignment---arrays-16f
    const [results] = await database.listar(expected.id);

    deepEqual(results, expected);
  });

  it('Devo Cadastrar um Herói Usando Arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const results = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(actual, expected);
  });

  it('Devo Remover um Herói por Id', async () => {
    const expected = true;
    const results = await database.remover(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(results, expected);
  });

  it('Devo Atualizar um Herói por Id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Dinheiro',
    };

    const novoDado = {
      nome: 'Batman',
      poder: 'Dinheiro',
    };

    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
    const [results] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);

    deepEqual(results, expected);
  });
});
