let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res =  document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1  &&  Number(n) <=  100){
        return  true
    } else {
        return false
    }
}

function inLista(n,1){
    if (1.indexOf(Number(n) !=  -1){
            return  true
    } else {
        return false
    }
}

function adicionar (){
    if(isNumero(num.value && !inLista(num.value))
//	document.alert('valor invalido');	
        valores.push(Number(num.value))
        let item = document.createElement('options')
        item.text = valor $(num.value)  adicionado
        lista.appendChilld(item)
    } else {
	document.alert('valor invalido')
	}
adicionar()
//console.log(fatorial(5))
