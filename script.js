const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    let stringa = document.getElementById('nome').value;
    let parola = stringa;
    for (let i = 0; i < parola.length; i++) {
        
        if(stringa[i] !== stringa[parola.length - 1 - i]){
            console.log('la parola non è polindroma')
            return false;
        }
    } 
    console.log('la parola è polindroma')
    return true; 
})







