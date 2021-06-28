
function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
    // Escreva seu código aqui
    var numero;
    var outroNumero;
    var operacao;
    var resultado = numero + operacao + outroNumero
if (numero>outroNumero){
    resultado = numero + outroNumero;
}else if (outroNumero>numero){
    resultado = outroNumero - numero;
    }else if (numero==outroNumero){
        resultado = numero + outroNumero;
    }
return resultado
}
calculadoraAdicaoSubtracao(1,1)