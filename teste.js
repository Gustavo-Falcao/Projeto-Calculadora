// let val_parcial = " 25000 "
// let input = " 120 "
// let caractere;
// let num1
// let num2
// let new_val_parcial
// let novo_valor = Number(val_parcial)


// new_val_parcial = novo_valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});

// console.log(new_val_parcial)

let str1 = "34 + 23 -";
let caracteres = "";

for(let i in str1) {
    if(isNaN(str1[i]) && str1[i] != ' ') {
        caracteres += str1[i]
    }
}

console.log(caracteres)