
function calculate(operator) {
    const a = Number(document.getElementById("a").value); 
    const b = Number(document.getElementById("b").value);
    let result
   
     switch(operator) {
        case '+':
            result =  sum(a, b);
            document.getElementById("resultado").innerHTML = "A soma dos números é: " + result;
            break;
        case '-':
            result = subtract(a, b);
            document.getElementById("resultado2").innerHTML = "A Subtração dos números é: " + result;
            break;
        case '*':
           result =  multiply(a, b);
           document.getElementById("resultado3").innerHTML = "A multiplicação dos números é: " + result;
            break;
        case '/':
            if (b === 0) {
                alert("Divisão por zero não é permitida.");
            } else {
                result = divide(a, b);
                document.getElementById("resultado4").innerHTML = "A divisão dos números é: " + result;
            }
            break;
        default:
            alert("Operador inválido");
    }
}

//Criando uma variável que recebe uma função

const somaExpressão = function(a, b) {        
return a + b;
}

//criando uma função de seta

const somaArrow = (a, b) => a + b

// Função normais com parametros
function sum(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return Number(a) / Number(b);
}
function clean() {
    document.getElementById("resultado").innerHTML = "A soma dos números é: ";
    document.getElementById("resultado2").innerHTML = "A subtração dos números é: ";
    document.getElementById("resultado3").innerHTML = "A multiplicação dos números é: ";
    document.getElementById("resultado4").innerHTML = "A divisão dos números é: ";
    document.getElementById("a").value = '';
    document.getElementById("b").value = '';
}

// function somar() {
//     a = Number(document.getElementById("a").value);
//     b = Number(document.getElementById("b").value);
//     const soma = a + b;
    
//     document.getElementById("resultado").innerHTML = "A soma dos números é: " + soma;
// }

// function subtrair() {
//     let a = Number(document.getElementById("a").value);
//     let b = Number(document.getElementById("b").value);
//     const subtracao = Number(a - b);
    

//     document.getElementById("resultado2").innerHTML = "A subtração dos números é: " + subtracao;
// }

// function multiplicar() {
//     let a = Number(document.getElementById("a").value);
//     let b = Number(document.getElementById("b").value);
//     const multiplicacao = Number(a * b);
    
//     document.getElementById("resultado3").innerHTML = "A multiplicação dos números é: " + multiplicacao;
// }

// function dividir() {
//     let a = Number(document.getElementById("a").value);
//     let b = Number(document.getElementById("b").value);
//     const divisao = Number(a / b);
    
//     document.getElementById("resultado4").innerHTML = "A divisão dos números é: " + divisao;
// }

