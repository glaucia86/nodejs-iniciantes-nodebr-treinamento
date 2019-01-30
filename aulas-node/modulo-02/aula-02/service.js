/**
 * File: service.js
 * Description: Demo sobre manipulação de listas usando: for/ForIn/ForOut
 * Date: 12/27/2018
 * Author: Glaucia Lemos
 */

const axios = require('axios');
const URL = 'https://swapi.co/api/people';

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  obterPessoas,
};

// Bloco criado para testar o retorno da api: swapi
/* obterPessoas('r2')
  .then(function (resultado) {
    console.log('Resultado da Busca..: ', resultado);
  })
  .catch(function (error) {
    console.log('Erro ao retornar pessoa!', error)
  }); */
