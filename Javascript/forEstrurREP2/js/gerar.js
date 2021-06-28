function gerar(){
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
     let n  = Number(num.value); 
    tab.innerHTML=''
    if  (num.length ==  0){
        window.alert('favor  digite  um número...')
          } else {
        //let n  = Number(num.value);                
    for (let c  = 1; c < 10; c++){
      let item = document.createElement('option');
      item.text = ${n} x  ${c} =  ${n*c}
      item.value =  tab${c}
      tab.appendChild(item)
          } 
      }
            }  
}           
gerar()