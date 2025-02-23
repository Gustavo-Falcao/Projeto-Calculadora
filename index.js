let bot_val = document.querySelector('.val')
let bot_fun = document.querySelector('button.func')
let input = document.querySelector('#txt_num')

let limpar = document.querySelector('#limpa')
let apagar = document.querySelector('#apaga')

let limpa_val = document.querySelector('#limpa_um_valor')
let potencia = document.getElementById('potencia')
let raiz = document.getElementById('raiz')
let divisao = document.getElementById('divisao')
let multipli = document.getElementById('multiplicacao')
let sub = document.getElementById('subtracao')
let sum = document.getElementById('soma')
let virgula = document.getElementById('ponto_decimal')
let result = document.getElementById('resultado')

/* window.document.addEventListener('DOMContentLoaded',() => {
    let valor_formatado = input.value
    input.value = valor_formatado.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}); */


window.onclick = function(elemento) {
    let elementoClicado = elemento.target;
    let idElemento = elementoClicado.id;
    let conteudo = elementoClicado.textContent;


    if(!isNaN(conteudo)) {
        if(input.value.length == 1 && input.value == '0') {
            input.value = conteudo
        } else {
            input.value += conteudo
        } 
    }

    if(input.value.length > 3) {
        let str_formatada = input.value.replace(/\./g, "")//as barras são area de escape para o ponto pois ele é um caractere especial e g significa global para acessar todos os pontos da string;
        let input_number = Number(str_formatada)
        input.value = input_number.toLocaleString('pt-BR');
   }

    switch(idElemento) {
        case "divisao": 
            mostraParcial(input.value += ' / ');
        break;
        case "multiplicacao": 
            mostraParcial(input.value += ' x ');
        break;
        case "subtracao": 
            mostraParcial(input.value += ' - ');
        break;
        case "soma": 
            mostraParcial(input.value += ' + ');
        break;
        case "potencia": 
            mostraParcial(input.value += ' ** ');
        break;
        case "resultado":
             mostraParcial(input.value += ' = ');
        break;
    }

}

let caixa = document.querySelector('#result_parcial')

function mostraParcial(val_input) {
    let novo_val = ""
    let caractere
    let reset = false
    
    caixa.textContent += val_input
    console.log(caixa.textContent)
    console.log(novo_val.length)
    input.value = '0'
    
    //let index = val_input.length
    //let caractere = val_input[index - 2]
    /* switch(caractere) {
        case '/': 
    } */
    
}


/* const numeros = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']

numeros.forEach((id, index) => {
    document.getElementById(id).addEventListener('click', () => {
        insereNum(index)
    });
}); */


function verificaFuncaoClicada(str) {
    let caractere_encontrado = false
    for(let i in str) {
        if(isNaN(str[i]) && str[i] != ' ') {
            caractere_encontrado = true;
            break;
        }
    }

    return caractere_encontrado;
}

function insereNum(num) {



    /* if(input.value.length == 1 && input.value == '0') {
        input.value = num
    } else {
        input.value += num
    } */

    /* if(verificaFuncaoClicada(caixa.textContent) || input.value == '0') {
        input.value = num
    } else {
        input.value += num
    }  */
}


limpar.addEventListener('click', () => {
    input.value = '0'
    caixa.textContent = ' '
})

apagar.addEventListener('click', () => {
    input.value = input.value.slice(0, -1)
})

