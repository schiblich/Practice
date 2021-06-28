'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete a função 'retornaNomeCompleto' abaixo.
 *
 * É esperado que a função retorne uma STRING
 */

function retornaNomeCompleto() {
    




var nomeCompleto = 'Roberto Schiblich';
return nomecompleto;
/*
 * Declare na linha 37 a variável `nomeCompleto` e atribua a ela o seu nome completo
 */

// fim do seu código
