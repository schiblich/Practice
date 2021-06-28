function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let pass = document.getElementById('txtp');
    let res =  document.getElementById('res');
    if  (ini.value.length ==  0 || fim.value.length ==  0  ||  pass.value.length == 0){
        window.alert('Erro! Faltam Dados!...');
    } else {
        res.innerHTML = 'Contando...'
        let i  = Number(ini.value);                
        let f  = Number(fim.value);
        let p  = Number(pass.value);
    
    for (let c = i; c < f; c += p) {
            res.innerHTML += c;
    } 
                            }
            }         
contar()