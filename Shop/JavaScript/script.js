

function setQuantity(n,operation) {
    let quantity = Number(document.getElementById("quantity" + n).innerHTML.replace("R$", "").replace(",", ".").trim());// tira o cifrão, substitui a vírgula por ponto e transforma em número
    let totalValue = Number(document.getElementById("totalValue" + n).innerHTML.replace("R$", "").replace(",", ".").trim());
    let value = Number(document.getElementById("value" + n).innerHTML.replace("R$", "").replace(",", ".").trim());
    if(quantity > 0){
    operation == "+" ? quantity++ : quantity--;
        document.getElementById("quantity" + n).innerHTML = quantity;
    }else if(quantity == 0 && operation == "+"){ 
        quantity++;
        document.getElementById("quantity" + n).innerHTML = quantity;
    }
    const newTotalValue = value * quantity;
    document.getElementById("totalValue" + n).innerHTML = "R$ " + newTotalValue.toFixed(2).replace(".", ",");
    updateTotalSum();
    
}

function updateTotalSum() {
    let totalSum = 0;
    const totalValueElements = document.querySelectorAll("[id^='totalValue']");
    totalValueElements.forEach(element => {
        const value = Number(element.innerHTML.replace("R$", "").replace(",", ".").trim());
        totalSum += value; // Soma os valores
    }
);
    document.getElementById("totalSum").innerHTML = "R$ " + totalSum.toLocaleString('pt-BR');// Formata o total para o padrão brasileiro.
}




// let value1 = Number(document.getElementById("value1").innerHTML.replace("R$", "").replace(",", ".").trim());
// let quantity1 = Number(document.getElementById("quantity1").innerHTML);
// let totalValue1 = Number(document.getElementById("totalValue1").innerHTML.replace("R$", "").replace(",", ".").trim());

// let value2 = Number(document.getElementById("value2").innerHTML.replace("R$", "").replace(",", ".").trim());
// let quantity2 = Number(document.getElementById("quantity2").innerHTML);
// let totalValue2 = Number(document.getElementById("totalValue2").innerHTML.replace("R$", "").replace(",", ".").trim());

// let value3 = Number(document.getElementById("value3").innerHTML.replace("R$", "").replace(",", ".").trim());
// let quantity3 = Number(document.getElementById("quantity3").innerHTML);
// let totalValue3 = Number(document.getElementById("totalValue3").innerHTML.replace("R$", "").replace(",", ".").trim());


// let totalSum = Number(document.getElementById("totalSum").innerHTML.replace("R$", "").replace(",", "."));

// function updateTotalSum() {
//     let totalSum = totalValue1 + totalValue2 + totalValue3;
//     document.getElementById("totalSum").innerHTML = "R$ " + totalSum.toFixed(2).replace(".", ",");   
// }
// function addQuantity(n) {  
//     switch (n) { 
//         case 1:
//             quantity1 += 1;
//             totalValue1 = value1 * quantity1;
//             document.getElementById("quantity1").innerHTML = quantity1;
//             document.getElementById("totalValue1").innerHTML = "R$ " + totalValue1.toFixed(2).replace(".", ",");
//             break;
//         case 2:
//             quantity2 += 1;
//             totalValue2 = value2 * quantity2;
//             document.getElementById("quantity2").innerHTML = quantity2;
//             document.getElementById("totalValue2").innerHTML = "R$ " + totalValue2.toFixed(2).replace(".", ",");
//             break;
//         case 3:
//             quantity3 += 1;
//             document.getElementById("quantity3").innerHTML = quantity3;
//             totalValue3 = value3 * quantity3;
//             document.getElementById("totalValue3").innerHTML = "R$ " + totalValue3.toFixed(2).replace(".", ",");
//             break;
//         default: return 0;
//     }
//     updateTotalSum();
// }

// function removeQuantity(n) {
//     switch (n) {
//         case 1:
//             if (quantity1 > 0) {
//                 quantity1 -= 1;
//                 totalValue1 = value1 * quantity1;
//                 document.getElementById("quantity1").innerHTML = quantity1;
//                 document.getElementById("totalValue1").innerHTML = "R$ " + totalValue1.toFixed(2).replace(".", ",");
//             }
//             break;
//         case 2:
//             if (quantity2 > 0) {
//                 quantity2 -= 1;
//                 document.getElementById("quantity2").innerHTML = quantity2;
//                 totalValue2 = value2 * quantity2;
//                 document.getElementById("totalValue2").innerHTML = "R$ " + totalValue2.toFixed(2).replace(".", ",");
//             }
//             break;
//         case 3:
//             if (quantity3 > 0) {
//                 quantity3 -= 1;
//                 document.getElementById("quantity3").innerHTML = quantity3;
//                 totalValue3 = value3 * quantity3;
//                 document.getElementById("totalValue3").innerHTML = "R$ " + totalValue3.toFixed(2).replace(".", ",");
//             }
//             break;
//         default: return 0;
//     }
//     updateTotalSum();
// }
