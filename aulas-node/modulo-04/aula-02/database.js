/**
 * File: database.js
 * Description: arquivo responsável por lidar dados da aplicação.'
 * Date: 29/01/2019
 * Author: Glaucia Lemos
 */

const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

// Outra forma de obter dados de um determinado arquivo (.json, .csv, .txt)
// const dadosJson = require('./herois.json');

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json';
  }

  //Método responsável por retornar os dados da aplicação:
  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');

    // Aqui estou realizando o parse da informação que retornará via Json
    return JSON.parse(arquivo.toString());
  }

  // Método responsável por adicionar um novo dado na aplicação:
  escreverArquivo() {

  }

  // Método responsável por listar os dadas da aplicação:
  async listar(id) {
    const dados = await this.obterDadosArquivo();
    const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true));

    return dadosFiltrados;
  }
}

module.exports = new Database();

