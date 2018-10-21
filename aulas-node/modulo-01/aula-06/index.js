/**
 * File: index.js
 * Description: Demonstração de como fazer uso de Async & Await em funções
 * Date: 12/02/2018
 * Author: Glaucia Lemos
 */

/**
 * 0 - Obter um usuário
 * 1 - Obter o número de telefone de um usuário a partir de seu Id
 * 2 - Obter o endereço do usuário pelo id
 */

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Glaucia Lemos',
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefoneCelular: '99999-9999',
        ddd: 21,
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: 'Jorge Yunes',
        numero: 181,
        complemento: 103,
        bairro: 'Recreio dos Bandeirantes',
        cidade: 'Rio de Janeiro',
      });
    }, 2000);
  });
}

async function main() {
  try {
    console.time('medida-promise');
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEndereco(usuario.id);

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id),
    ]);

    const endereco = resultado[1];
    const telefone = resultado[0];

    console.log(`
    Nome: ${usuario.nome}
    Telefone: (${telefone.ddd}) ${telefone.telefoneCelular}
    Endereço: ${endereco.rua}, ${endereco.numero}/${endereco.complemento} - ${
  endereco.bairro
}, ${endereco.cidade}
    `);
    console.timeEnd('medida-promise');
  } catch (error) {
    console.error('Error...: ', error);
  }
}

main();
