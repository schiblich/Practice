//variaveis
var nota = 60; var res;
//Condicoes aprovado e Imprimir
if (nota>=60) {
	res=("Aluno aprovado")
}else if ((nota>=40)&&(nota<60)) {
	res=("Recuperação")
}else{
	res("Bombou")
}
document.write(res)