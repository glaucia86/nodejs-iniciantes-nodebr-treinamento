/**
 * File: database.js
 * Description: arquivo responsável por lidar dados da aplicação.'
 * Date: 29/01/2019
 * Author: Glaucia Lemos
 */

const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

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
  async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));

    return true;
  }

  // Método responsável por Cadastrar um novo Herói na aplicação:
  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo();
    const id = heroi.id <= 2 ? heroi.id : Date.now();

    // Aqui eu vou concatenar as informações do nosso objeto:
    const heroiComId = { id, ...heroi }

    // Aqui será a junção final de dados + heroiComId = para gerar um único objeto:
    const dadosFinal = [ ...dados, heroiComId ];

    const resultado = await this.escreverArquivo(dadosFinal);

    return resultado;
  }

  // Método responsável por listar os dadas da aplicação:
  async listar(id) {
    const dados = await this.obterDadosArquivo();
    const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true));

    return dadosFiltrados;
  }
}

module.exports = new Database();

