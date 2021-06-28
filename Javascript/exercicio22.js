function determinarGeracao(anoDeNascimento) {
// não altere a linha acima
     if (anoDeNascimento<=1945){
        resultado = "Geracao Silenciosa";

    }else  if (anoDeNascimento>1945&&anoDeNascimento<=1964){
        resultado = "Geracao Boomers";

    }else if (anoDeNascimento>1964&&anoDeNascimento<=1980){
        resultado = "Geracao X";

        }else if (anoDeNascimento>1980&&anoDeNascimento<=1996){
        resultado = "Geracao Millenials";

        }else if (anoDeNascimento>1996){
        resultado = "Geracao Z";
    }
/* 
 * Atribua um dos seguintes valores na variável `resultado`
 *
 * Geração silenciosa: para os nascidos até o ano de 1945;
 * Boomers: para os que nasceram depois de 1945 até 1964;
 * Geração X: para os que nasceram depois de 1964 até 1980;
 * Millennials: para os que nasceram depois de 1980 até 1996;
 * Geração Z: para os que nasceram depois de 1996;
 */
  
  var resultado;

// não altere as linhas abaixo
  return resultado;
}
determinarGeracao()
