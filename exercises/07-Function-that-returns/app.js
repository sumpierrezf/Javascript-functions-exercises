let dollarToEuro = function(dollarValue) {
    return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
    return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******//

let valor = dollarToEuro(137);
let valor2 = euroToYen(valor);
console.log(valor2);