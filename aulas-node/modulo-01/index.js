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

function obterUsuario() {
    setTimeout(() => ({
        id: 1,
        nome: "Glaucia",
        dataNascimento: new Date(),
    }), 1000);
}

function obterTelefone(idUsuario) {
    setTimeout(() => ({
        telefone: "21912787",
        ddd: 21,
    }), 2000);
}

function obterEndereco(idUsuario) {

}

const usuario = obterUsuario();
const telefone = obterTelefone(usuario.id);

console.log("Usuario", usuario);
console.log("Telefone", usuario);
