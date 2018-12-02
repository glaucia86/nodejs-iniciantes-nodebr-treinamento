/**
 * File: index.js
 * Description: Demonstração de como fazer uso de callbacks em funções
 * Date: 12/02/2018
 * Author: Glaucia Lemos
 */

/**
 * 0 - Obter um usuário
 * 1 - Obter o número de telefone de um usuário a partir de seu Id
 * 2 - Obter o endereço do usuário pelo id
 */

function obterUsuario(callback) {
    setTimeout(() => callback(null, {
        id: 1,
        nome: "Glaucia Lemos",
        dataNascimento: new Date(),
    }), 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => callback(null, {
        telefone: "99999-9999",
        ddd: 21,
    }), 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => callback(null, {
        rua: "Jorge Yunes",
        numero: 181,
        complemento: 103,
        bairro: "Recreio dos Bandeirantes",
        cidade: "Rio de Janeiro",
    }), 2000);
}

function resolverUsuario(error, usuario) {
    console.log("Usuario", usuario);
}

obterUsuario((error, usuario) => {
    // valor: null || "" || 0 === false
    if (error) {
        console.log(`Erro ao encontrar o Usuário...: ${error}`);
    }
    obterTelefone(usuario.id, (error1, telefone) => {
        if (error1) {
            console.log(`Erro ao encontrar o Telefone...: ${error1}`);
        }

        obterEndereco(usuario.id, (error2, endereco) => {
            if (error2) {
                console.log(`Erro ao encontrar o Endereço...:${error2}`);
            }

            // Impressão dos Dados:
            console.log(`
              Nome: ${usuario.nome}
              Endereço: ${endereco.rua}, ${endereco.numero}/${endereco.complemento} - ${endereco.bairro}, ${endereco.cidade}
              Telefone: (${telefone.ddd})${telefone.telefone}
            `);
        });
    });
});


// const telefone = obterTelefone(usuario.id);
// console.log("Telefone", usuario);
