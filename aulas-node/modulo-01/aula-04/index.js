/**
 * File: index.js
 * Description: Demonstração de como fazer uso de promises em funções
 * Date: 02/12/2018
 * Author: Glaucia Lemos
 */

/**
 * 0 - Obter um usuário
 * 1 - Obter o número de telefone de um usuário a partir de seu Id
 * 2 - Obter o endereço do usuário pelo id
 */

const util = require('util');
// eslint-disable-next-line no-use-before-define
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Glaucia Lemos',
        dataNascimento: new Date(),
      });
    }, 1000);
  }));
}

function obterTelefone(idUsuario) {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefoneCelular: '99999-9999',
        ddd: 21,
      });
    }, 2000);
  }));
}

function obterEndereco(idUsuario) {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: 'Jorge Yunes',
        numero: 181,
        complemento: 103,
        bairro: 'Recreio dos Bandeirantes',
        cidade: 'Rio de Janeiro',
      });
    }, 2000);
  }));
}

const usuarioPromise = obterUsuario();

usuarioPromise
  .then((usuario) => {
    return obterTelefone(usuario.id)
      .then((result) => {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id,
          },
          telefone: result,
        };
      });
  })
  .then((resultado) => {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then((result) => {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result,
      };
    });
  })
  .then((resultado) => {
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}/${resultado.endereco.complemento} - ${resultado.endereco.bairro}, ${resultado.endereco.cidade}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefoneCelular}
    `);
  })
  .catch((error) => {
    console.error('Error...: ', error);
  });
