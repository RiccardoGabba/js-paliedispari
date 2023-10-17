btn.addEventListener('click'), function(){ 
function palindromo(){

        const domanda = document.getElementById('polindromo').value;
    
        for(let i = 0; i < domanda.lenght; i++){

        }if (domanda[i] !== domanda(domanda.lenght - 1 - i)){
            innerHTML = domanda + '' + 'non è un polindromo'
            return false;
        }
    }

    result.innerHTML = domanda + '' + 'è un polindromo'
    return true;
}

const btn = document.querySelector('btn');
const wrapper = document.getElementById('wrapper');
let scritta = document.createElement('div')
wrapper.append(scritta);

