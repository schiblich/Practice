//variaveis
var mochila = [], mochila1 = [], mochila2 = []; 
//var pos;

//array e Imprimir
mochila1.push("faca"); 
mochila1.push("Corda"); 
mochila1.push("Pederneira");
mochila1.push("chave"); 
mochila1.push("lanterna");
//mochila1.sort()

mochila2.push("arame"); 
mochila2.push("porca"); 
mochila2.push("madeira");
mochila2.push("carro"); 
mochila2.push("bateria");
//mochila2.sort()

//formula
mochila = mochila1.concat(mochila2);
//Imprimir
//console.log([cor.sort])
document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>");
document.write(mochila[6]+"<br>");
document.write(mochila[7]+"<br>");
document.write(mochila[8]+"<br>");
document.write(mochila[9]+"<br>");
//console.log(cor);
document.write("O tamanho da mochila1 é de :" + mochila1.length + " " + "itens" + "<br>");
document.write("O tamanho da mochila2 é de :" + mochila2.length + " " + "itens" + "<br>");
document.write("O tamanho da mochila é de :" + mochila.length + " " + "itens" + "<br>");