/**
 * File: index.js
 * Description: Demonstração de como fazer uso de de Events
 * Date: 02/12/2018
 * Author: Glaucia Lemos
 */

const EventEmitter = require('events');

class Emissor extends EventEmitter {}

const emissor = new Emissor();
const evento = 'usuario:click';

emissor.on(evento, (click) => {
  console.log('1 - Clicou', click);
});

/* emissor.emit(evento, 'Barra de Rolagem');
emissor.emit(evento, 'Clicou Botão ok');

let count = 0;

setInterval(() => {
  // eslint-disable-next-line no-plusplus
  emissor.emit(evento, `Clicou Botão Ok...: ${count++}`);
}, 1000); */

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
  console.log(`Você digitou...: ${value.toString().trim()}`);
});
