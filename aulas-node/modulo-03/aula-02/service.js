/**
 * File: service.js
 * Description: arquivo responsável por lidar com o serviço da api do 'Star Wars'
 * Date: 17/01/2019
 * Author: Glaucia Lemos
 */

const {
  get
} = require('axios');

const URL = `https://swapi.co/api/people`;

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`;
  const result = await get(url);
  return result.data.results.map(mapearPessoas);
}

function mapearPessoas(item) {
  return {
    nome: item.name,
    peso: item.height
  }
}

module.exports = {
  obterPessoas
}
