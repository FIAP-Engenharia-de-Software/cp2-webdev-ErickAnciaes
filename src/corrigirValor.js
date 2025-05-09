// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  if (valor == isNaN){
    return "Valor Inválido"
  }
  else{
    return parseInt(valor)
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };