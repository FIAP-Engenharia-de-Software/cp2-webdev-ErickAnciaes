// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if((operador != "+") || (operador != "-" )  || (operador != "/" )  || (operador != "*" )){
    return "Erro: operação inválida"

  }
  if((num1 == isNaN ) ||  (num2 == isNaN)){
    return "Erro: parametros inválidos"

  }

  if((operador == "/") && (num2 == 0)){
    return "Erro: divisâo por zero"

  }

  if (operador == "+") {
    soma =  num1 + num2;
    return soma
  }
  else if(operador == "-") {
    subtracao = num1 - num2
    return subtracao
  }
  else if(operador == "*") {
    multiplicacao = num1 * num2
    return  multiplicacao
  }
  else if(operador == "/"){
    divisao = num1 / num2;
    return divisao

  }

}




//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };