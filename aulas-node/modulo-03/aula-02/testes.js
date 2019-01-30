/**
 * File: testes.js
 * Description: Demo sobre uso de testes com Mocha
 * Date: 17/01/2019
 * Author: Glaucia Lemos
 */

// pacote responsável por simular requisições:
const nock = require('nock');

const assert = require('assert');
const {
  obterPessoas,
} = require('./service');

describe('Star Wars Testes', function () {
  this.beforeAll(() => {
    const response = {
      count: 1,
      next: null,
      previous: null,
      results: [{
        name: 'R2-D2',
        height: '96',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, blue',
        eye_color: 'red',
        birth_year: '33BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.co/api/planets/8/',
        films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/5/', 'https://swapi.co/api/films/4/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/', 'https://swapi.co/api/films/7/'],
        species: ['https://swapi.co/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:11:50.376000Z',
        edited: '2014-12-20T21:17:50.311000Z',
        url: 'https://swapi.co/api/people/3/',
      }],
    };

    nock('https://swapi.co/api/people')
      .get('/?search=r2-d2&format=json')
      .reply(200, response);
  });

  it('Deve buscar o R2D2 com formato correto', async () => {
    const expected = [{
      nome: 'R2-D2',
      peso: '96',
    }];
    const nomeBase = 'r2-d2';
    const resultado = await obterPessoas(nomeBase);
    assert.deepEqual(resultado, expected);
  });
});
