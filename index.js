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

let conta_parcial
let caixa = document.querySelector('#result_parcial')

window.onclick = function(elemento) {
    let elementoClicado = elemento.target;
    let idElemento = elementoClicado.id;
    let conteudo = elementoClicado.textContent;



    if(!isNaN(conteudo)) {
        if((input.value.length == 1 && input.value == '0')) {
            input.value = conteudo
        } else {
            input.value += conteudo
        } 
    }

    if(input.value.length > 3) {
        let str_formatada = input.value.replace(/\./g, "")//as barras são area de escape para o ponto pois ele é um caractere especial e g significa global para acessar todos os pontos da string;
        let input_number = Number(str_formatada)
        mostrarValorFormatado(input_number.toLocaleString('pt-BR')) 
   }

    switch(idElemento) {
        case "divisao": 
            if(caixa.textContent.indexOf('=')) {
                mostraParcial(input.value += ' / ', 1)
            } else {
                mostraParcial(input.value += ' / ');
            }
        break;
        case "multiplicacao": 
            if(caixa.textContent.indexOf('=')) {
                mostraParcial(input.value += ' x ', 1)
            } else {
                mostraParcial(input.value += ' x ');
            }
        break;
        case "subtracao": 
            if(caixa.textContent.indexOf('=')) {
                mostraParcial(input.value += ' - ', 1)
            } else {
                mostraParcial(input.value += ' - ');
            }
        break;
        case "soma": 
            if(caixa.textContent.indexOf('=')) {
                mostraParcial(input.value += ' + ', 1)
            } else {
                mostraParcial(input.value += ' + ');
            }    
        break;
/*         case "potencia": 
            mostraParcial(input.value += ' ** ');
        break; */
        case "resultado":
             mostraParcial(input.value += ' = ');
            
            let sinal = catchSign();
            let posicao = caixa.textContent.indexOf(sinal)

            console.log("Sinal: " + sinal)
            console.log("Posição sinal: " + posicao)
            console.log("Tamanho caixa: " + caixa.textContent.length)

            switch(sinal) {
                case '+': 
                    let SumNum1 = catchNum1(0, posicao-1)
                    let SumNum2 = catchNum2(posicao+1, caixa.textContent.length-2)
                    let soma = SumNum1 + SumNum2
                    input.value = soma
                    //caixa.textContent += soma
                    console.log("Soma dos valores: " + soma)
                    console.log("Valor 1: " + SumNum1)
                    console.log("Valor 2: " + SumNum2)
                break;

                case '-': 
                    let SubNum1 = catchNum1(0, posicao-1)
                    let SubNum2 = catchNum2(posicao+1, caixa.textContent.length-2)
                    let sub = SubNum1 - SubNum2
                    input.value = sub
                    caixa.textContent += sub
                break;

                case '/': 
                    let DivNum1 = catchNum1(0, posicao-1)
                    let DivNum2 = catchNum2(posicao+1, caixa.textContent.length-2)
                    let div = DivNum1 / DivNum2
                    input.value = div
                    caixa.textContent += div
                break;

                case 'x': 
                    let MultNum1 = catchNum1(0, posicao-1)
                    let MultNum2 = catchNum2(posicao+1, caixa.textContent.length-2)
                    let mult = MultNum1 * MultNum2
                    input.value = mult
                    caixa.textContent += mult
                break;

                case '*':
                    let PotNum1 = catchNum1(0, posicao-1)
                    let PotNum2 = catchNum2(posicao+1, caixa.textContent.length-2)
                    let pot = PotNum1 ** PotNum2
                    input.value = pot
                    caixa.textContent += pot
                break;
            }

        break;
    }

}

function catchNum1(inicio, fim) {
    return Number(caixa.textContent.slice(inicio, fim))
}

function catchNum2(inicio, fim) {
    return Number(caixa.textContent.slice(inicio, (fim)))
}

function catchSign() {
    let carac;
    for(let i = 0; i < caixa.textContent.length; i++) {
       if(isNaN(caixa.textContent[i]) && caixa.textContent[i] != ' ') {
           carac = caixa.textContent[i]
           break;
       }
   }
   return carac;
}


function mostraParcial(val_input, HaveEqual) {
    if(HaveEqual == 1) {
        caixa.textContent = val_input
    } else {
        caixa.textContent += val_input
    }
    input.value = '0'
}

function Divisao(num1, num2) {
    return Number(num1) / Number(num2);
}

function Multiplicacao(num1, num2) {
    return Number(num1) * Number(num2);
}

function Subtracao(num1, num2) {
    return Number(num1) - Number(num2);
}

function Soma(num1, num2) {
    return Number(num1) + Number(num2);
}

function Potencia(num1, num2) {
    return Number(num1) ** Number(num2);
}

function mostrarValorFormatado(valor) {
    input.value = valor
}



limpar.addEventListener('click', () => {
    input.value = '0'
    caixa.textContent = ' '
})

apagar.addEventListener('click', () => {
    input.value = input.value.slice(0, -1)
})

